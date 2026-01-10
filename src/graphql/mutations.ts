/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMemberProfile = /* GraphQL */ `mutation CreateMemberProfile(
  $input: CreateMemberProfileInput!
  $condition: ModelMemberProfileConditionInput
) {
  createMemberProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMemberProfileMutationVariables,
  APITypes.CreateMemberProfileMutation
>;
export const updateMemberProfile = /* GraphQL */ `mutation UpdateMemberProfile(
  $input: UpdateMemberProfileInput!
  $condition: ModelMemberProfileConditionInput
) {
  updateMemberProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMemberProfileMutationVariables,
  APITypes.UpdateMemberProfileMutation
>;
export const deleteMemberProfile = /* GraphQL */ `mutation DeleteMemberProfile(
  $input: DeleteMemberProfileInput!
  $condition: ModelMemberProfileConditionInput
) {
  deleteMemberProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMemberProfileMutationVariables,
  APITypes.DeleteMemberProfileMutation
>;
export const createRole = /* GraphQL */ `mutation CreateRole(
  $input: CreateRoleInput!
  $condition: ModelRoleConditionInput
) {
  createRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoleMutationVariables,
  APITypes.CreateRoleMutation
>;
export const updateRole = /* GraphQL */ `mutation UpdateRole(
  $input: UpdateRoleInput!
  $condition: ModelRoleConditionInput
) {
  updateRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoleMutationVariables,
  APITypes.UpdateRoleMutation
>;
export const deleteRole = /* GraphQL */ `mutation DeleteRole(
  $input: DeleteRoleInput!
  $condition: ModelRoleConditionInput
) {
  deleteRole(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoleMutationVariables,
  APITypes.DeleteRoleMutation
>;
export const createPermission = /* GraphQL */ `mutation CreatePermission(
  $input: CreatePermissionInput!
  $condition: ModelPermissionConditionInput
) {
  createPermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePermissionMutationVariables,
  APITypes.CreatePermissionMutation
>;
export const updatePermission = /* GraphQL */ `mutation UpdatePermission(
  $input: UpdatePermissionInput!
  $condition: ModelPermissionConditionInput
) {
  updatePermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePermissionMutationVariables,
  APITypes.UpdatePermissionMutation
>;
export const deletePermission = /* GraphQL */ `mutation DeletePermission(
  $input: DeletePermissionInput!
  $condition: ModelPermissionConditionInput
) {
  deletePermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePermissionMutationVariables,
  APITypes.DeletePermissionMutation
>;
export const createRolePermission = /* GraphQL */ `mutation CreateRolePermission(
  $input: CreateRolePermissionInput!
  $condition: ModelRolePermissionConditionInput
) {
  createRolePermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRolePermissionMutationVariables,
  APITypes.CreateRolePermissionMutation
>;
export const updateRolePermission = /* GraphQL */ `mutation UpdateRolePermission(
  $input: UpdateRolePermissionInput!
  $condition: ModelRolePermissionConditionInput
) {
  updateRolePermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRolePermissionMutationVariables,
  APITypes.UpdateRolePermissionMutation
>;
export const deleteRolePermission = /* GraphQL */ `mutation DeleteRolePermission(
  $input: DeleteRolePermissionInput!
  $condition: ModelRolePermissionConditionInput
) {
  deleteRolePermission(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRolePermissionMutationVariables,
  APITypes.DeleteRolePermissionMutation
>;
export const createMenu = /* GraphQL */ `mutation CreateMenu(
  $input: CreateMenuInput!
  $condition: ModelMenuConditionInput
) {
  createMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenuMutationVariables,
  APITypes.CreateMenuMutation
>;
export const updateMenu = /* GraphQL */ `mutation UpdateMenu(
  $input: UpdateMenuInput!
  $condition: ModelMenuConditionInput
) {
  updateMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenuMutationVariables,
  APITypes.UpdateMenuMutation
>;
export const deleteMenu = /* GraphQL */ `mutation DeleteMenu(
  $input: DeleteMenuInput!
  $condition: ModelMenuConditionInput
) {
  deleteMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenuMutationVariables,
  APITypes.DeleteMenuMutation
>;
export const createModuleConfig = /* GraphQL */ `mutation CreateModuleConfig(
  $input: CreateModuleConfigInput!
  $condition: ModelModuleConfigConditionInput
) {
  createModuleConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateModuleConfigMutationVariables,
  APITypes.CreateModuleConfigMutation
>;
export const updateModuleConfig = /* GraphQL */ `mutation UpdateModuleConfig(
  $input: UpdateModuleConfigInput!
  $condition: ModelModuleConfigConditionInput
) {
  updateModuleConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateModuleConfigMutationVariables,
  APITypes.UpdateModuleConfigMutation
>;
export const deleteModuleConfig = /* GraphQL */ `mutation DeleteModuleConfig(
  $input: DeleteModuleConfigInput!
  $condition: ModelModuleConfigConditionInput
) {
  deleteModuleConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteModuleConfigMutationVariables,
  APITypes.DeleteModuleConfigMutation
>;
export const createLayout = /* GraphQL */ `mutation CreateLayout(
  $input: CreateLayoutInput!
  $condition: ModelLayoutConditionInput
) {
  createLayout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLayoutMutationVariables,
  APITypes.CreateLayoutMutation
>;
export const updateLayout = /* GraphQL */ `mutation UpdateLayout(
  $input: UpdateLayoutInput!
  $condition: ModelLayoutConditionInput
) {
  updateLayout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLayoutMutationVariables,
  APITypes.UpdateLayoutMutation
>;
export const deleteLayout = /* GraphQL */ `mutation DeleteLayout(
  $input: DeleteLayoutInput!
  $condition: ModelLayoutConditionInput
) {
  deleteLayout(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLayoutMutationVariables,
  APITypes.DeleteLayoutMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
export const createBoard = /* GraphQL */ `mutation CreateBoard(
  $input: CreateBoardInput!
  $condition: ModelBoardConditionInput
) {
  createBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBoardMutationVariables,
  APITypes.CreateBoardMutation
>;
export const updateBoard = /* GraphQL */ `mutation UpdateBoard(
  $input: UpdateBoardInput!
  $condition: ModelBoardConditionInput
) {
  updateBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBoardMutationVariables,
  APITypes.UpdateBoardMutation
>;
export const deleteBoard = /* GraphQL */ `mutation DeleteBoard(
  $input: DeleteBoardInput!
  $condition: ModelBoardConditionInput
) {
  deleteBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBoardMutationVariables,
  APITypes.DeleteBoardMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createTag = /* GraphQL */ `mutation CreateTag(
  $input: CreateTagInput!
  $condition: ModelTagConditionInput
) {
  createTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTagMutationVariables,
  APITypes.CreateTagMutation
>;
export const updateTag = /* GraphQL */ `mutation UpdateTag(
  $input: UpdateTagInput!
  $condition: ModelTagConditionInput
) {
  updateTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTagMutationVariables,
  APITypes.UpdateTagMutation
>;
export const deleteTag = /* GraphQL */ `mutation DeleteTag(
  $input: DeleteTagInput!
  $condition: ModelTagConditionInput
) {
  deleteTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTagMutationVariables,
  APITypes.DeleteTagMutation
>;
export const createPostTag = /* GraphQL */ `mutation CreatePostTag(
  $input: CreatePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  createPostTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostTagMutationVariables,
  APITypes.CreatePostTagMutation
>;
export const updatePostTag = /* GraphQL */ `mutation UpdatePostTag(
  $input: UpdatePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  updatePostTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostTagMutationVariables,
  APITypes.UpdatePostTagMutation
>;
export const deletePostTag = /* GraphQL */ `mutation DeletePostTag(
  $input: DeletePostTagInput!
  $condition: ModelPostTagConditionInput
) {
  deletePostTag(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostTagMutationVariables,
  APITypes.DeletePostTagMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createCalendar = /* GraphQL */ `mutation CreateCalendar(
  $input: CreateCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  createCalendar(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCalendarMutationVariables,
  APITypes.CreateCalendarMutation
>;
export const updateCalendar = /* GraphQL */ `mutation UpdateCalendar(
  $input: UpdateCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  updateCalendar(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCalendarMutationVariables,
  APITypes.UpdateCalendarMutation
>;
export const deleteCalendar = /* GraphQL */ `mutation DeleteCalendar(
  $input: DeleteCalendarInput!
  $condition: ModelCalendarConditionInput
) {
  deleteCalendar(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCalendarMutationVariables,
  APITypes.DeleteCalendarMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createMailAccountLink = /* GraphQL */ `mutation CreateMailAccountLink(
  $input: CreateMailAccountLinkInput!
  $condition: ModelMailAccountLinkConditionInput
) {
  createMailAccountLink(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMailAccountLinkMutationVariables,
  APITypes.CreateMailAccountLinkMutation
>;
export const updateMailAccountLink = /* GraphQL */ `mutation UpdateMailAccountLink(
  $input: UpdateMailAccountLinkInput!
  $condition: ModelMailAccountLinkConditionInput
) {
  updateMailAccountLink(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMailAccountLinkMutationVariables,
  APITypes.UpdateMailAccountLinkMutation
>;
export const deleteMailAccountLink = /* GraphQL */ `mutation DeleteMailAccountLink(
  $input: DeleteMailAccountLinkInput!
  $condition: ModelMailAccountLinkConditionInput
) {
  deleteMailAccountLink(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMailAccountLinkMutationVariables,
  APITypes.DeleteMailAccountLinkMutation
>;
export const createAttachment = /* GraphQL */ `mutation CreateAttachment(
  $input: CreateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  createAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAttachmentMutationVariables,
  APITypes.CreateAttachmentMutation
>;
export const updateAttachment = /* GraphQL */ `mutation UpdateAttachment(
  $input: UpdateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  updateAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAttachmentMutationVariables,
  APITypes.UpdateAttachmentMutation
>;
export const deleteAttachment = /* GraphQL */ `mutation DeleteAttachment(
  $input: DeleteAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  deleteAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAttachmentMutationVariables,
  APITypes.DeleteAttachmentMutation
>;
export const createViewCountQueue = /* GraphQL */ `mutation CreateViewCountQueue(
  $input: CreateViewCountQueueInput!
  $condition: ModelViewCountQueueConditionInput
) {
  createViewCountQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateViewCountQueueMutationVariables,
  APITypes.CreateViewCountQueueMutation
>;
export const updateViewCountQueue = /* GraphQL */ `mutation UpdateViewCountQueue(
  $input: UpdateViewCountQueueInput!
  $condition: ModelViewCountQueueConditionInput
) {
  updateViewCountQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateViewCountQueueMutationVariables,
  APITypes.UpdateViewCountQueueMutation
>;
export const deleteViewCountQueue = /* GraphQL */ `mutation DeleteViewCountQueue(
  $input: DeleteViewCountQueueInput!
  $condition: ModelViewCountQueueConditionInput
) {
  deleteViewCountQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteViewCountQueueMutationVariables,
  APITypes.DeleteViewCountQueueMutation
>;
export const incrementViewCount = /* GraphQL */ `mutation IncrementViewCount($targetType: String!, $targetId: ID!) {
  incrementViewCount(targetType: $targetType, targetId: $targetId) {
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
` as GeneratedMutation<
  APITypes.IncrementViewCountMutationVariables,
  APITypes.IncrementViewCountMutation
>;
export const checkPermission = /* GraphQL */ `mutation CheckPermission(
  $userId: ID!
  $permissionKey: String!
  $resourceId: ID
  $resourceType: String
) {
  checkPermission(
    userId: $userId
    permissionKey: $permissionKey
    resourceId: $resourceId
    resourceType: $resourceType
  ) {
    allowed
    reason
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CheckPermissionMutationVariables,
  APITypes.CheckPermissionMutation
>;
