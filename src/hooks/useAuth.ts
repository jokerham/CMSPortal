import { useAuthStore } from '@/state/authStore';

/**
 * React-friendly Auth hook
 * - Thin wrapper around authStore
 * - Exposes derived auth state + actions
 */
export function useAuth() {
  const {
    status,
    isLoading,
    user,
    idToken,
    accessToken,
    groups,
    error,

    init,
    refreshSession,
    logout,

    isAdmin,
    hasGroup,
  } = useAuthStore();

  const isAuthenticated = status === 'authenticated';
  const isUnauthenticated = status === 'unauthenticated';
  const isUnknown = status === 'unknown';

  return {
    // --- raw state ---
    status,
    isLoading,
    user,
    idToken,
    accessToken,
    groups,
    error,

    // --- derived flags ---
    isAuthenticated,
    isUnauthenticated,
    isUnknown,
    isAdmin: isAdmin(),

    // --- actions ---
    init,
    refreshSession,
    logout,

    // --- helpers ---
    hasGroup,
  };
}