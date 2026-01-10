import { generateClient } from 'aws-amplify/api';
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { configureAmplify } from '../../config/amplify.js';
import * as mutations from '../../graphql/mutations.js';
import * as queries from '../../graphql/queries.js';
import type { SeedFile } from '../seedRunner.js';

/**
 * Seed: Create default full-width layout
 * Created: 2025-01-07
 *
 * Note: This seed requires admin authentication.
 * Set environment variables: ADMIN_USERNAME and ADMIN_PASSWORD
 */

// Configure Amplify before making API calls
configureAmplify();

// Sign in as admin user
async function authenticateAdmin() {
  try {
    // Check if user is already signed in
    await getCurrentUser();
    return; // Already authenticated
  } catch {
    // Not authenticated, proceed with sign in
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    if (!username || !password) {
      throw new Error('Missing ADMIN_USERNAME or ADMIN_PASSWORD environment variables');
    }

    await signIn({ username, password });
  }
}

const client = generateClient();

let layoutId: string | null = null;

export const seed: SeedFile = {
  metadata: {
    timestamp: '2025-01-07T00-01-00',
    name: '2025-01-07T00-01-00_create-default-layout.ts',
    description: 'Create default full-width layout'
  },

  async up() {
    console.log('Creating default layout...\n');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      const regionConfigs = [
        {
          regionName: 'header',
          type: 'menu',
          config: {
            position: 'header',
            orientation: 'horizontal'
          }
        },
        {
          regionName: 'content',
          type: 'dynamic',
          config: {}
        },
        {
          regionName: 'footer',
          type: 'menu',
          config: {
            position: 'footer',
            orientation: 'horizontal'
          }
        }
      ];

      const result = await client.graphql({
        query: mutations.createLayout,
        variables: {
          input: {
            name: 'Default Full Width',
            description: 'Simple full-width layout with header and footer',
            templateId: 'full-width',
            isDefault: true,
            regionConfigs: JSON.stringify(regionConfigs)
          }
        }
      });

      layoutId = result.data.createLayout.id;
      
      console.log('✅ Created default layout:');
      console.log(`   ID: ${layoutId}`);
      console.log(`   Template: full-width`);
      console.log(`   Status: Default layout`);

    } catch (error) {
      console.error('\n❌ Seed failed:', error);
      throw error;
    }
  },

  async down() {
    console.log('Rolling back default layout...\n');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      // Find and delete default layout
      const result = await client.graphql({
        query: queries.listLayouts,
        variables: {
          filter: {
            name: { eq: 'Default Full Width' }
          }
        }
      });

      for (const layout of result.data.listLayouts.items) {
        await client.graphql({
          query: mutations.deleteLayout,
          variables: { input: { id: layout.id } }
        });
        console.log(`✓ Deleted layout: ${layout.name}`);
      }

      console.log('\n✅ Rollback completed successfully!');

    } catch (error) {
      console.error('\n❌ Rollback failed:', error);
      throw error;
    }
  }
};