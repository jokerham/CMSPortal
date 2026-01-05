import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type AuthGuardProps = {
  children: ReactNode;
};

/**
 * AuthGuard
 * - Blocks unauthenticated users
 * - Waits for auth initialization
 * - Redirects to /login with redirect param
 */
export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation();
  const { isAuthenticated, isLoading, isUnknown } = useAuth();

  // While auth status is being resolved
  if (isUnknown || isLoading) {
    return null; // or <LoadingSpinner />
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