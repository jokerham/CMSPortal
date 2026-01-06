import { useEffect, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
import { useAuthStore } from '@/state/authStore';

type AuthGuardProps = {
  children: ReactNode;
};

/**
 * AuthGuard
 * - Calls init() to check for existing session on mount
 * - Blocks unauthenticated users
 * - Shows loading spinner while auth status is being resolved
 * - Redirects to /login with redirect param
 */
export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation();
  const status = useAuthStore(state => state.status);
  const isLoading = useAuthStore(state => state.isLoading);
  const init = useAuthStore(state => state.init);

  // Initialize auth on mount - checks for existing session
  useEffect(() => {
    if (status === 'unknown') {
      void init();
    }
  }, [status, init]);

  const isAuthenticated = status === 'authenticated';
  const isUnknown = status === 'unknown';

  // While auth status is being resolved
  if (isUnknown || isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Not logged in → redirect to login
  if (!isAuthenticated) {
    const redirect = encodeURIComponent(
      location.pathname + location.search,
    );

    return (
      <Navigate
        to={`/login?redirect=${redirect}`}
        replace
      />
    );
  }

  return <>{children}</>;
}