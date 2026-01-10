/* Amplify Params - DO NOT EDIT
	API_CMSAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_CMSAPI_GRAPHQLAPIIDOUTPUT
	API_CMSAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * PostConfirmation Trigger - Creates MemberProfile and assigns User group
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */

const aws4 = require('aws4');
const https = require('https');
const { URL } = require('url');

// Environment variables (auto-populated by Amplify)
const GRAPHQL_ENDPOINT = process.env.API_CMSAPI_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.REGION;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log('PostConfirmation trigger event:', JSON.stringify(event, null, 2));

  const {
    request: { userAttributes },
    userName,
  } = event;

  try {
    // 1. Get default "Member" role
    console.log('Fetching default Member role...');
    const defaultRole = await getDefaultRole();

    if (!defaultRole) {
      console.error('Default "Member" role not found in database');
      // Log error but don't block signup
      return event;
    }

    console.log('Default role found:', defaultRole);

    // 2. Create MemberProfile
    console.log('Creating MemberProfile...');
    const memberProfile = await createMemberProfile({
      id: userAttributes.sub,
      email: userAttributes.email,
      displayName: userAttributes.name || userAttributes.email.split('@')[0],
      roleId: defaultRole.id,
      isActive: true,
    });

    console.log('MemberProfile created successfully:', memberProfile.id);

    // 3. Note: Cognito group assignment is handled via Amplify auth configuration
    // The user will be automatically added to the "User" group based on
    // the auth configuration in amplify/backend/auth/[your-auth-resource]/parameters.json

    return event;
  } catch (error) {
    console.error('PostConfirmation error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      userAttributes,
      userName,
    });

    // Don't block user signup on error - log and continue
    // This allows users to complete signup even if MemberProfile creation fails
    // Admin can manually create profiles for affected users
    return event;
  }
};

/**
 * Fetch the default "Member" role from the database
 * @returns {Promise<{id: string, name: string} | null>}
 */
async function getDefaultRole() {
  const query = `
    query GetDefaultRole {
      listRoles(filter: { name: { eq: "Member" } }, limit: 1) {
        items {
          id
          name
          isSystemRole
        }
      }
    }
  `;

  try {
    const result = await graphqlRequest(query);

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(`GraphQL query error: ${JSON.stringify(result.errors)}`);
    }

    const roles = result.data?.listRoles?.items || [];
    return roles.length > 0 ? roles[0] : null;
  } catch (error) {
    console.error('Error fetching default role:', error);
    throw error;
  }
}

/**
 * Create a MemberProfile record
 * @param {Object} input - MemberProfile data
 * @returns {Promise<Object>}
 */
async function createMemberProfile(input) {
  const mutation = `
    mutation CreateMemberProfile($input: CreateMemberProfileInput!) {
      createMemberProfile(input: $input) {
        id
        email
        displayName
        roleId
        isActive
        createdAt
      }
    }
  `;

  try {
    const result = await graphqlRequest(mutation, { input });

    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      throw new Error(`GraphQL mutation error: ${JSON.stringify(result.errors)}`);
    }

    return result.data.createMemberProfile;
  } catch (error) {
    console.error('Error creating MemberProfile:', error);
    throw error;
  }
}

/**
 * Execute a GraphQL request using IAM authentication (AWS Signature v4)
 * @param {string} query - GraphQL query or mutation
 * @param {Object} variables - GraphQL variables
 * @returns {Promise<Object>}
 */
async function graphqlRequest(query, variables = {}) {
  const url = new URL(GRAPHQL_ENDPOINT);
  const body = JSON.stringify({ query, variables });

  // Prepare the request for AWS Signature v4
  const request = {
    host: url.hostname,
    path: url.pathname,
    method: 'POST',
    service: 'appsync',
    region: AWS_REGION,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
    body,
  };

  // Sign the request with AWS credentials (automatically available in Lambda)
  aws4.sign(request);

  return new Promise((resolve, reject) => {
    const req = https.request({
      ...request,
      hostname: request.host,
    }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}