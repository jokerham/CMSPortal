import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

/**
 * Central Amplify configuration
 * - Called once at app startup
 * - Safe to import anywhere
 */
export function configureAmplify() {
  Amplify.configure(awsExports);
}
