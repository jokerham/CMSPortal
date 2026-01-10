/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserPermissions = /* GraphQL */ `query GetUserPermissions($userId: ID!) {
  getUserPermissions(userId: $userId)
}
` as GeneratedQuery<
  APITypes.GetUserPermissionsQueryVariables,
  APITypes.GetUserPermissionsQuery
>;
export const getMemberProfile = /* GraphQL */ `query GetMemberProfile($id: ID!) {
  getMemberProfile(id: $id) {
    id
    email
    displayName
    avatarS3Key
    roleId
    role {
      id
      name
      description
      isSystemRole
      createdAt
      updatedAt
      __typename
    }
    createdAt
    lastLoginAt
    isActive
    cachedPermissions
    permissionsCachedAt
    posts {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    events {
      nextToken
      __typename
    }
    articles {
      nextToken
      __typename
    }
    uploadedAttachments {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMemberProfileQueryVariables,
  APITypes.GetMemberProfileQuery
>;
export const listMemberProfiles = /* GraphQL */ `query ListMemberProfiles(
  $filter: ModelMemberProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMemberProfilesQueryVariables,
  APITypes.ListMemberProfilesQuery
>;
export const getRole = /* GraphQL */ `query GetRole($id: ID!) {
  getRole(id: $id) {
    id
    name
    description
    isSystemRole
    createdAt
    updatedAt
    permissions {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRoleQueryVariables, APITypes.GetRoleQuery>;
export const listRoles = /* GraphQL */ `query ListRoles(
  $filter: ModelRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      isSystemRole
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRolesQueryVariables, APITypes.ListRolesQuery>;
export const getPermission = /* GraphQL */ `query GetPermission($id: ID!) {
  getPermission(id: $id) {
    id
    moduleType
    permissionKey
    displayName
    description
    category
    rolePermissions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPermissionQueryVariables,
  APITypes.GetPermissionQuery
>;
export const listPermissions = /* GraphQL */ `query ListPermissions(
  $filter: ModelPermissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPermissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      moduleType
      permissionKey
      displayName
      description
      category
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPermissionsQueryVariables,
  APITypes.ListPermissionsQuery
>;
export const getRolePermission = /* GraphQL */ `query GetRolePermission($id: ID!) {
  getRolePermission(id: $id) {
    id
    roleId
    permissionId
    role {
      id
      name
      description
      isSystemRole
      createdAt
      updatedAt
      __typename
    }
    permission {
      id
      moduleType
      permissionKey
      displayName
      description
      category
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRolePermissionQueryVariables,
  APITypes.GetRolePermissionQuery
>;
export const listRolePermissions = /* GraphQL */ `query ListRolePermissions(
  $filter: ModelRolePermissionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRolePermissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      roleId
      permissionId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRolePermissionsQueryVariables,
  APITypes.ListRolePermissionsQuery
>;
export const getPostTag = /* GraphQL */ `query GetPostTag($id: ID!) {
  getPostTag(id: $id) {
    id
    postId
    tagId
    post {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    tag {
      id
      name
      slug
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    authorId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPostTagQueryVariables,
  APITypes.GetPostTagQuery
>;
export const listPostTags = /* GraphQL */ `query ListPostTags(
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      authorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostTagsQueryVariables,
  APITypes.ListPostTagsQuery
>;
export const getMailAccountLink = /* GraphQL */ `query GetMailAccountLink($id: ID!) {
  getMailAccountLink(id: $id) {
    id
    calendarId
    accountType
    accountEmail
    encryptedAccessToken
    encryptedRefreshToken
    tokenExpiresAt
    displayName
    colorHex
    isActive
    lastSyncedAt
    lastSyncStatus
    lastSyncError
    calendar {
      id
      name
      description
      slug
      defaultView
      createdAt
      updatedAt
      __typename
    }
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMailAccountLinkQueryVariables,
  APITypes.GetMailAccountLinkQuery
>;
export const listMailAccountLinks = /* GraphQL */ `query ListMailAccountLinks(
  $filter: ModelMailAccountLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listMailAccountLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calendarId
      accountType
      accountEmail
      encryptedAccessToken
      encryptedRefreshToken
      tokenExpiresAt
      displayName
      colorHex
      isActive
      lastSyncedAt
      lastSyncStatus
      lastSyncError
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMailAccountLinksQueryVariables,
  APITypes.ListMailAccountLinksQuery
>;
export const getAttachment = /* GraphQL */ `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
    id
    postId
    articleId
    s3Key
    s3Bucket
    fileName
    fileSize
    mimeType
    isEmbedded
    embedLocation
    uploaderId
    uploader {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    post {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    article {
      id
      title
      content
      slug
      authorId
      viewCount
      publishedAt
      isPublished
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAttachmentQueryVariables,
  APITypes.GetAttachmentQuery
>;
export const listAttachments = /* GraphQL */ `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      articleId
      s3Key
      s3Bucket
      fileName
      fileSize
      mimeType
      isEmbedded
      embedLocation
      uploaderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttachmentsQueryVariables,
  APITypes.ListAttachmentsQuery
>;
export const getViewCountQueue = /* GraphQL */ `query GetViewCountQueue($id: ID!) {
  getViewCountQueue(id: $id) {
    id
    targetType
    targetId
    incrementBy
    processedAt
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetViewCountQueueQueryVariables,
  APITypes.GetViewCountQueueQuery
>;
export const listViewCountQueues = /* GraphQL */ `query ListViewCountQueues(
  $filter: ModelViewCountQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listViewCountQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      targetType
      targetId
      incrementBy
      processedAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListViewCountQueuesQueryVariables,
  APITypes.ListViewCountQueuesQuery
>;
export const memberProfilesByEmail = /* GraphQL */ `query MemberProfilesByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelMemberProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  memberProfilesByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MemberProfilesByEmailQueryVariables,
  APITypes.MemberProfilesByEmailQuery
>;
export const memberProfilesByRoleId = /* GraphQL */ `query MemberProfilesByRoleId(
  $roleId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMemberProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  memberProfilesByRoleId(
    roleId: $roleId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MemberProfilesByRoleIdQueryVariables,
  APITypes.MemberProfilesByRoleIdQuery
>;
export const rolesByName = /* GraphQL */ `query RolesByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  rolesByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      isSystemRole
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RolesByNameQueryVariables,
  APITypes.RolesByNameQuery
>;
export const permissionsByModuleTypeAndPermissionKey = /* GraphQL */ `query PermissionsByModuleTypeAndPermissionKey(
  $moduleType: String!
  $permissionKey: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPermissionFilterInput
  $limit: Int
  $nextToken: String
) {
  permissionsByModuleTypeAndPermissionKey(
    moduleType: $moduleType
    permissionKey: $permissionKey
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      moduleType
      permissionKey
      displayName
      description
      category
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PermissionsByModuleTypeAndPermissionKeyQueryVariables,
  APITypes.PermissionsByModuleTypeAndPermissionKeyQuery
>;
export const rolePermissionsByRoleId = /* GraphQL */ `query RolePermissionsByRoleId(
  $roleId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRolePermissionFilterInput
  $limit: Int
  $nextToken: String
) {
  rolePermissionsByRoleId(
    roleId: $roleId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      roleId
      permissionId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RolePermissionsByRoleIdQueryVariables,
  APITypes.RolePermissionsByRoleIdQuery
>;
export const rolePermissionsByPermissionId = /* GraphQL */ `query RolePermissionsByPermissionId(
  $permissionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRolePermissionFilterInput
  $limit: Int
  $nextToken: String
) {
  rolePermissionsByPermissionId(
    permissionId: $permissionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      roleId
      permissionId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RolePermissionsByPermissionIdQueryVariables,
  APITypes.RolePermissionsByPermissionIdQuery
>;
export const postTagsByPostId = /* GraphQL */ `query PostTagsByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      authorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByPostIdQueryVariables,
  APITypes.PostTagsByPostIdQuery
>;
export const postTagsByTagId = /* GraphQL */ `query PostTagsByTagId(
  $tagId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostTagFilterInput
  $limit: Int
  $nextToken: String
) {
  postTagsByTagId(
    tagId: $tagId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      tagId
      createdAt
      updatedAt
      authorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostTagsByTagIdQueryVariables,
  APITypes.PostTagsByTagIdQuery
>;
export const mailAccountLinksByCalendarId = /* GraphQL */ `query MailAccountLinksByCalendarId(
  $calendarId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMailAccountLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  mailAccountLinksByCalendarId(
    calendarId: $calendarId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calendarId
      accountType
      accountEmail
      encryptedAccessToken
      encryptedRefreshToken
      tokenExpiresAt
      displayName
      colorHex
      isActive
      lastSyncedAt
      lastSyncStatus
      lastSyncError
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MailAccountLinksByCalendarIdQueryVariables,
  APITypes.MailAccountLinksByCalendarIdQuery
>;
export const mailAccountLinksByEmail = /* GraphQL */ `query MailAccountLinksByEmail(
  $accountEmail: String!
  $sortDirection: ModelSortDirection
  $filter: ModelMailAccountLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  mailAccountLinksByEmail(
    accountEmail: $accountEmail
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calendarId
      accountType
      accountEmail
      encryptedAccessToken
      encryptedRefreshToken
      tokenExpiresAt
      displayName
      colorHex
      isActive
      lastSyncedAt
      lastSyncStatus
      lastSyncError
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MailAccountLinksByEmailQueryVariables,
  APITypes.MailAccountLinksByEmailQuery
>;
export const attachmentsByPostId = /* GraphQL */ `query AttachmentsByPostId(
  $postId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByPostId(
    postId: $postId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      articleId
      s3Key
      s3Bucket
      fileName
      fileSize
      mimeType
      isEmbedded
      embedLocation
      uploaderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AttachmentsByPostIdQueryVariables,
  APITypes.AttachmentsByPostIdQuery
>;
export const attachmentsByArticleId = /* GraphQL */ `query AttachmentsByArticleId(
  $articleId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByArticleId(
    articleId: $articleId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      articleId
      s3Key
      s3Bucket
      fileName
      fileSize
      mimeType
      isEmbedded
      embedLocation
      uploaderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AttachmentsByArticleIdQueryVariables,
  APITypes.AttachmentsByArticleIdQuery
>;
export const attachmentsByS3Key = /* GraphQL */ `query AttachmentsByS3Key(
  $s3Key: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByS3Key(
    s3Key: $s3Key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      articleId
      s3Key
      s3Bucket
      fileName
      fileSize
      mimeType
      isEmbedded
      embedLocation
      uploaderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AttachmentsByS3KeyQueryVariables,
  APITypes.AttachmentsByS3KeyQuery
>;
export const attachmentsByUploaderId = /* GraphQL */ `query AttachmentsByUploaderId(
  $uploaderId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  attachmentsByUploaderId(
    uploaderId: $uploaderId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      articleId
      s3Key
      s3Bucket
      fileName
      fileSize
      mimeType
      isEmbedded
      embedLocation
      uploaderId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AttachmentsByUploaderIdQueryVariables,
  APITypes.AttachmentsByUploaderIdQuery
>;
export const viewCountQueuesByTargetTypeAndCreatedAt = /* GraphQL */ `query ViewCountQueuesByTargetTypeAndCreatedAt(
  $targetType: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelViewCountQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  viewCountQueuesByTargetTypeAndCreatedAt(
    targetType: $targetType
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      targetType
      targetId
      incrementBy
      processedAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewCountQueuesByTargetTypeAndCreatedAtQueryVariables,
  APITypes.ViewCountQueuesByTargetTypeAndCreatedAtQuery
>;
export const viewCountQueuesByProcessedAt = /* GraphQL */ `query ViewCountQueuesByProcessedAt(
  $processedAt: AWSDateTime!
  $sortDirection: ModelSortDirection
  $filter: ModelViewCountQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  viewCountQueuesByProcessedAt(
    processedAt: $processedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      targetType
      targetId
      incrementBy
      processedAt
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViewCountQueuesByProcessedAtQueryVariables,
  APITypes.ViewCountQueuesByProcessedAtQuery
>;
export const getMenu = /* GraphQL */ `query GetMenu($id: ID!) {
  getMenu(id: $id) {
    id
    parentMenuId
    title
    slug
    order
    isVisible
    moduleConfigId
    moduleConfig {
      id
      moduleType
      displayName
      moduleSettings
      createdAt
      updatedAt
      __typename
    }
    layoutId
    layout {
      id
      name
      description
      templateId
      isDefault
      regionConfigs
      createdAt
      updatedAt
      __typename
    }
    parentMenu {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    childMenus {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMenuQueryVariables, APITypes.GetMenuQuery>;
export const listMenus = /* GraphQL */ `query ListMenus(
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
export const menusByParentMenuIdAndOrder = /* GraphQL */ `query MenusByParentMenuIdAndOrder(
  $parentMenuId: ID!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  menusByParentMenuIdAndOrder(
    parentMenuId: $parentMenuId
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenusByParentMenuIdAndOrderQueryVariables,
  APITypes.MenusByParentMenuIdAndOrderQuery
>;
export const getMenuBySlug = /* GraphQL */ `query GetMenuBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  getMenuBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenuBySlugQueryVariables,
  APITypes.GetMenuBySlugQuery
>;
export const menusByModuleConfigId = /* GraphQL */ `query MenusByModuleConfigId(
  $moduleConfigId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  menusByModuleConfigId(
    moduleConfigId: $moduleConfigId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenusByModuleConfigIdQueryVariables,
  APITypes.MenusByModuleConfigIdQuery
>;
export const menusByLayoutId = /* GraphQL */ `query MenusByLayoutId(
  $layoutId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  menusByLayoutId(
    layoutId: $layoutId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parentMenuId
      title
      slug
      order
      isVisible
      moduleConfigId
      layoutId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenusByLayoutIdQueryVariables,
  APITypes.MenusByLayoutIdQuery
>;
export const getModuleConfig = /* GraphQL */ `query GetModuleConfig($id: ID!) {
  getModuleConfig(id: $id) {
    id
    moduleType
    displayName
    moduleSettings
    menus {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetModuleConfigQueryVariables,
  APITypes.GetModuleConfigQuery
>;
export const listModuleConfigs = /* GraphQL */ `query ListModuleConfigs(
  $filter: ModelModuleConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  listModuleConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      moduleType
      displayName
      moduleSettings
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModuleConfigsQueryVariables,
  APITypes.ListModuleConfigsQuery
>;
export const moduleConfigsByModuleType = /* GraphQL */ `query ModuleConfigsByModuleType(
  $moduleType: String!
  $sortDirection: ModelSortDirection
  $filter: ModelModuleConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  moduleConfigsByModuleType(
    moduleType: $moduleType
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      moduleType
      displayName
      moduleSettings
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ModuleConfigsByModuleTypeQueryVariables,
  APITypes.ModuleConfigsByModuleTypeQuery
>;
export const getLayout = /* GraphQL */ `query GetLayout($id: ID!) {
  getLayout(id: $id) {
    id
    name
    description
    templateId
    isDefault
    regionConfigs
    menus {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLayoutQueryVariables, APITypes.GetLayoutQuery>;
export const listLayouts = /* GraphQL */ `query ListLayouts(
  $filter: ModelLayoutFilterInput
  $limit: Int
  $nextToken: String
) {
  listLayouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      templateId
      isDefault
      regionConfigs
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLayoutsQueryVariables,
  APITypes.ListLayoutsQuery
>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    title
    content
    slug
    authorId
    author {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    viewCount
    attachments {
      nextToken
      __typename
    }
    publishedAt
    isPublished
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      slug
      authorId
      viewCount
      publishedAt
      isPublished
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const getArticleBySlug = /* GraphQL */ `query GetArticleBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  getArticleBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      slug
      authorId
      viewCount
      publishedAt
      isPublished
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleBySlugQueryVariables,
  APITypes.GetArticleBySlugQuery
>;
export const articlesByAuthorIdAndCreatedAt = /* GraphQL */ `query ArticlesByAuthorIdAndCreatedAt(
  $authorId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  articlesByAuthorIdAndCreatedAt(
    authorId: $authorId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      slug
      authorId
      viewCount
      publishedAt
      isPublished
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ArticlesByAuthorIdAndCreatedAtQueryVariables,
  APITypes.ArticlesByAuthorIdAndCreatedAtQuery
>;
export const getBoard = /* GraphQL */ `query GetBoard($id: ID!) {
  getBoard(id: $id) {
    id
    name
    description
    slug
    customFieldDefinitions
    defaultSortField
    defaultSortOrder
    postsPerPage
    permissionScope
    categories {
      nextToken
      __typename
    }
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBoardQueryVariables, APITypes.GetBoardQuery>;
export const listBoards = /* GraphQL */ `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      slug
      customFieldDefinitions
      defaultSortField
      defaultSortOrder
      postsPerPage
      permissionScope
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardsQueryVariables,
  APITypes.ListBoardsQuery
>;
export const getBoardBySlug = /* GraphQL */ `query GetBoardBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  getBoardBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      slug
      customFieldDefinitions
      defaultSortField
      defaultSortOrder
      postsPerPage
      permissionScope
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBoardBySlugQueryVariables,
  APITypes.GetBoardBySlugQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    boardId
    name
    slug
    description
    order
    board {
      id
      name
      description
      slug
      customFieldDefinitions
      defaultSortField
      defaultSortOrder
      postsPerPage
      permissionScope
      createdAt
      updatedAt
      __typename
    }
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boardId
      name
      slug
      description
      order
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const categoriesByBoardIdAndOrder = /* GraphQL */ `query CategoriesByBoardIdAndOrder(
  $boardId: ID!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  categoriesByBoardIdAndOrder(
    boardId: $boardId
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      name
      slug
      description
      order
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CategoriesByBoardIdAndOrderQueryVariables,
  APITypes.CategoriesByBoardIdAndOrderQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    boardId
    categoryId
    title
    content
    authorId
    author {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    viewCount
    customFieldValues
    customSort1
    customSort2
    customSort3
    customSort4
    customSort5
    board {
      id
      name
      description
      slug
      customFieldDefinitions
      defaultSortField
      defaultSortOrder
      postsPerPage
      permissionScope
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      boardId
      name
      slug
      description
      order
      createdAt
      updatedAt
      __typename
    }
    tags {
      nextToken
      __typename
    }
    attachments {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    publishedAt
    isPublished
    isPinned
    pinnedStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const postsByBoardIdAndCreatedAt = /* GraphQL */ `query PostsByBoardIdAndCreatedAt(
  $boardId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCreatedAt(
    boardId: $boardId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCreatedAtQueryVariables,
  APITypes.PostsByBoardIdAndCreatedAtQuery
>;
export const postsByBoardIdAndViewCount = /* GraphQL */ `query PostsByBoardIdAndViewCount(
  $boardId: ID!
  $viewCount: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndViewCount(
    boardId: $boardId
    viewCount: $viewCount
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndViewCountQueryVariables,
  APITypes.PostsByBoardIdAndViewCountQuery
>;
export const postsByBoardIdAndCustomSort1 = /* GraphQL */ `query PostsByBoardIdAndCustomSort1(
  $boardId: ID!
  $customSort1: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCustomSort1(
    boardId: $boardId
    customSort1: $customSort1
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCustomSort1QueryVariables,
  APITypes.PostsByBoardIdAndCustomSort1Query
>;
export const postsByBoardIdAndCustomSort2 = /* GraphQL */ `query PostsByBoardIdAndCustomSort2(
  $boardId: ID!
  $customSort2: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCustomSort2(
    boardId: $boardId
    customSort2: $customSort2
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCustomSort2QueryVariables,
  APITypes.PostsByBoardIdAndCustomSort2Query
>;
export const postsByBoardIdAndCustomSort3 = /* GraphQL */ `query PostsByBoardIdAndCustomSort3(
  $boardId: ID!
  $customSort3: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCustomSort3(
    boardId: $boardId
    customSort3: $customSort3
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCustomSort3QueryVariables,
  APITypes.PostsByBoardIdAndCustomSort3Query
>;
export const postsByBoardIdAndCustomSort4 = /* GraphQL */ `query PostsByBoardIdAndCustomSort4(
  $boardId: ID!
  $customSort4: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCustomSort4(
    boardId: $boardId
    customSort4: $customSort4
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCustomSort4QueryVariables,
  APITypes.PostsByBoardIdAndCustomSort4Query
>;
export const postsByBoardIdAndCustomSort5 = /* GraphQL */ `query PostsByBoardIdAndCustomSort5(
  $boardId: ID!
  $customSort5: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByBoardIdAndCustomSort5(
    boardId: $boardId
    customSort5: $customSort5
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByBoardIdAndCustomSort5QueryVariables,
  APITypes.PostsByBoardIdAndCustomSort5Query
>;
export const postsByCategoryIdAndCreatedAt = /* GraphQL */ `query PostsByCategoryIdAndCreatedAt(
  $categoryId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByCategoryIdAndCreatedAt(
    categoryId: $categoryId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByCategoryIdAndCreatedAtQueryVariables,
  APITypes.PostsByCategoryIdAndCreatedAtQuery
>;
export const postsByAuthorIdAndCreatedAt = /* GraphQL */ `query PostsByAuthorIdAndCreatedAt(
  $authorId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByAuthorIdAndCreatedAt(
    authorId: $authorId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByAuthorIdAndCreatedAtQueryVariables,
  APITypes.PostsByAuthorIdAndCreatedAtQuery
>;
export const postsByPinnedStatusAndBoardIdAndCreatedAt = /* GraphQL */ `query PostsByPinnedStatusAndBoardIdAndCreatedAt(
  $pinnedStatus: String!
  $boardIdCreatedAt: ModelPostByBoardPinnedCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByPinnedStatusAndBoardIdAndCreatedAt(
    pinnedStatus: $pinnedStatus
    boardIdCreatedAt: $boardIdCreatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByPinnedStatusAndBoardIdAndCreatedAtQueryVariables,
  APITypes.PostsByPinnedStatusAndBoardIdAndCreatedAtQuery
>;
export const getTag = /* GraphQL */ `query GetTag($id: ID!) {
  getTag(id: $id) {
    id
    name
    slug
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTagQueryVariables, APITypes.GetTagQuery>;
export const listTags = /* GraphQL */ `query ListTags($filter: ModelTagFilterInput, $limit: Int, $nextToken: String) {
  listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      slug
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTagsQueryVariables, APITypes.ListTagsQuery>;
export const tagsByName = /* GraphQL */ `query TagsByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
) {
  tagsByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      slug
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TagsByNameQueryVariables,
  APITypes.TagsByNameQuery
>;
export const tagsBySlug = /* GraphQL */ `query TagsBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelTagFilterInput
  $limit: Int
  $nextToken: String
) {
  tagsBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      slug
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TagsBySlugQueryVariables,
  APITypes.TagsBySlugQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    postId
    parentCommentId
    content
    authorId
    author {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    depth
    threadPath
    post {
      id
      boardId
      categoryId
      title
      content
      authorId
      viewCount
      customFieldValues
      customSort1
      customSort2
      customSort3
      customSort4
      customSort5
      publishedAt
      isPublished
      isPinned
      pinnedStatus
      createdAt
      updatedAt
      __typename
    }
    parentComment {
      id
      postId
      parentCommentId
      content
      authorId
      depth
      threadPath
      createdAt
      updatedAt
      isDeleted
      __typename
    }
    replies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    isDeleted
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postId
      parentCommentId
      content
      authorId
      depth
      threadPath
      createdAt
      updatedAt
      isDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const commentsByPostIdAndThreadPath = /* GraphQL */ `query CommentsByPostIdAndThreadPath(
  $postId: ID!
  $threadPath: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPostIdAndThreadPath(
    postId: $postId
    threadPath: $threadPath
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      parentCommentId
      content
      authorId
      depth
      threadPath
      createdAt
      updatedAt
      isDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostIdAndThreadPathQueryVariables,
  APITypes.CommentsByPostIdAndThreadPathQuery
>;
export const commentsByParentCommentIdAndCreatedAt = /* GraphQL */ `query CommentsByParentCommentIdAndCreatedAt(
  $parentCommentId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByParentCommentIdAndCreatedAt(
    parentCommentId: $parentCommentId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      parentCommentId
      content
      authorId
      depth
      threadPath
      createdAt
      updatedAt
      isDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByParentCommentIdAndCreatedAtQueryVariables,
  APITypes.CommentsByParentCommentIdAndCreatedAtQuery
>;
export const commentsByAuthorIdAndCreatedAt = /* GraphQL */ `query CommentsByAuthorIdAndCreatedAt(
  $authorId: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByAuthorIdAndCreatedAt(
    authorId: $authorId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      postId
      parentCommentId
      content
      authorId
      depth
      threadPath
      createdAt
      updatedAt
      isDeleted
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByAuthorIdAndCreatedAtQueryVariables,
  APITypes.CommentsByAuthorIdAndCreatedAtQuery
>;
export const getCalendar = /* GraphQL */ `query GetCalendar($id: ID!) {
  getCalendar(id: $id) {
    id
    name
    description
    slug
    defaultView
    events {
      nextToken
      __typename
    }
    mailAccountLinks {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCalendarQueryVariables,
  APITypes.GetCalendarQuery
>;
export const listCalendars = /* GraphQL */ `query ListCalendars(
  $filter: ModelCalendarFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      slug
      defaultView
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCalendarsQueryVariables,
  APITypes.ListCalendarsQuery
>;
export const getCalendarBySlug = /* GraphQL */ `query GetCalendarBySlug(
  $slug: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCalendarFilterInput
  $limit: Int
  $nextToken: String
) {
  getCalendarBySlug(
    slug: $slug
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      slug
      defaultView
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCalendarBySlugQueryVariables,
  APITypes.GetCalendarBySlugQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    calendarId
    title
    description
    location
    startDateTime
    endDateTime
    isAllDay
    recurrenceRule
    sourceType
    sourceEventId
    mailAccountLinkId
    colorHex
    creatorId
    creator {
      id
      email
      displayName
      avatarS3Key
      roleId
      createdAt
      lastLoginAt
      isActive
      cachedPermissions
      permissionsCachedAt
      updatedAt
      __typename
    }
    calendar {
      id
      name
      description
      slug
      defaultView
      createdAt
      updatedAt
      __typename
    }
    mailAccountLink {
      id
      calendarId
      accountType
      accountEmail
      encryptedAccessToken
      encryptedRefreshToken
      tokenExpiresAt
      displayName
      colorHex
      isActive
      lastSyncedAt
      lastSyncStatus
      lastSyncError
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    lastSyncedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      calendarId
      title
      description
      location
      startDateTime
      endDateTime
      isAllDay
      recurrenceRule
      sourceType
      sourceEventId
      mailAccountLinkId
      colorHex
      creatorId
      createdAt
      updatedAt
      lastSyncedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const eventsByCalendarIdAndStartDateTime = /* GraphQL */ `query EventsByCalendarIdAndStartDateTime(
  $calendarId: ID!
  $startDateTime: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsByCalendarIdAndStartDateTime(
    calendarId: $calendarId
    startDateTime: $startDateTime
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calendarId
      title
      description
      location
      startDateTime
      endDateTime
      isAllDay
      recurrenceRule
      sourceType
      sourceEventId
      mailAccountLinkId
      colorHex
      creatorId
      createdAt
      updatedAt
      lastSyncedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsByCalendarIdAndStartDateTimeQueryVariables,
  APITypes.EventsByCalendarIdAndStartDateTimeQuery
>;
export const eventsByMailAccountLinkIdAndStartDateTime = /* GraphQL */ `query EventsByMailAccountLinkIdAndStartDateTime(
  $mailAccountLinkId: ID!
  $startDateTime: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsByMailAccountLinkIdAndStartDateTime(
    mailAccountLinkId: $mailAccountLinkId
    startDateTime: $startDateTime
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calendarId
      title
      description
      location
      startDateTime
      endDateTime
      isAllDay
      recurrenceRule
      sourceType
      sourceEventId
      mailAccountLinkId
      colorHex
      creatorId
      createdAt
      updatedAt
      lastSyncedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsByMailAccountLinkIdAndStartDateTimeQueryVariables,
  APITypes.EventsByMailAccountLinkIdAndStartDateTimeQuery
>;
export const eventsByCreatorIdAndStartDateTime = /* GraphQL */ `query EventsByCreatorIdAndStartDateTime(
  $creatorId: ID!
  $startDateTime: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsByCreatorIdAndStartDateTime(
    creatorId: $creatorId
    startDateTime: $startDateTime
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      calendarId
      title
      description
      location
      startDateTime
      endDateTime
      isAllDay
      recurrenceRule
      sourceType
      sourceEventId
      mailAccountLinkId
      colorHex
      creatorId
      createdAt
      updatedAt
      lastSyncedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsByCreatorIdAndStartDateTimeQueryVariables,
  APITypes.EventsByCreatorIdAndStartDateTimeQuery
>;
export const getDefaultLayout = /* GraphQL */ `query GetDefaultLayout {
  getDefaultLayout {
    id
    name
    description
    templateId
    isDefault
    regionConfigs
    menus {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDefaultLayoutQueryVariables,
  APITypes.GetDefaultLayoutQuery
>;
