/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMemberProfile = /* GraphQL */ `subscription OnCreateMemberProfile(
  $filter: ModelSubscriptionMemberProfileFilterInput
  $id: String
) {
  onCreateMemberProfile(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMemberProfileSubscriptionVariables,
  APITypes.OnCreateMemberProfileSubscription
>;
export const onUpdateMemberProfile = /* GraphQL */ `subscription OnUpdateMemberProfile(
  $filter: ModelSubscriptionMemberProfileFilterInput
  $id: String
) {
  onUpdateMemberProfile(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMemberProfileSubscriptionVariables,
  APITypes.OnUpdateMemberProfileSubscription
>;
export const onDeleteMemberProfile = /* GraphQL */ `subscription OnDeleteMemberProfile(
  $filter: ModelSubscriptionMemberProfileFilterInput
  $id: String
) {
  onDeleteMemberProfile(filter: $filter, id: $id) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMemberProfileSubscriptionVariables,
  APITypes.OnDeleteMemberProfileSubscription
>;
export const onCreateRole = /* GraphQL */ `subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
  onCreateRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRoleSubscriptionVariables,
  APITypes.OnCreateRoleSubscription
>;
export const onUpdateRole = /* GraphQL */ `subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
  onUpdateRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRoleSubscriptionVariables,
  APITypes.OnUpdateRoleSubscription
>;
export const onDeleteRole = /* GraphQL */ `subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
  onDeleteRole(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRoleSubscriptionVariables,
  APITypes.OnDeleteRoleSubscription
>;
export const onCreatePermission = /* GraphQL */ `subscription OnCreatePermission(
  $filter: ModelSubscriptionPermissionFilterInput
) {
  onCreatePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePermissionSubscriptionVariables,
  APITypes.OnCreatePermissionSubscription
>;
export const onUpdatePermission = /* GraphQL */ `subscription OnUpdatePermission(
  $filter: ModelSubscriptionPermissionFilterInput
) {
  onUpdatePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePermissionSubscriptionVariables,
  APITypes.OnUpdatePermissionSubscription
>;
export const onDeletePermission = /* GraphQL */ `subscription OnDeletePermission(
  $filter: ModelSubscriptionPermissionFilterInput
) {
  onDeletePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePermissionSubscriptionVariables,
  APITypes.OnDeletePermissionSubscription
>;
export const onCreateRolePermission = /* GraphQL */ `subscription OnCreateRolePermission(
  $filter: ModelSubscriptionRolePermissionFilterInput
) {
  onCreateRolePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRolePermissionSubscriptionVariables,
  APITypes.OnCreateRolePermissionSubscription
>;
export const onUpdateRolePermission = /* GraphQL */ `subscription OnUpdateRolePermission(
  $filter: ModelSubscriptionRolePermissionFilterInput
) {
  onUpdateRolePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRolePermissionSubscriptionVariables,
  APITypes.OnUpdateRolePermissionSubscription
>;
export const onDeleteRolePermission = /* GraphQL */ `subscription OnDeleteRolePermission(
  $filter: ModelSubscriptionRolePermissionFilterInput
) {
  onDeleteRolePermission(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRolePermissionSubscriptionVariables,
  APITypes.OnDeleteRolePermissionSubscription
>;
export const onCreatePostTag = /* GraphQL */ `subscription OnCreatePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onCreatePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostTagSubscriptionVariables,
  APITypes.OnCreatePostTagSubscription
>;
export const onUpdatePostTag = /* GraphQL */ `subscription OnUpdatePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onUpdatePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostTagSubscriptionVariables,
  APITypes.OnUpdatePostTagSubscription
>;
export const onDeletePostTag = /* GraphQL */ `subscription OnDeletePostTag($filter: ModelSubscriptionPostTagFilterInput) {
  onDeletePostTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostTagSubscriptionVariables,
  APITypes.OnDeletePostTagSubscription
>;
export const onCreateMailAccountLink = /* GraphQL */ `subscription OnCreateMailAccountLink(
  $filter: ModelSubscriptionMailAccountLinkFilterInput
) {
  onCreateMailAccountLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMailAccountLinkSubscriptionVariables,
  APITypes.OnCreateMailAccountLinkSubscription
>;
export const onUpdateMailAccountLink = /* GraphQL */ `subscription OnUpdateMailAccountLink(
  $filter: ModelSubscriptionMailAccountLinkFilterInput
) {
  onUpdateMailAccountLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMailAccountLinkSubscriptionVariables,
  APITypes.OnUpdateMailAccountLinkSubscription
>;
export const onDeleteMailAccountLink = /* GraphQL */ `subscription OnDeleteMailAccountLink(
  $filter: ModelSubscriptionMailAccountLinkFilterInput
) {
  onDeleteMailAccountLink(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMailAccountLinkSubscriptionVariables,
  APITypes.OnDeleteMailAccountLinkSubscription
>;
export const onCreateAttachment = /* GraphQL */ `subscription OnCreateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
  $uploaderId: String
) {
  onCreateAttachment(filter: $filter, uploaderId: $uploaderId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttachmentSubscriptionVariables,
  APITypes.OnCreateAttachmentSubscription
>;
export const onUpdateAttachment = /* GraphQL */ `subscription OnUpdateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
  $uploaderId: String
) {
  onUpdateAttachment(filter: $filter, uploaderId: $uploaderId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttachmentSubscriptionVariables,
  APITypes.OnUpdateAttachmentSubscription
>;
export const onDeleteAttachment = /* GraphQL */ `subscription OnDeleteAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
  $uploaderId: String
) {
  onDeleteAttachment(filter: $filter, uploaderId: $uploaderId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttachmentSubscriptionVariables,
  APITypes.OnDeleteAttachmentSubscription
>;
export const onCreateViewCountQueue = /* GraphQL */ `subscription OnCreateViewCountQueue(
  $filter: ModelSubscriptionViewCountQueueFilterInput
) {
  onCreateViewCountQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateViewCountQueueSubscriptionVariables,
  APITypes.OnCreateViewCountQueueSubscription
>;
export const onUpdateViewCountQueue = /* GraphQL */ `subscription OnUpdateViewCountQueue(
  $filter: ModelSubscriptionViewCountQueueFilterInput
) {
  onUpdateViewCountQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateViewCountQueueSubscriptionVariables,
  APITypes.OnUpdateViewCountQueueSubscription
>;
export const onDeleteViewCountQueue = /* GraphQL */ `subscription OnDeleteViewCountQueue(
  $filter: ModelSubscriptionViewCountQueueFilterInput
) {
  onDeleteViewCountQueue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteViewCountQueueSubscriptionVariables,
  APITypes.OnDeleteViewCountQueueSubscription
>;
export const onCreateMenu = /* GraphQL */ `subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onCreateMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenuSubscriptionVariables,
  APITypes.OnCreateMenuSubscription
>;
export const onUpdateMenu = /* GraphQL */ `subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onUpdateMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenuSubscriptionVariables,
  APITypes.OnUpdateMenuSubscription
>;
export const onDeleteMenu = /* GraphQL */ `subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
  onDeleteMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenuSubscriptionVariables,
  APITypes.OnDeleteMenuSubscription
>;
export const onCreateModuleConfig = /* GraphQL */ `subscription OnCreateModuleConfig(
  $filter: ModelSubscriptionModuleConfigFilterInput
) {
  onCreateModuleConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModuleConfigSubscriptionVariables,
  APITypes.OnCreateModuleConfigSubscription
>;
export const onUpdateModuleConfig = /* GraphQL */ `subscription OnUpdateModuleConfig(
  $filter: ModelSubscriptionModuleConfigFilterInput
) {
  onUpdateModuleConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModuleConfigSubscriptionVariables,
  APITypes.OnUpdateModuleConfigSubscription
>;
export const onDeleteModuleConfig = /* GraphQL */ `subscription OnDeleteModuleConfig(
  $filter: ModelSubscriptionModuleConfigFilterInput
) {
  onDeleteModuleConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModuleConfigSubscriptionVariables,
  APITypes.OnDeleteModuleConfigSubscription
>;
export const onCreateLayout = /* GraphQL */ `subscription OnCreateLayout($filter: ModelSubscriptionLayoutFilterInput) {
  onCreateLayout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLayoutSubscriptionVariables,
  APITypes.OnCreateLayoutSubscription
>;
export const onUpdateLayout = /* GraphQL */ `subscription OnUpdateLayout($filter: ModelSubscriptionLayoutFilterInput) {
  onUpdateLayout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLayoutSubscriptionVariables,
  APITypes.OnUpdateLayoutSubscription
>;
export const onDeleteLayout = /* GraphQL */ `subscription OnDeleteLayout($filter: ModelSubscriptionLayoutFilterInput) {
  onDeleteLayout(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLayoutSubscriptionVariables,
  APITypes.OnDeleteLayoutSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $authorId: String
) {
  onCreateArticle(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $authorId: String
) {
  onUpdateArticle(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle(
  $filter: ModelSubscriptionArticleFilterInput
  $authorId: String
) {
  onDeleteArticle(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
export const onCreateBoard = /* GraphQL */ `subscription OnCreateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onCreateBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBoardSubscriptionVariables,
  APITypes.OnCreateBoardSubscription
>;
export const onUpdateBoard = /* GraphQL */ `subscription OnUpdateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onUpdateBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBoardSubscriptionVariables,
  APITypes.OnUpdateBoardSubscription
>;
export const onDeleteBoard = /* GraphQL */ `subscription OnDeleteBoard($filter: ModelSubscriptionBoardFilterInput) {
  onDeleteBoard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBoardSubscriptionVariables,
  APITypes.OnDeleteBoardSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $authorId: String
) {
  onCreatePost(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $authorId: String
) {
  onUpdatePost(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $authorId: String
) {
  onDeletePost(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateTag = /* GraphQL */ `subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
  onCreateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTagSubscriptionVariables,
  APITypes.OnCreateTagSubscription
>;
export const onUpdateTag = /* GraphQL */ `subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
  onUpdateTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTagSubscriptionVariables,
  APITypes.OnUpdateTagSubscription
>;
export const onDeleteTag = /* GraphQL */ `subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
  onDeleteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTagSubscriptionVariables,
  APITypes.OnDeleteTagSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $authorId: String
) {
  onCreateComment(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $authorId: String
) {
  onUpdateComment(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $authorId: String
) {
  onDeleteComment(filter: $filter, authorId: $authorId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateCalendar = /* GraphQL */ `subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onCreateCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCalendarSubscriptionVariables,
  APITypes.OnCreateCalendarSubscription
>;
export const onUpdateCalendar = /* GraphQL */ `subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onUpdateCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCalendarSubscriptionVariables,
  APITypes.OnUpdateCalendarSubscription
>;
export const onDeleteCalendar = /* GraphQL */ `subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
  onDeleteCalendar(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCalendarSubscriptionVariables,
  APITypes.OnDeleteCalendarSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $creatorId: String
) {
  onCreateEvent(filter: $filter, creatorId: $creatorId) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $creatorId: String
) {
  onUpdateEvent(filter: $filter, creatorId: $creatorId) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent(
  $filter: ModelSubscriptionEventFilterInput
  $creatorId: String
) {
  onDeleteEvent(filter: $filter, creatorId: $creatorId) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
