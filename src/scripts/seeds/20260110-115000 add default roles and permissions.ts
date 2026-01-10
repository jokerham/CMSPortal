import { generateClient } from 'aws-amplify/api';
import { signIn, getCurrentUser } from 'aws-amplify/auth';
import { configureAmplify } from '../../config/amplify.js';
import * as mutations from '../../graphql/mutations.js';
import * as queries from '../../graphql/queries.js';
import type { SeedFile } from '../seedRunner.js';

/**
 * Seed: Add default roles and permissions
 * Created: 2025-01-07
 *
 * Note: This seed requires admin authentication.
 * Set environment variables: ADMIN_USERNAME and ADMIN_PASSWORD
 */

// Custom mutations without nested objects to avoid authorization issues
const createRolePermissionSimple = /* GraphQL */ `
  mutation CreateRolePermission($input: CreateRolePermissionInput!) {
    createRolePermission(input: $input) {
      id
      roleId
      permissionId
      createdAt
      updatedAt
    }
  }
`;

const deleteRolePermissionSimple = /* GraphQL */ `
  mutation DeleteRolePermission($input: DeleteRolePermissionInput!) {
    deleteRolePermission(input: $input) {
      id
    }
  }
`;

const deletePermissionSimple = /* GraphQL */ `
  mutation DeletePermission($input: DeletePermissionInput!) {
    deletePermission(input: $input) {
      id
    }
  }
`;

const deleteRoleSimple = /* GraphQL */ `
  mutation DeleteRole($input: DeleteRoleInput!) {
    deleteRole(input: $input) {
      id
    }
  }
`;

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

// Store created IDs for rollback
const createdIds: {
  roles: string[];
  permissions: string[];
  rolePermissions: string[];
} = {
  roles: [],
  permissions: [],
  rolePermissions: []
};

