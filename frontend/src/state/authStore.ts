import { create } from 'zustand';
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession, getCurrentUser, signOut } from 'aws-amplify/auth';

export type AuthStatus = 'unknown' | 'authenticated' | 'unauthenticated';

export type AuthUser = {
  userId: string; // Cognito "sub"
  username?: string;
};

type AuthState = {
  status: AuthStatus;
  isLoading: boolean;

  user: AuthUser | null;

  // Commonly used for permission checks / API auth
  idToken: string | null;
  accessToken: string | null;
  groups: string[];

  error: string | null;

  // Actions
  init: () => Promise<void>;
  refreshSession: () => Promise<void>;
  logout: () => Promise<void>;

  // Helpers
  isAdmin: () => boolean;
  hasGroup: (group: string) => boolean;
};

async function readSession() {
  // fetchAuthSession() does NOT throw 400 for unauthenticated user in Gen2 auth;
  // but can still throw if config/network issues occur.
  const session = await fetchAuthSession();

  const idToken = session.tokens?.idToken?.toString() ?? null;
  const accessToken = session.tokens?.accessToken?.toString() ?? null;

  // Groups are usually on the ID token under "cognito:groups"
  const groups =
    (session.tokens?.idToken?.payload?.['cognito:groups'] as string[] | undefined) ?? [];

  return { idToken, accessToken, groups };
}

export const useAuthStore = create<AuthState>((set, get) => {
  // ---- Hub listener: keeps state in sync when Amplify Auth changes elsewhere ----
  Hub.listen('auth', ({ payload }) => {
    const event = payload.event;

    if (event === 'signedIn') {
      // user signed in (Hosted UI or signIn call)
      void get().refreshSession();
    }

    if (event === 'signedOut') {
      set({
        status: 'unauthenticated',
        isLoading: false,
        user: null,
        idToken: null,
        accessToken: null,
        groups: [],
        error: null,
      });
    }
  });

  return {
    status: 'unknown',
    isLoading: false,
    user: null,
    idToken: null,
    accessToken: null,
    groups: [],
    error: null,

    /**
     * Call once on app boot.
     * - Sets status to authenticated/unauthenticated
     * - Avoids throwing noisy errors when no user is signed in
     */
    init: async () => {
      set({ isLoading: true, error: null });

      try {
        // If not signed in, this throws (we handle it)
        const currentUser = await getCurrentUser();
        const { idToken, accessToken, groups } = await readSession();

        set({
          status: 'authenticated',
          isLoading: false,
          user: {
            userId: currentUser.userId, // Cognito sub
            username: currentUser.username,
          },
          idToken,
          accessToken,
          groups,
          error: null,
        });
      } catch {
        // Most common on initial load: "UserUnAuthenticatedException" / "No current user"
        set({
          status: 'unauthenticated',
          isLoading: false,
          user: null,
          idToken: null,
          accessToken: null,
          groups: [],
          error: null, // keep null to avoid showing error UI for normal logged-out state
        });
      }
    },

    /**
     * Refresh tokens & groups without forcing a page reload
     * Useful after sign-in, token refresh, role changes, etc.
     */
    refreshSession: async () => {
      set({ isLoading: true, error: null });

      try {
        const currentUser = await getCurrentUser();
        const { idToken, accessToken, groups } = await readSession();

        set({
          status: 'authenticated',
          isLoading: false,
          user: {
            userId: currentUser.userId,
            username: currentUser.username,
          },
          idToken,
          accessToken,
          groups,
          error: null,
        });
      } catch {
        set({
          status: 'unauthenticated',
          isLoading: false,
          user: null,
          idToken: null,
          accessToken: null,
          groups: [],
          error: null,
        });
      }
    },

    /**
     * Sign out and clear state
     */
    logout: async () => {
      set({ isLoading: true, error: null });

      try {
        await signOut();
      } finally {
        // Whether signOut succeeds or not, clear local auth state
        set({
          status: 'unauthenticated',
          isLoading: false,
          user: null,
          idToken: null,
          accessToken: null,
          groups: [],
          error: null,
        });
      }
    },

    hasGroup: (group: string) => {
      const { groups } = get();
      return groups.includes(group);
    },

    isAdmin: () => {
      const { groups } = get();
      return groups.includes('Admin');
    },
  };
});