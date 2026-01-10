import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface SeedMetadata {
  timestamp: string;
  name: string;
  description: string;
  appliedAt?: string;
  rolledBackAt?: string;
}

export interface SeedFile {
  metadata: SeedMetadata;
  up: () => Promise<void>;
  down: () => Promise<void>;
}

class SeedRunner {
  private seedsDir: string;
  private metadataFile: string;

  constructor() {
    this.seedsDir = path.join(__dirname, 'seeds');
    this.metadataFile = path.join(this.seedsDir, 'seed-metadata.json');
    this.ensureDirectoriesExist();
  }

  private ensureDirectoriesExist() {
    if (!fs.existsSync(this.seedsDir)) {
      fs.mkdirSync(this.seedsDir, { recursive: true });
    }
    if (!fs.existsSync(this.metadataFile)) {
      fs.writeFileSync(this.metadataFile, JSON.stringify([], null, 2));
    }
  }

  private getMetadata(): SeedMetadata[] {
    const content = fs.readFileSync(this.metadataFile, 'utf-8');
    return JSON.parse(content);
  }

  private saveMetadata(metadata: SeedMetadata[]) {
    fs.writeFileSync(this.metadataFile, JSON.stringify(metadata, null, 2));
  }

  /**
   * Create a new seed file
   * @param summary - Brief description of what the seed does
   */
  createSeed(summary: string): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    const sanitizedSummary = summary
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const fileName = `${timestamp}_${sanitizedSummary}.ts`;
    const filePath = path.join(this.seedsDir, fileName);

    const template = `import { generateClient } from 'aws-amplify/api';
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { configureAmplify } from '../../config/amplify.js';
import * as mutations from '../../graphql/mutations.js';
import * as queries from '../../graphql/queries.js';
import type { SeedFile } from '../seedRunner.js';

/**
 * Seed: ${summary}
 * Created: ${new Date().toISOString()}
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
  } catch (error) {
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

export const seed: SeedFile = {
  metadata: {
    timestamp: '${timestamp}',
    name: '${fileName}',
    description: '${summary}'
  },

  /**
   * Apply this seed
   */
  async up() {
    console.log('Running seed: ${summary}');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      // TODO: Implement your seed logic here
      // Example:
      // const role = await client.graphql({
      //   query: mutations.createRole,
      //   variables: {
      //     input: {
      //       name: 'Member',
      //       description: 'Default member role',
      //       isSystemRole: false
      //     }
      //   }
      // });

      console.log('✓ Seed completed successfully');
    } catch (error) {
      console.error('✗ Seed failed:', error);
      throw error;
    }
  },

  /**
   * Rollback this seed
   */
  async down() {
    console.log('Rolling back seed: ${summary}');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      // TODO: Implement rollback logic here
      // This should undo what the up() method did
      // Example:
      // const result = await client.graphql({
      //   query: queries.listRoles,
      //   variables: { filter: { name: { eq: 'Member' } } }
      // });
      // 
      // for (const role of result.data.listRoles.items) {
      //   await API.graphql({
      //     query: mutations.deleteRole,
      //     variables: { input: { id: role.id } }
      //   });
      // }

      console.log('✓ Rollback completed successfully');
    } catch (error) {
      console.error('✗ Rollback failed:', error);
      throw error;
    }
  }
};
`;

    fs.writeFileSync(filePath, template);
    console.log(`✓ Created seed file: ${fileName}`);
    console.log(`  Location: ${filePath}`);
    console.log(`\nNext steps:`);
    console.log(`1. Edit the file and implement the up() and down() methods`);
    console.log(`2. Run: npm run seed:run ${fileName}`);
    