export const seed: SeedFile = {
  metadata: {
    timestamp: '2025-01-07T00-00-00',
    name: '2025-01-07T00-00-00_add-default-roles-and-permissions.ts',
    description: 'Add default roles (Admin, Member) and permissions'
  },

  async up() {
    console.log('Creating default roles and permissions...\n');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      // 1. Create default roles
      console.log('📝 Creating roles...');
      
      const adminRole = await client.graphql({
        query: mutations.createRole,
        variables: {
          input: {
            name: 'Admin',
            description: 'System administrator with full access',
            isSystemRole: true
          }
        }
      });
      createdIds.roles.push(adminRole.data.createRole.id);
      console.log('  ✓ Created Admin role');

      const memberRole = await client.graphql({
        query: mutations.createRole,
        variables: {
          input: {
            name: 'Member',
            description: 'Default member role with basic permissions',
            isSystemRole: false
          }
        }
      });
      createdIds.roles.push(memberRole.data.createRole.id);
      console.log('  ✓ Created Member role');

      // 2. Create permissions
      console.log('\n🔐 Creating permissions...');
      
      const permissions = [
        // System permissions
        { moduleType: 'System', permissionKey: 'system.menu.manage', displayName: 'Manage Menus', description: 'Create, edit, and delete menus', category: 'admin' },
        { moduleType: 'System', permissionKey: 'system.user.manage', displayName: 'Manage Users', description: 'Manage user accounts and roles', category: 'admin' },
        { moduleType: 'System', permissionKey: 'system.role.manage', displayName: 'Manage Roles', description: 'Create and edit roles and permissions', category: 'admin' },
        { moduleType: 'System', permissionKey: 'system.layout.manage', displayName: 'Manage Layouts', description: 'Create and edit site layouts', category: 'admin' },
        { moduleType: 'System', permissionKey: 'system.module.manage', displayName: 'Manage Modules', description: 'Configure board, calendar, and other modules', category: 'admin' },
        
        // Article permissions
        { moduleType: 'Article', permissionKey: 'article.read', displayName: 'Read Articles', description: 'View published articles', category: 'read' },
        { moduleType: 'Article', permissionKey: 'article.write', displayName: 'Write Articles', description: 'Create new articles', category: 'write' },
        { moduleType: 'Article', permissionKey: 'article.edit.own', displayName: 'Edit Own Articles', description: 'Edit articles created by self', category: 'edit' },
        { moduleType: 'Article', permissionKey: 'article.edit.all', displayName: 'Edit All Articles', description: 'Edit any article', category: 'edit' },
        { moduleType: 'Article', permissionKey: 'article.delete.own', displayName: 'Delete Own Articles', description: 'Delete articles created by self', category: 'delete' },
        { moduleType: 'Article', permissionKey: 'article.delete.all', displayName: 'Delete All Articles', description: 'Delete any article', category: 'delete' },
        
        // Board permissions
        { moduleType: 'Board', permissionKey: 'board.read', displayName: 'Read Board Posts', description: 'View published board posts', category: 'read' },
        { moduleType: 'Board', permissionKey: 'board.write', displayName: 'Write Board Posts', description: 'Create new board posts', category: 'write' },
        { moduleType: 'Board', permissionKey: 'board.edit.own', displayName: 'Edit Own Posts', description: 'Edit posts created by self', category: 'edit' },
        { moduleType: 'Board', permissionKey: 'board.edit.all', displayName: 'Edit All Posts', description: 'Edit any post', category: 'edit' },
        { moduleType: 'Board', permissionKey: 'board.delete.own', displayName: 'Delete Own Posts', description: 'Delete posts created by self', category: 'delete' },
        { moduleType: 'Board', permissionKey: 'board.delete.all', displayName: 'Delete All Posts', description: 'Delete any post', category: 'delete' },
        
        // Comment permissions
        { moduleType: 'Comment', permissionKey: 'comment.read', displayName: 'Read Comments', description: 'View comments', category: 'read' },
        { moduleType: 'Comment', permissionKey: 'comment.write', displayName: 'Write Comments', description: 'Create comments', category: 'write' },
        { moduleType: 'Comment', permissionKey: 'comment.edit.own', displayName: 'Edit Own Comments', description: 'Edit comments created by self', category: 'edit' },
        { moduleType: 'Comment', permissionKey: 'comment.edit.all', displayName: 'Edit All Comments', description: 'Edit any comment', category: 'edit' },
        { moduleType: 'Comment', permissionKey: 'comment.delete.own', displayName: 'Delete Own Comments', description: 'Delete comments created by self', category: 'delete' },
        { moduleType: 'Comment', permissionKey: 'comment.delete.all', displayName: 'Delete All Comments', description: 'Delete any comment', category: 'delete' },
        
        // Calendar permissions
        { moduleType: 'Calendar', permissionKey: 'calendar.read', displayName: 'Read Calendar', description: 'View calendar events', category: 'read' },
        { moduleType: 'Calendar', permissionKey: 'calendar.write', displayName: 'Write Events', description: 'Create calendar events', category: 'write' },
        { moduleType: 'Calendar', permissionKey: 'calendar.edit.own', displayName: 'Edit Own Events', description: 'Edit events created by self', category: 'edit' },
        { moduleType: 'Calendar', permissionKey: 'calendar.edit.all', displayName: 'Edit All Events', description: 'Edit any event', category: 'edit' },
        { moduleType: 'Calendar', permissionKey: 'calendar.delete.own', displayName: 'Delete Own Events', description: 'Delete events created by self', category: 'delete' },
        { moduleType: 'Calendar', permissionKey: 'calendar.delete.all', displayName: 'Delete All Events', description: 'Delete any event', category: 'delete' }
      ];

      const createdPermissions: { id: string; permissionKey: string }[] = [];
      for (const perm of permissions) {
        const result = await client.graphql({
          query: mutations.createPermission,
          variables: { input: perm }
        });
        createdPermissions.push(result.data.createPermission);
        createdIds.permissions.push(result.data.createPermission.id);
        console.log(`  ✓ Created permission: ${perm.permissionKey}`);
      }

      // 3. Assign all permissions to Admin role
      console.log('\n🔗 Assigning permissions to Admin role...');
      for (const permission of createdPermissions) {
        const result = await client.graphql({
          query: createRolePermissionSimple,
          variables: {
            input: {
              roleId: adminRole.data.createRole.id,
              permissionId: permission.id
            }
          }
        });
        createdIds.rolePermissions.push((result as { data: { createRolePermission: { id: string } } }).data.createRolePermission.id);
      }
      console.log(`  ✓ Assigned ${createdPermissions.length} permissions to Admin`);

      // 4. Assign basic permissions to Member role
      console.log('\n🔗 Assigning permissions to Member role...');
      const memberPermissionKeys = [
        'article.read',
        'article.write',
        'article.edit.own',
        'article.delete.own',
        'board.read',
        'board.write',
        'board.edit.own',
        'board.delete.own',
        'comment.read',
        'comment.write',
        'comment.edit.own',
        'comment.delete.own',
        'calendar.read',
        'calendar.write',
        'calendar.edit.own',
        'calendar.delete.own'
      ];

      const memberPermissions = createdPermissions.filter(p => 
        memberPermissionKeys.includes(p.permissionKey)
      );

      for (const permission of memberPermissions) {
        const result = await client.graphql({
          query: createRolePermissionSimple,
          variables: {
            input: {
              roleId: memberRole.data.createRole.id,
              permissionId: permission.id
            }
          }
        });
        createdIds.rolePermissions.push((result as { data: { createRolePermission: { id: string } } }).data.createRolePermission.id);
      }
      console.log(`  ✓ Assigned ${memberPermissions.length} permissions to Member`);

      console.log('\n✅ Seed completed successfully!');
      console.log(`   Created ${createdIds.roles.length} roles`);
      console.log(`   Created ${createdIds.permissions.length} permissions`);
      console.log(`   Created ${createdIds.rolePermissions.length} role-permission links`);

    } catch (error) {
      console.error('\n❌ Seed failed:', error);
      throw error;
    }
  },

  async down() {
    console.log('Rolling back default roles and permissions...\n');

    // Authenticate as admin
    await authenticateAdmin();

    try {
      // 1. Delete role permissions first (they reference roles and permissions)
      console.log('🗑️  Deleting role permissions...');
      const rolePermResult = await client.graphql({
        query: queries.listRolePermissions
      });

      for (const rp of rolePermResult.data.listRolePermissions.items) {
        await client.graphql({
          query: deleteRolePermissionSimple,
          variables: { input: { id: rp.id } }
        });
      }
      console.log(`  ✓ Deleted ${rolePermResult.data.listRolePermissions.items.length} role permissions`);

      // 2. Delete permissions
      console.log('\n🗑️  Deleting permissions...');
      const permResult = await client.graphql({
        query: queries.listPermissions
      });

      for (const perm of permResult.data.listPermissions.items) {
        await client.graphql({
          query: deletePermissionSimple,
          variables: { input: { id: perm.id } }
        });
      }
      console.log(`  ✓ Deleted ${permResult.data.listPermissions.items.length} permissions`);

      // 3. Delete roles
      console.log('\n🗑️  Deleting roles...');
      const roleResult = await client.graphql({
        query: queries.listRoles
      });

      for (const role of roleResult.data.listRoles.items) {
        await client.graphql({
          query: deleteRoleSimple,
          variables: { input: { id: role.id } }
        });
      }
      console.log(`  ✓ Deleted ${roleResult.data.listRoles.items.length} roles`);

      console.log('\n✅ Rollback completed successfully!');

    } catch (error) {
      console.error('\n❌ Rollback failed:', error);
      throw error;
    }
  }
};