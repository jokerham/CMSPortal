import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

/**
 * Central Amplify configuration
 * - Called once at app startup
 * - Safe to import anywhere
 */
export function configureAmplify() {
  Amplify.configure({
    ...awsExports,

    // Recommended for SPA routing (Vite / React Router)
    Auth: {
      ...awsExports.Auth,
      mandatorySignIn: false,
    },

    // Optional: API settings
    API: {
      ...awsExports.API,
    },

    // Optional: Storage (S3)
    Storage: {
      ...awsExports.Storage,
    },
  });
}