    return fileName;
  }

  /**
   * Get list of seed files
   */
  private getSeedFiles(): string[] {
    return fs.readdirSync(this.seedsDir)
      .filter(file => file.endsWith('.ts') && file !== 'seed-metadata.json')
      .sort();
  }

  /**
   * Run a specific seed or all pending seeds
   */
  async runSeed(seedName?: string) {
    const metadata = this.getMetadata();
    const seedFiles = this.getSeedFiles();

    if (seedName) {
      // Run specific seed
      if (!seedFiles.includes(seedName)) {
        throw new Error(`Seed file not found: ${seedName}`);
      }

      // Check if seed has already been applied
      const existingSeed = metadata.find(m => m.name === seedName && m.appliedAt && !m.rolledBackAt);
      if (existingSeed && existingSeed.appliedAt) {
        console.log(`Seed already applied: ${seedName}`);
        console.log(`Applied at: ${new Date(existingSeed.appliedAt).toLocaleString()}`);
        console.log('\nUse --force flag to re-run, or rollback first using: npm run seed:rollback');
        return;
      }

      await this.executeSeed(seedName, metadata);
    } else {
      // Run all pending seeds
      const pendingSeeds = seedFiles.filter(file =>
        !metadata.find(m => m.name === file && m.appliedAt && !m.rolledBackAt)
      );

      if (pendingSeeds.length === 0) {
        console.log('No pending seeds to run');
        return;
      }

      console.log(`Found ${pendingSeeds.length} pending seed(s)\n`);

      for (const seedFile of pendingSeeds) {
        await this.executeSeed(seedFile, metadata);
      }
    }

    this.saveMetadata(metadata);
  }

  /**
   * Execute a single seed
   */
  private async executeSeed(seedFile: string, metadata: SeedMetadata[]) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Running: ${seedFile}`);
    console.log('='.repeat(60));

    const seedPath = path.join(this.seedsDir, seedFile);
    const seedModule = await import(seedPath);
    const seed: SeedFile = seedModule.seed;

    try {
      await seed.up();

      // Update metadata - use actual filename, not metadata from seed file
      const existingIndex = metadata.findIndex(m => m.name === seedFile);
      const seedMetadata: SeedMetadata = {
        timestamp: seed.metadata.timestamp,
        name: seedFile, // Use actual filename instead of seed.metadata.name
        description: seed.metadata.description,
        appliedAt: new Date().toISOString()
      };

      if (existingIndex >= 0) {
        metadata[existingIndex] = seedMetadata;
      } else {
        metadata.push(seedMetadata);
      }

      console.log(`✓ Successfully applied: ${seedFile}\n`);
    } catch (error) {
      console.error(`✗ Failed to apply: ${seedFile}`);
      throw error;
    }
  }

  /**
   * Rollback the last applied seed or a specific seed
   */
  async rollbackSeed(seedName?: string) {
    const metadata = this.getMetadata();
    
    let seedToRollback: SeedMetadata | undefined;

    if (seedName) {
      // Rollback specific seed
      seedToRollback = metadata.find(m => m.name === seedName && m.appliedAt && !m.rolledBackAt);
      if (!seedToRollback) {
        throw new Error(`Seed not found or not applied: ${seedName}`);
      }
    } else {
      // Rollback last applied seed
      const appliedSeeds = metadata
        .filter(m => m.appliedAt && !m.rolledBackAt)
        .sort((a, b) => new Date(b.appliedAt!).getTime() - new Date(a.appliedAt!).getTime());

      if (appliedSeeds.length === 0) {
        console.log('No seeds to rollback');
        return;
      }

      seedToRollback = appliedSeeds[0];
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log(`Rolling back: ${seedToRollback.name}`);
    console.log('='.repeat(60));

    const seedPath = path.join(this.seedsDir, seedToRollback.name);
    const seedModule = await import(seedPath);
    const seed: SeedFile = seedModule.seed;

    try {
      await seed.down();
      
      // Update metadata
      const index = metadata.findIndex(m => m.name === seedToRollback!.name);
      metadata[index].rolledBackAt = new Date().toISOString();

      this.saveMetadata(metadata);
      console.log(`✓ Successfully rolled back: ${seedToRollback.name}\n`);
    } catch (error) {
      console.error(`✗ Failed to rollback: ${seedToRollback.name}`);
      throw error;
    }
  }

  /**
   * Show status of all seeds
   */
  showStatus() {
    const metadata = this.getMetadata();
    const seedFiles = this.getSeedFiles();

    console.log('\nSeed Status:');
    console.log('='.repeat(80));
    console.log(`${'Seed Name'.padEnd(50)} | Status`);
    console.log('='.repeat(80));

    for (const file of seedFiles) {
      const meta = metadata.find(m => m.name === file);
      let status = 'Pending';
      
      if (meta?.appliedAt && meta?.rolledBackAt) {
        status = `Rolled back (${new Date(meta.rolledBackAt).toLocaleString()})`;
      } else if (meta?.appliedAt) {
        status = `Applied (${new Date(meta.appliedAt).toLocaleString()})`;
      }

      console.log(`${file.padEnd(50)} | ${status}`);
    }

    console.log('='.repeat(80));
    console.log(`Total seeds: ${seedFiles.length}`);
    console.log(`Applied: ${metadata.filter(m => m.appliedAt && !m.rolledBackAt).length}`);
    console.log(`Pending: ${seedFiles.filter(f => !metadata.find(m => m.name === f && m.appliedAt)).length}`);
    console.log();
  }
}

// CLI Interface
const runner = new SeedRunner();
const command = process.argv[2];
const arg = process.argv[3];

(async () => {
  try {
    switch (command) {
      case 'create':
        if (!arg) {
          console.error('Error: Please provide a seed description');
          console.log('Usage: npm run seed:create "description of seed"');
          process.exit(1);
        }
        runner.createSeed(arg);
        break;

      case 'run':
        await runner.runSeed(arg);
        break;

      case 'rollback':
        await runner.rollbackSeed(arg);
        break;

      case 'status':
        runner.showStatus();
        break;

      default:
        console.log('CMS Seed Runner');
        console.log('\nUsage:');
        console.log('  npm run seed:create "description"  - Create a new seed file');
        console.log('  npm run seed:run [filename]        - Run all pending seeds or specific seed');
        console.log('  npm run seed:rollback [filename]   - Rollback last seed or specific seed');
        console.log('  npm run seed:status                - Show status of all seeds');
        console.log('\nExamples:');
        console.log('  npm run seed:create "add default roles and permissions"');
        console.log('  npm run seed:run');
        console.log('  npm run seed:run 2025-01-07T12-30-00_add-default-roles.ts');
        console.log('  npm run seed:rollback');
        console.log('  npm run seed:status');
        process.exit(0);
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();