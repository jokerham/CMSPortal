/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PermissionCheckResult = {
  __typename: "PermissionCheckResult",
  allowed: boolean,
  reason?: string | null,
};

export type CreateMemberProfileInput = {
  id?: string | null,
  email: string,
  displayName: string,
  avatarS3Key?: string | null,
  roleId: string,
  createdAt?: string | null,
  lastLoginAt?: string | null,
  isActive: boolean,
  cachedPermissions?: Array< string | null > | null,
  permissionsCachedAt?: string | null,
};

export type ModelMemberProfileConditionInput = {
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  avatarS3Key?: ModelStringInput | null,
  roleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  lastLoginAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  cachedPermissions?: ModelStringInput | null,
  permissionsCachedAt?: ModelStringInput | null,
  and?: Array< ModelMemberProfileConditionInput | null > | null,
  or?: Array< ModelMemberProfileConditionInput | null > | null,
  not?: ModelMemberProfileConditionInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type MemberProfile = {
  __typename: "MemberProfile",
  id: string,
  email: string,
  displayName: string,
  avatarS3Key?: string | null,
  roleId: string,
  role?: Role | null,
  createdAt: string,
  lastLoginAt?: string | null,
  isActive: boolean,
  cachedPermissions?: Array< string | null > | null,
  permissionsCachedAt?: string | null,
  posts?: ModelPostConnection | null,
  comments?: ModelCommentConnection | null,
  events?: ModelEventConnection | null,
  articles?: ModelArticleConnection | null,
  uploadedAttachments?: ModelAttachmentConnection | null,
  updatedAt: string,
};

export type Role = {
  __typename: "Role",
  id: string,
  name: string,
  description?: string | null,
  isSystemRole: boolean,
  createdAt: string,
  updatedAt: string,
  permissions?: ModelRolePermissionConnection | null,
  members?: ModelMemberProfileConnection | null,
};

export type ModelRolePermissionConnection = {
  __typename: "ModelRolePermissionConnection",
  items:  Array<RolePermission | null >,
  nextToken?: string | null,
};

export type RolePermission = {
  __typename: "RolePermission",
  id: string,
  roleId: string,
  permissionId: string,
  role?: Role | null,
  permission?: Permission | null,
  createdAt: string,
  updatedAt: string,
};

export type Permission = {
  __typename: "Permission",
  id: string,
  moduleType: string,
  permissionKey: string,
  displayName: string,
  description?: string | null,
  category: string,
  rolePermissions?: ModelRolePermissionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMemberProfileConnection = {
  __typename: "ModelMemberProfileConnection",
  items:  Array<MemberProfile | null >,
  nextToken?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  boardId: string,
  categoryId?: string | null,
  title: string,
  content: string,
  authorId: string,
  author?: MemberProfile | null,
  viewCount: number,
  customFieldValues?: string | null,
  customSort1?: string | null,
  customSort2?: string | null,
  customSort3?: string | null,
  customSort4?: string | null,
  customSort5?: string | null,
  board?: Board | null,
  category?: Category | null,
  tags?: ModelPostTagConnection | null,
  attachments?: ModelAttachmentConnection | null,
  comments?: ModelCommentConnection | null,
  publishedAt?: string | null,
  isPublished: boolean,
  isPinned: boolean,
  pinnedStatus: string,
  createdAt: string,
  updatedAt: string,
};

export type Board = {
  __typename: "Board",
  id: string,
  name: string,
  description?: string | null,
  slug: string,
  customFieldDefinitions?: string | null,
  defaultSortField?: string | null,
  defaultSortOrder?: string | null,
  postsPerPage: number,
  permissionScope: string,
  categories?: ModelCategoryConnection | null,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  boardId: string,
  name: string,
  slug: string,
  description?: string | null,
  order: number,
  board?: Board | null,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostTagConnection = {
  __typename: "ModelPostTagConnection",
  items:  Array<PostTag | null >,
  nextToken?: string | null,
};

export type PostTag = {
  __typename: "PostTag",
  id: string,
  postId: string,
  tagId: string,
  post?: Post | null,
  tag?: Tag | null,
  createdAt: string,
  updatedAt: string,
  authorId?: string | null,
};

export type Tag = {
  __typename: "Tag",
  id: string,
  name: string,
  slug: string,
  posts?: ModelPostTagConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAttachmentConnection = {
  __typename: "ModelAttachmentConnection",
  items:  Array<Attachment | null >,
  nextToken?: string | null,
};

export type Attachment = {
  __typename: "Attachment",
  id: string,
  postId?: string | null,
  articleId?: string | null,
  s3Key: string,
  s3Bucket: string,
  fileName: string,
  fileSize: number,
  mimeType: string,
  isEmbedded: boolean,
  embedLocation?: string | null,
  uploaderId: string,
  uploader?: MemberProfile | null,
  post?: Post | null,
  article?: Article | null,
  createdAt: string,
  updatedAt: string,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  content: string,
  slug: string,
  authorId: string,
  author?: MemberProfile | null,
  viewCount: number,
  attachments?: ModelAttachmentConnection | null,
  publishedAt?: string | null,
  isPublished: boolean,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postId: string,
  parentCommentId?: string | null,
  content: string,
  authorId: string,
  author?: MemberProfile | null,
  depth: number,
  threadPath: string,
  post?: Post | null,
  parentComment?: Comment | null,
  replies?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  isDeleted: boolean,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  calendarId: string,
  title: string,
  description?: string | null,
  location?: string | null,
  startDateTime: string,
  endDateTime: string,
  isAllDay: boolean,
  recurrenceRule?: string | null,
  sourceType: string,
  sourceEventId?: string | null,
  mailAccountLinkId?: string | null,
  colorHex?: string | null,
  creatorId?: string | null,
  creator?: MemberProfile | null,
  calendar?: Calendar | null,
  mailAccountLink?: MailAccountLink | null,
  createdAt: string,
  updatedAt: string,
  lastSyncedAt?: string | null,
};

export type Calendar = {
  __typename: "Calendar",
  id: string,
  name: string,
  description?: string | null,
  slug: string,
  defaultView: string,
  events?: ModelEventConnection | null,
  mailAccountLinks?: ModelMailAccountLinkConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMailAccountLinkConnection = {
  __typename: "ModelMailAccountLinkConnection",
  items:  Array<MailAccountLink | null >,
  nextToken?: string | null,
};

export type MailAccountLink = {
  __typename: "MailAccountLink",
  id: string,
  calendarId: string,
  accountType: string,
  accountEmail: string,
  encryptedAccessToken: string,
  encryptedRefreshToken: string,
  tokenExpiresAt: string,
  displayName: string,
  colorHex: string,
  isActive: boolean,
  lastSyncedAt?: string | null,
  lastSyncStatus?: string | null,
  lastSyncError?: string | null,
  calendar?: Calendar | null,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type UpdateMemberProfileInput = {
  id: string,
  email?: string | null,
  displayName?: string | null,
  avatarS3Key?: string | null,
  roleId?: string | null,
  createdAt?: string | null,
  lastLoginAt?: string | null,
  isActive?: boolean | null,
  cachedPermissions?: Array< string | null > | null,
  permissionsCachedAt?: string | null,
};

export type DeleteMemberProfileInput = {
  id: string,
};

export type CreateRoleInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  isSystemRole: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelRoleConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isSystemRole?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoleConditionInput | null > | null,
  or?: Array< ModelRoleConditionInput | null > | null,
  not?: ModelRoleConditionInput | null,
};

export type UpdateRoleInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  isSystemRole?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteRoleInput = {
  id: string,
};

export type CreatePermissionInput = {
  id?: string | null,
  moduleType: string,
  permissionKey: string,
  displayName: string,
  description?: string | null,
  category: string,
};

export type ModelPermissionConditionInput = {
  moduleType?: ModelStringInput | null,
  permissionKey?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  and?: Array< ModelPermissionConditionInput | null > | null,
  or?: Array< ModelPermissionConditionInput | null > | null,
  not?: ModelPermissionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdatePermissionInput = {
  id: string,
  moduleType?: string | null,
  permissionKey?: string | null,
  displayName?: string | null,
  description?: string | null,
  category?: string | null,
};

export type DeletePermissionInput = {
  id: string,
};

export type CreateRolePermissionInput = {
  id?: string | null,
  roleId: string,
  permissionId: string,
};

export type ModelRolePermissionConditionInput = {
  roleId?: ModelIDInput | null,
  permissionId?: ModelIDInput | null,
  and?: Array< ModelRolePermissionConditionInput | null > | null,
  or?: Array< ModelRolePermissionConditionInput | null > | null,
  not?: ModelRolePermissionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateRolePermissionInput = {
  id: string,
  roleId?: string | null,
  permissionId?: string | null,
};

export type DeleteRolePermissionInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  parentMenuId?: string | null,
  title: string,
  slug: string,
  order: number,
  isVisible: boolean,
  moduleConfigId?: string | null,
  layoutId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMenuConditionInput = {
  parentMenuId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  isVisible?: ModelBooleanInput | null,
  moduleConfigId?: ModelIDInput | null,
  layoutId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  parentMenuId?: string | null,
  title: string,
  slug: string,
  order: number,
  isVisible: boolean,
  moduleConfigId?: string | null,
  moduleConfig?: ModuleConfig | null,
  layoutId?: string | null,
  layout?: Layout | null,
  parentMenu?: Menu | null,
  childMenus?: ModelMenuConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModuleConfig = {
  __typename: "ModuleConfig",
  id: string,
  moduleType: string,
  displayName: string,
  moduleSettings: string,
  menus?: ModelMenuConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type Layout = {
  __typename: "Layout",
  id: string,
  name: string,
  description?: string | null,
  templateId: string,
  isDefault: boolean,
  regionConfigs: string,
  menus?: ModelMenuConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenuInput = {
  id: string,
  parentMenuId?: string | null,
  title?: string | null,
  slug?: string | null,
  order?: number | null,
  isVisible?: boolean | null,
  moduleConfigId?: string | null,
  layoutId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateModuleConfigInput = {
  id?: string | null,
  moduleType: string,
  displayName: string,
  moduleSettings: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelModuleConfigConditionInput = {
  moduleType?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  moduleSettings?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelModuleConfigConditionInput | null > | null,
  or?: Array< ModelModuleConfigConditionInput | null > | null,
  not?: ModelModuleConfigConditionInput | null,
};

export type UpdateModuleConfigInput = {
  id: string,
  moduleType?: string | null,
  displayName?: string | null,
  moduleSettings?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteModuleConfigInput = {
  id: string,
};

export type CreateLayoutInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  templateId: string,
  isDefault: boolean,
  regionConfigs: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelLayoutConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  templateId?: ModelStringInput | null,
  isDefault?: ModelBooleanInput | null,
  regionConfigs?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLayoutConditionInput | null > | null,
  or?: Array< ModelLayoutConditionInput | null > | null,
  not?: ModelLayoutConditionInput | null,
};

export type UpdateLayoutInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  templateId?: string | null,
  isDefault?: boolean | null,
  regionConfigs?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteLayoutInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  content: string,
  slug: string,
  authorId: string,
  viewCount: number,
  publishedAt?: string | null,
  isPublished: boolean,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  publishedAt?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  slug?: string | null,
  authorId?: string | null,
  viewCount?: number | null,
  publishedAt?: string | null,
  isPublished?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateBoardInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  slug: string,
  customFieldDefinitions?: string | null,
  defaultSortField?: string | null,
  defaultSortOrder?: string | null,
  postsPerPage: number,
  permissionScope: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBoardConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  customFieldDefinitions?: ModelStringInput | null,
  defaultSortField?: ModelStringInput | null,
  defaultSortOrder?: ModelStringInput | null,
  postsPerPage?: ModelIntInput | null,
  permissionScope?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
};

export type UpdateBoardInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  slug?: string | null,
  customFieldDefinitions?: string | null,
  defaultSortField?: string | null,
  defaultSortOrder?: string | null,
  postsPerPage?: number | null,
  permissionScope?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBoardInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  boardId: string,
  name: string,
  slug: string,
  description?: string | null,
  order: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCategoryConditionInput = {
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  order?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  boardId?: string | null,
  name?: string | null,
  slug?: string | null,
  description?: string | null,
  order?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  boardId: string,
  categoryId?: string | null,
  title: string,
  content: string,
  authorId: string,
  viewCount: number,
  customFieldValues?: string | null,
  customSort1?: string | null,
  customSort2?: string | null,
  customSort3?: string | null,
  customSort4?: string | null,
  customSort5?: string | null,
  publishedAt?: string | null,
  isPublished: boolean,
  isPinned: boolean,
  pinnedStatus: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  boardId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  customFieldValues?: ModelStringInput | null,
  customSort1?: ModelStringInput | null,
  customSort2?: ModelStringInput | null,
  customSort3?: ModelStringInput | null,
  customSort4?: ModelStringInput | null,
  customSort5?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  isPinned?: ModelBooleanInput | null,
  pinnedStatus?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  boardId?: string | null,
  categoryId?: string | null,
  title?: string | null,
  content?: string | null,
  authorId?: string | null,
  viewCount?: number | null,
  customFieldValues?: string | null,
  customSort1?: string | null,
  customSort2?: string | null,
  customSort3?: string | null,
  customSort4?: string | null,
  customSort5?: string | null,
  publishedAt?: string | null,
  isPublished?: boolean | null,
  isPinned?: boolean | null,
  pinnedStatus?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateTagInput = {
  id?: string | null,
  name: string,
  slug: string,
  createdAt?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateTagInput = {
  id: string,
  name?: string | null,
  slug?: string | null,
  createdAt?: string | null,
};

export type DeleteTagInput = {
  id: string,
};

export type CreatePostTagInput = {
  id?: string | null,
  postId: string,
  tagId: string,
};

export type ModelPostTagConditionInput = {
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  and?: Array< ModelPostTagConditionInput | null > | null,
  or?: Array< ModelPostTagConditionInput | null > | null,
  not?: ModelPostTagConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  authorId?: ModelStringInput | null,
};

export type UpdatePostTagInput = {
  id: string,
  postId?: string | null,
  tagId?: string | null,
};

export type DeletePostTagInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postId: string,
  parentCommentId?: string | null,
  content: string,
  authorId: string,
  depth: number,
  threadPath: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  isDeleted: boolean,
};

export type ModelCommentConditionInput = {
  postId?: ModelIDInput | null,
  parentCommentId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  depth?: ModelIntInput | null,
  threadPath?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postId?: string | null,
  parentCommentId?: string | null,
  content?: string | null,
  authorId?: string | null,
  depth?: number | null,
  threadPath?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  isDeleted?: boolean | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateCalendarInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  slug: string,
  defaultView: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCalendarConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  defaultView?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCalendarConditionInput | null > | null,
  or?: Array< ModelCalendarConditionInput | null > | null,
  not?: ModelCalendarConditionInput | null,
};

export type UpdateCalendarInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  slug?: string | null,
  defaultView?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCalendarInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  calendarId: string,
  title: string,
  description?: string | null,
  location?: string | null,
  startDateTime: string,
  endDateTime: string,
  isAllDay: boolean,
  recurrenceRule?: string | null,
  sourceType: string,
  sourceEventId?: string | null,
  mailAccountLinkId?: string | null,
  colorHex?: string | null,
  creatorId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  lastSyncedAt?: string | null,
};

export type ModelEventConditionInput = {
  calendarId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  isAllDay?: ModelBooleanInput | null,
  recurrenceRule?: ModelStringInput | null,
  sourceType?: ModelStringInput | null,
  sourceEventId?: ModelStringInput | null,
  mailAccountLinkId?: ModelIDInput | null,
  colorHex?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  lastSyncedAt?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type UpdateEventInput = {
  id: string,
  calendarId?: string | null,
  title?: string | null,
  description?: string | null,
  location?: string | null,
  startDateTime?: string | null,
  endDateTime?: string | null,
  isAllDay?: boolean | null,
  recurrenceRule?: string | null,
  sourceType?: string | null,
  sourceEventId?: string | null,
  mailAccountLinkId?: string | null,
  colorHex?: string | null,
  creatorId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  lastSyncedAt?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateMailAccountLinkInput = {
  id?: string | null,
  calendarId: string,
  accountType: string,
  accountEmail: string,
  encryptedAccessToken: string,
  encryptedRefreshToken: string,
  tokenExpiresAt: string,
  displayName: string,
  colorHex: string,
  isActive: boolean,
  lastSyncedAt?: string | null,
  lastSyncStatus?: string | null,
  lastSyncError?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelMailAccountLinkConditionInput = {
  calendarId?: ModelIDInput | null,
  accountType?: ModelStringInput | null,
  accountEmail?: ModelStringInput | null,
  encryptedAccessToken?: ModelStringInput | null,
  encryptedRefreshToken?: ModelStringInput | null,
  tokenExpiresAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  lastSyncedAt?: ModelStringInput | null,
  lastSyncStatus?: ModelStringInput | null,
  lastSyncError?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMailAccountLinkConditionInput | null > | null,
  or?: Array< ModelMailAccountLinkConditionInput | null > | null,
  not?: ModelMailAccountLinkConditionInput | null,
};

export type UpdateMailAccountLinkInput = {
  id: string,
  calendarId?: string | null,
  accountType?: string | null,
  accountEmail?: string | null,
  encryptedAccessToken?: string | null,
  encryptedRefreshToken?: string | null,
  tokenExpiresAt?: string | null,
  displayName?: string | null,
  colorHex?: string | null,
  isActive?: boolean | null,
  lastSyncedAt?: string | null,
  lastSyncStatus?: string | null,
  lastSyncError?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMailAccountLinkInput = {
  id: string,
};

export type CreateAttachmentInput = {
  id?: string | null,
  postId?: string | null,
  articleId?: string | null,
  s3Key: string,
  s3Bucket: string,
  fileName: string,
  fileSize: number,
  mimeType: string,
  isEmbedded: boolean,
  embedLocation?: string | null,
  uploaderId: string,
  createdAt?: string | null,
};

export type ModelAttachmentConditionInput = {
  postId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  s3Key?: ModelStringInput | null,
  s3Bucket?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  mimeType?: ModelStringInput | null,
  isEmbedded?: ModelBooleanInput | null,
  embedLocation?: ModelStringInput | null,
  uploaderId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelAttachmentConditionInput | null > | null,
  or?: Array< ModelAttachmentConditionInput | null > | null,
  not?: ModelAttachmentConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAttachmentInput = {
  id: string,
  postId?: string | null,
  articleId?: string | null,
  s3Key?: string | null,
  s3Bucket?: string | null,
  fileName?: string | null,
  fileSize?: number | null,
  mimeType?: string | null,
  isEmbedded?: boolean | null,
  embedLocation?: string | null,
  uploaderId?: string | null,
  createdAt?: string | null,
};

export type DeleteAttachmentInput = {
  id: string,
};

export type CreateViewCountQueueInput = {
  id?: string | null,
  targetType: string,
  targetId: string,
  incrementBy: number,
  processedAt?: string | null,
  createdAt?: string | null,
};

export type ModelViewCountQueueConditionInput = {
  targetType?: ModelStringInput | null,
  targetId?: ModelIDInput | null,
  incrementBy?: ModelIntInput | null,
  processedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelViewCountQueueConditionInput | null > | null,
  or?: Array< ModelViewCountQueueConditionInput | null > | null,
  not?: ModelViewCountQueueConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ViewCountQueue = {
  __typename: "ViewCountQueue",
  id: string,
  targetType: string,
  targetId: string,
  incrementBy: number,
  processedAt?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateViewCountQueueInput = {
  id: string,
  targetType?: string | null,
  targetId?: string | null,
  incrementBy?: number | null,
  processedAt?: string | null,
  createdAt?: string | null,
};

export type DeleteViewCountQueueInput = {
  id: string,
};

export type ModelMemberProfileFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  avatarS3Key?: ModelStringInput | null,
  roleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  lastLoginAt?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  cachedPermissions?: ModelStringInput | null,
  permissionsCachedAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemberProfileFilterInput | null > | null,
  or?: Array< ModelMemberProfileFilterInput | null > | null,
  not?: ModelMemberProfileFilterInput | null,
};

export type ModelRoleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isSystemRole?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRoleFilterInput | null > | null,
  or?: Array< ModelRoleFilterInput | null > | null,
  not?: ModelRoleFilterInput | null,
};

export type ModelRoleConnection = {
  __typename: "ModelRoleConnection",
  items:  Array<Role | null >,
  nextToken?: string | null,
};

export type ModelPermissionFilterInput = {
  id?: ModelIDInput | null,
  moduleType?: ModelStringInput | null,
  permissionKey?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPermissionFilterInput | null > | null,
  or?: Array< ModelPermissionFilterInput | null > | null,
  not?: ModelPermissionFilterInput | null,
};

export type ModelPermissionConnection = {
  __typename: "ModelPermissionConnection",
  items:  Array<Permission | null >,
  nextToken?: string | null,
};

export type ModelRolePermissionFilterInput = {
  id?: ModelIDInput | null,
  roleId?: ModelIDInput | null,
  permissionId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRolePermissionFilterInput | null > | null,
  or?: Array< ModelRolePermissionFilterInput | null > | null,
  not?: ModelRolePermissionFilterInput | null,
};

export type ModelPostTagFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  tagId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostTagFilterInput | null > | null,
  or?: Array< ModelPostTagFilterInput | null > | null,
  not?: ModelPostTagFilterInput | null,
  authorId?: ModelStringInput | null,
};

export type ModelMailAccountLinkFilterInput = {
  id?: ModelIDInput | null,
  calendarId?: ModelIDInput | null,
  accountType?: ModelStringInput | null,
  accountEmail?: ModelStringInput | null,
  encryptedAccessToken?: ModelStringInput | null,
  encryptedRefreshToken?: ModelStringInput | null,
  tokenExpiresAt?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  lastSyncedAt?: ModelStringInput | null,
  lastSyncStatus?: ModelStringInput | null,
  lastSyncError?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMailAccountLinkFilterInput | null > | null,
  or?: Array< ModelMailAccountLinkFilterInput | null > | null,
  not?: ModelMailAccountLinkFilterInput | null,
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  s3Key?: ModelStringInput | null,
  s3Bucket?: ModelStringInput | null,
  fileName?: ModelStringInput | null,
  fileSize?: ModelIntInput | null,
  mimeType?: ModelStringInput | null,
  isEmbedded?: ModelBooleanInput | null,
  embedLocation?: ModelStringInput | null,
  uploaderId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttachmentFilterInput | null > | null,
  or?: Array< ModelAttachmentFilterInput | null > | null,
  not?: ModelAttachmentFilterInput | null,
};

export type ModelViewCountQueueFilterInput = {
  id?: ModelIDInput | null,
  targetType?: ModelStringInput | null,
  targetId?: ModelIDInput | null,
  incrementBy?: ModelIntInput | null,
  processedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelViewCountQueueFilterInput | null > | null,
  or?: Array< ModelViewCountQueueFilterInput | null > | null,
  not?: ModelViewCountQueueFilterInput | null,
};

export type ModelViewCountQueueConnection = {
  __typename: "ModelViewCountQueueConnection",
  items:  Array<ViewCountQueue | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  parentMenuId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  order?: ModelIntInput | null,
  isVisible?: ModelBooleanInput | null,
  moduleConfigId?: ModelIDInput | null,
  layoutId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelModuleConfigFilterInput = {
  id?: ModelIDInput | null,
  moduleType?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  moduleSettings?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelModuleConfigFilterInput | null > | null,
  or?: Array< ModelModuleConfigFilterInput | null > | null,
  not?: ModelModuleConfigFilterInput | null,
};

export type ModelModuleConfigConnection = {
  __typename: "ModelModuleConfigConnection",
  items:  Array<ModuleConfig | null >,
  nextToken?: string | null,
};

export type ModelLayoutFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  templateId?: ModelStringInput | null,
  isDefault?: ModelBooleanInput | null,
  regionConfigs?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLayoutFilterInput | null > | null,
  or?: Array< ModelLayoutFilterInput | null > | null,
  not?: ModelLayoutFilterInput | null,
};

export type ModelLayoutConnection = {
  __typename: "ModelLayoutConnection",
  items:  Array<Layout | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  publishedAt?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  customFieldDefinitions?: ModelStringInput | null,
  defaultSortField?: ModelStringInput | null,
  defaultSortOrder?: ModelStringInput | null,
  postsPerPage?: ModelIntInput | null,
  permissionScope?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items:  Array<Board | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  boardId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  description?: ModelStringInput | null,
  order?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  boardId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  viewCount?: ModelIntInput | null,
  customFieldValues?: ModelStringInput | null,
  customSort1?: ModelStringInput | null,
  customSort2?: ModelStringInput | null,
  customSort3?: ModelStringInput | null,
  customSort4?: ModelStringInput | null,
  customSort5?: ModelStringInput | null,
  publishedAt?: ModelStringInput | null,
  isPublished?: ModelBooleanInput | null,
  isPinned?: ModelBooleanInput | null,
  pinnedStatus?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostByBoardPinnedCompositeKeyConditionInput = {
  eq?: ModelPostByBoardPinnedCompositeKeyInput | null,
  le?: ModelPostByBoardPinnedCompositeKeyInput | null,
  lt?: ModelPostByBoardPinnedCompositeKeyInput | null,
  ge?: ModelPostByBoardPinnedCompositeKeyInput | null,
  gt?: ModelPostByBoardPinnedCompositeKeyInput | null,
  between?: Array< ModelPostByBoardPinnedCompositeKeyInput | null > | null,
  beginsWith?: ModelPostByBoardPinnedCompositeKeyInput | null,
};

export type ModelPostByBoardPinnedCompositeKeyInput = {
  boardId?: string | null,
  createdAt?: string | null,
};

export type ModelTagFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  parentCommentId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  authorId?: ModelIDInput | null,
  depth?: ModelIntInput | null,
  threadPath?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  isDeleted?: ModelBooleanInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelCalendarFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  defaultView?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCalendarFilterInput | null > | null,
  or?: Array< ModelCalendarFilterInput | null > | null,
  not?: ModelCalendarFilterInput | null,
};

export type ModelCalendarConnection = {
  __typename: "ModelCalendarConnection",
  items:  Array<Calendar | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  calendarId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  startDateTime?: ModelStringInput | null,
  endDateTime?: ModelStringInput | null,
  isAllDay?: ModelBooleanInput | null,
  recurrenceRule?: ModelStringInput | null,
  sourceType?: ModelStringInput | null,
  sourceEventId?: ModelStringInput | null,
  mailAccountLinkId?: ModelIDInput | null,
  colorHex?: ModelStringInput | null,
  creatorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  lastSyncedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelSubscriptionMemberProfileFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  avatarS3Key?: ModelSubscriptionStringInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  lastLoginAt?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  cachedPermissions?: ModelSubscriptionStringInput | null,
  permissionsCachedAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberProfileFilterInput | null > | null,
  id?: ModelStringInput | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  isSystemRole?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoleFilterInput | null > | null,
};

export type ModelSubscriptionPermissionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  moduleType?: ModelSubscriptionStringInput | null,
  permissionKey?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPermissionFilterInput | null > | null,
  or?: Array< ModelSubscriptionPermissionFilterInput | null > | null,
};

export type ModelSubscriptionRolePermissionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roleId?: ModelSubscriptionIDInput | null,
  permissionId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRolePermissionFilterInput | null > | null,
  or?: Array< ModelSubscriptionRolePermissionFilterInput | null > | null,
};

export type ModelSubscriptionPostTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  tagId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostTagFilterInput | null > | null,
  authorId?: ModelStringInput | null,
};

export type ModelSubscriptionMailAccountLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calendarId?: ModelSubscriptionIDInput | null,
  accountType?: ModelSubscriptionStringInput | null,
  accountEmail?: ModelSubscriptionStringInput | null,
  encryptedAccessToken?: ModelSubscriptionStringInput | null,
  encryptedRefreshToken?: ModelSubscriptionStringInput | null,
  tokenExpiresAt?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  colorHex?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  lastSyncedAt?: ModelSubscriptionStringInput | null,
  lastSyncStatus?: ModelSubscriptionStringInput | null,
  lastSyncError?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMailAccountLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionMailAccountLinkFilterInput | null > | null,
};

export type ModelSubscriptionAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  articleId?: ModelSubscriptionIDInput | null,
  s3Key?: ModelSubscriptionStringInput | null,
  s3Bucket?: ModelSubscriptionStringInput | null,
  fileName?: ModelSubscriptionStringInput | null,
  fileSize?: ModelSubscriptionIntInput | null,
  mimeType?: ModelSubscriptionStringInput | null,
  isEmbedded?: ModelSubscriptionBooleanInput | null,
  embedLocation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  uploaderId?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionViewCountQueueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  targetType?: ModelSubscriptionStringInput | null,
  targetId?: ModelSubscriptionIDInput | null,
  incrementBy?: ModelSubscriptionIntInput | null,
  processedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionViewCountQueueFilterInput | null > | null,
  or?: Array< ModelSubscriptionViewCountQueueFilterInput | null > | null,
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parentMenuId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  isVisible?: ModelSubscriptionBooleanInput | null,
  moduleConfigId?: ModelSubscriptionIDInput | null,
  layoutId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
};

export type ModelSubscriptionModuleConfigFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  moduleType?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  moduleSettings?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModuleConfigFilterInput | null > | null,
  or?: Array< ModelSubscriptionModuleConfigFilterInput | null > | null,
};

export type ModelSubscriptionLayoutFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  templateId?: ModelSubscriptionStringInput | null,
  isDefault?: ModelSubscriptionBooleanInput | null,
  regionConfigs?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLayoutFilterInput | null > | null,
  or?: Array< ModelSubscriptionLayoutFilterInput | null > | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  viewCount?: ModelSubscriptionIntInput | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  authorId?: ModelStringInput | null,
};

export type ModelSubscriptionBoardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  customFieldDefinitions?: ModelSubscriptionStringInput | null,
  defaultSortField?: ModelSubscriptionStringInput | null,
  defaultSortOrder?: ModelSubscriptionStringInput | null,
  postsPerPage?: ModelSubscriptionIntInput | null,
  permissionScope?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  boardId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  order?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  boardId?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  viewCount?: ModelSubscriptionIntInput | null,
  customFieldValues?: ModelSubscriptionStringInput | null,
  customSort1?: ModelSubscriptionStringInput | null,
  customSort2?: ModelSubscriptionStringInput | null,
  customSort3?: ModelSubscriptionStringInput | null,
  customSort4?: ModelSubscriptionStringInput | null,
  customSort5?: ModelSubscriptionStringInput | null,
  publishedAt?: ModelSubscriptionStringInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  isPinned?: ModelSubscriptionBooleanInput | null,
  pinnedStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  authorId?: ModelStringInput | null,
};

export type ModelSubscriptionTagFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTagFilterInput | null > | null,
  or?: Array< ModelSubscriptionTagFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  parentCommentId?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  depth?: ModelSubscriptionIntInput | null,
  threadPath?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  isDeleted?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  authorId?: ModelStringInput | null,
};

export type ModelSubscriptionCalendarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  defaultView?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCalendarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCalendarFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  calendarId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  startDateTime?: ModelSubscriptionStringInput | null,
  endDateTime?: ModelSubscriptionStringInput | null,
  isAllDay?: ModelSubscriptionBooleanInput | null,
  recurrenceRule?: ModelSubscriptionStringInput | null,
  sourceType?: ModelSubscriptionStringInput | null,
  sourceEventId?: ModelSubscriptionStringInput | null,
  mailAccountLinkId?: ModelSubscriptionIDInput | null,
  colorHex?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  lastSyncedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  creatorId?: ModelStringInput | null,
};

export type CheckPermissionMutationVariables = {
  userId: string,
  permissionKey: string,
  resourceId?: string | null,
  resourceType?: string | null,
};

export type CheckPermissionMutation = {
  checkPermission?:  {
    __typename: "PermissionCheckResult",
    allowed: boolean,
    reason?: string | null,
  } | null,
};

export type CreateMemberProfileMutationVariables = {
  input: CreateMemberProfileInput,
  condition?: ModelMemberProfileConditionInput | null,
};

export type CreateMemberProfileMutation = {
  createMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMemberProfileMutationVariables = {
  input: UpdateMemberProfileInput,
  condition?: ModelMemberProfileConditionInput | null,
};

export type UpdateMemberProfileMutation = {
  updateMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMemberProfileMutationVariables = {
  input: DeleteMemberProfileInput,
  condition?: ModelMemberProfileConditionInput | null,
};

export type DeleteMemberProfileMutation = {
  deleteMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateRoleMutationVariables = {
  input: CreateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type CreateRoleMutation = {
  createRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateRoleMutationVariables = {
  input: UpdateRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type UpdateRoleMutation = {
  updateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteRoleMutationVariables = {
  input: DeleteRoleInput,
  condition?: ModelRoleConditionInput | null,
};

export type DeleteRoleMutation = {
  deleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePermissionMutationVariables = {
  input: CreatePermissionInput,
  condition?: ModelPermissionConditionInput | null,
};

export type CreatePermissionMutation = {
  createPermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePermissionMutationVariables = {
  input: UpdatePermissionInput,
  condition?: ModelPermissionConditionInput | null,
};

export type UpdatePermissionMutation = {
  updatePermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePermissionMutationVariables = {
  input: DeletePermissionInput,
  condition?: ModelPermissionConditionInput | null,
};

export type DeletePermissionMutation = {
  deletePermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRolePermissionMutationVariables = {
  input: CreateRolePermissionInput,
  condition?: ModelRolePermissionConditionInput | null,
};

export type CreateRolePermissionMutation = {
  createRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRolePermissionMutationVariables = {
  input: UpdateRolePermissionInput,
  condition?: ModelRolePermissionConditionInput | null,
};

export type UpdateRolePermissionMutation = {
  updateRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRolePermissionMutationVariables = {
  input: DeleteRolePermissionInput,
  condition?: ModelRolePermissionConditionInput | null,
};

export type DeleteRolePermissionMutation = {
  deleteRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateModuleConfigMutationVariables = {
  input: CreateModuleConfigInput,
  condition?: ModelModuleConfigConditionInput | null,
};

export type CreateModuleConfigMutation = {
  createModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateModuleConfigMutationVariables = {
  input: UpdateModuleConfigInput,
  condition?: ModelModuleConfigConditionInput | null,
};

export type UpdateModuleConfigMutation = {
  updateModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteModuleConfigMutationVariables = {
  input: DeleteModuleConfigInput,
  condition?: ModelModuleConfigConditionInput | null,
};

export type DeleteModuleConfigMutation = {
  deleteModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLayoutMutationVariables = {
  input: CreateLayoutInput,
  condition?: ModelLayoutConditionInput | null,
};

export type CreateLayoutMutation = {
  createLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLayoutMutationVariables = {
  input: UpdateLayoutInput,
  condition?: ModelLayoutConditionInput | null,
};

export type UpdateLayoutMutation = {
  updateLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLayoutMutationVariables = {
  input: DeleteLayoutInput,
  condition?: ModelLayoutConditionInput | null,
};

export type DeleteLayoutMutation = {
  deleteLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostTagMutationVariables = {
  input: CreatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type CreatePostTagMutation = {
  createPostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type UpdatePostTagMutationVariables = {
  input: UpdatePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type UpdatePostTagMutation = {
  updatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type DeletePostTagMutationVariables = {
  input: DeletePostTagInput,
  condition?: ModelPostTagConditionInput | null,
};

export type DeletePostTagMutation = {
  deletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type CreateCalendarMutationVariables = {
  input: CreateCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type CreateCalendarMutation = {
  createCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCalendarMutationVariables = {
  input: UpdateCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type UpdateCalendarMutation = {
  updateCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCalendarMutationVariables = {
  input: DeleteCalendarInput,
  condition?: ModelCalendarConditionInput | null,
};

export type DeleteCalendarMutation = {
  deleteCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type CreateMailAccountLinkMutationVariables = {
  input: CreateMailAccountLinkInput,
  condition?: ModelMailAccountLinkConditionInput | null,
};

export type CreateMailAccountLinkMutation = {
  createMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMailAccountLinkMutationVariables = {
  input: UpdateMailAccountLinkInput,
  condition?: ModelMailAccountLinkConditionInput | null,
};

export type UpdateMailAccountLinkMutation = {
  updateMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMailAccountLinkMutationVariables = {
  input: DeleteMailAccountLinkInput,
  condition?: ModelMailAccountLinkConditionInput | null,
};

export type DeleteMailAccountLinkMutation = {
  deleteMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttachmentMutationVariables = {
  input: CreateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type CreateAttachmentMutation = {
  createAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttachmentMutationVariables = {
  input: UpdateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentMutation = {
  updateAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttachmentMutationVariables = {
  input: DeleteAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type DeleteAttachmentMutation = {
  deleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateViewCountQueueMutationVariables = {
  input: CreateViewCountQueueInput,
  condition?: ModelViewCountQueueConditionInput | null,
};

export type CreateViewCountQueueMutation = {
  createViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateViewCountQueueMutationVariables = {
  input: UpdateViewCountQueueInput,
  condition?: ModelViewCountQueueConditionInput | null,
};

export type UpdateViewCountQueueMutation = {
  updateViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteViewCountQueueMutationVariables = {
  input: DeleteViewCountQueueInput,
  condition?: ModelViewCountQueueConditionInput | null,
};

export type DeleteViewCountQueueMutation = {
  deleteViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type IncrementViewCountMutationVariables = {
  targetType: string,
  targetId: string,
};

export type IncrementViewCountMutation = {
  incrementViewCount?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserPermissionsQueryVariables = {
  userId: string,
};

export type GetUserPermissionsQuery = {
  getUserPermissions?: Array< string | null > | null,
};

export type GetMemberProfileQueryVariables = {
  id: string,
};

export type GetMemberProfileQuery = {
  getMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMemberProfilesQueryVariables = {
  filter?: ModelMemberProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberProfilesQuery = {
  listMemberProfiles?:  {
    __typename: "ModelMemberProfileConnection",
    items:  Array< {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoleQueryVariables = {
  id: string,
};

export type GetRoleQuery = {
  getRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListRolesQueryVariables = {
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolesQuery = {
  listRoles?:  {
    __typename: "ModelRoleConnection",
    items:  Array< {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPermissionQueryVariables = {
  id: string,
};

export type GetPermissionQuery = {
  getPermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPermissionsQueryVariables = {
  filter?: ModelPermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPermissionsQuery = {
  listPermissions?:  {
    __typename: "ModelPermissionConnection",
    items:  Array< {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRolePermissionQueryVariables = {
  id: string,
};

export type GetRolePermissionQuery = {
  getRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRolePermissionsQueryVariables = {
  filter?: ModelRolePermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRolePermissionsQuery = {
  listRolePermissions?:  {
    __typename: "ModelRolePermissionConnection",
    items:  Array< {
      __typename: "RolePermission",
      id: string,
      roleId: string,
      permissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostTagQueryVariables = {
  id: string,
};

export type GetPostTagQuery = {
  getPostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type ListPostTagsQueryVariables = {
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostTagsQuery = {
  listPostTags?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      authorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMailAccountLinkQueryVariables = {
  id: string,
};

export type GetMailAccountLinkQuery = {
  getMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMailAccountLinksQueryVariables = {
  filter?: ModelMailAccountLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMailAccountLinksQuery = {
  listMailAccountLinks?:  {
    __typename: "ModelMailAccountLinkConnection",
    items:  Array< {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttachmentQueryVariables = {
  id: string,
};

export type GetAttachmentQuery = {
  getAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttachmentsQuery = {
  listAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      postId?: string | null,
      articleId?: string | null,
      s3Key: string,
      s3Bucket: string,
      fileName: string,
      fileSize: number,
      mimeType: string,
      isEmbedded: boolean,
      embedLocation?: string | null,
      uploaderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetViewCountQueueQueryVariables = {
  id: string,
};

export type GetViewCountQueueQuery = {
  getViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListViewCountQueuesQueryVariables = {
  filter?: ModelViewCountQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListViewCountQueuesQuery = {
  listViewCountQueues?:  {
    __typename: "ModelViewCountQueueConnection",
    items:  Array< {
      __typename: "ViewCountQueue",
      id: string,
      targetType: string,
      targetId: string,
      incrementBy: number,
      processedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberProfilesByEmailQueryVariables = {
  email: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberProfilesByEmailQuery = {
  memberProfilesByEmail?:  {
    __typename: "ModelMemberProfileConnection",
    items:  Array< {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MemberProfilesByRoleIdQueryVariables = {
  roleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMemberProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MemberProfilesByRoleIdQuery = {
  memberProfilesByRoleId?:  {
    __typename: "ModelMemberProfileConnection",
    items:  Array< {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RolesByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RolesByNameQuery = {
  rolesByName?:  {
    __typename: "ModelRoleConnection",
    items:  Array< {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PermissionsByModuleTypeAndPermissionKeyQueryVariables = {
  moduleType: string,
  permissionKey?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PermissionsByModuleTypeAndPermissionKeyQuery = {
  permissionsByModuleTypeAndPermissionKey?:  {
    __typename: "ModelPermissionConnection",
    items:  Array< {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RolePermissionsByRoleIdQueryVariables = {
  roleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRolePermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RolePermissionsByRoleIdQuery = {
  rolePermissionsByRoleId?:  {
    __typename: "ModelRolePermissionConnection",
    items:  Array< {
      __typename: "RolePermission",
      id: string,
      roleId: string,
      permissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RolePermissionsByPermissionIdQueryVariables = {
  permissionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRolePermissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RolePermissionsByPermissionIdQuery = {
  rolePermissionsByPermissionId?:  {
    __typename: "ModelRolePermissionConnection",
    items:  Array< {
      __typename: "RolePermission",
      id: string,
      roleId: string,
      permissionId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByPostIdQuery = {
  postTagsByPostId?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      authorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostTagsByTagIdQueryVariables = {
  tagId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostTagsByTagIdQuery = {
  postTagsByTagId?:  {
    __typename: "ModelPostTagConnection",
    items:  Array< {
      __typename: "PostTag",
      id: string,
      postId: string,
      tagId: string,
      createdAt: string,
      updatedAt: string,
      authorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MailAccountLinksByCalendarIdQueryVariables = {
  calendarId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMailAccountLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MailAccountLinksByCalendarIdQuery = {
  mailAccountLinksByCalendarId?:  {
    __typename: "ModelMailAccountLinkConnection",
    items:  Array< {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MailAccountLinksByEmailQueryVariables = {
  accountEmail: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMailAccountLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MailAccountLinksByEmailQuery = {
  mailAccountLinksByEmail?:  {
    __typename: "ModelMailAccountLinkConnection",
    items:  Array< {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByPostIdQuery = {
  attachmentsByPostId?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      postId?: string | null,
      articleId?: string | null,
      s3Key: string,
      s3Bucket: string,
      fileName: string,
      fileSize: number,
      mimeType: string,
      isEmbedded: boolean,
      embedLocation?: string | null,
      uploaderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByArticleIdQueryVariables = {
  articleId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByArticleIdQuery = {
  attachmentsByArticleId?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      postId?: string | null,
      articleId?: string | null,
      s3Key: string,
      s3Bucket: string,
      fileName: string,
      fileSize: number,
      mimeType: string,
      isEmbedded: boolean,
      embedLocation?: string | null,
      uploaderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByS3KeyQueryVariables = {
  s3Key: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByS3KeyQuery = {
  attachmentsByS3Key?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      postId?: string | null,
      articleId?: string | null,
      s3Key: string,
      s3Bucket: string,
      fileName: string,
      fileSize: number,
      mimeType: string,
      isEmbedded: boolean,
      embedLocation?: string | null,
      uploaderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByUploaderIdQueryVariables = {
  uploaderId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByUploaderIdQuery = {
  attachmentsByUploaderId?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      postId?: string | null,
      articleId?: string | null,
      s3Key: string,
      s3Bucket: string,
      fileName: string,
      fileSize: number,
      mimeType: string,
      isEmbedded: boolean,
      embedLocation?: string | null,
      uploaderId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViewCountQueuesByTargetTypeAndCreatedAtQueryVariables = {
  targetType: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelViewCountQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViewCountQueuesByTargetTypeAndCreatedAtQuery = {
  viewCountQueuesByTargetTypeAndCreatedAt?:  {
    __typename: "ModelViewCountQueueConnection",
    items:  Array< {
      __typename: "ViewCountQueue",
      id: string,
      targetType: string,
      targetId: string,
      incrementBy: number,
      processedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViewCountQueuesByProcessedAtQueryVariables = {
  processedAt: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelViewCountQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViewCountQueuesByProcessedAtQuery = {
  viewCountQueuesByProcessedAt?:  {
    __typename: "ModelViewCountQueueConnection",
    items:  Array< {
      __typename: "ViewCountQueue",
      id: string,
      targetType: string,
      targetId: string,
      incrementBy: number,
      processedAt?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenusByParentMenuIdAndOrderQueryVariables = {
  parentMenuId: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenusByParentMenuIdAndOrderQuery = {
  menusByParentMenuIdAndOrder?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMenuBySlugQuery = {
  getMenuBySlug?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenusByModuleConfigIdQueryVariables = {
  moduleConfigId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenusByModuleConfigIdQuery = {
  menusByModuleConfigId?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenusByLayoutIdQueryVariables = {
  layoutId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenusByLayoutIdQuery = {
  menusByLayoutId?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetModuleConfigQueryVariables = {
  id: string,
};

export type GetModuleConfigQuery = {
  getModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListModuleConfigsQueryVariables = {
  filter?: ModelModuleConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModuleConfigsQuery = {
  listModuleConfigs?:  {
    __typename: "ModelModuleConfigConnection",
    items:  Array< {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ModuleConfigsByModuleTypeQueryVariables = {
  moduleType: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelModuleConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ModuleConfigsByModuleTypeQuery = {
  moduleConfigsByModuleType?:  {
    __typename: "ModelModuleConfigConnection",
    items:  Array< {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLayoutQueryVariables = {
  id: string,
};

export type GetLayoutQuery = {
  getLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLayoutsQueryVariables = {
  filter?: ModelLayoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLayoutsQuery = {
  listLayouts?:  {
    __typename: "ModelLayoutConnection",
    items:  Array< {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetArticleBySlugQuery = {
  getArticleBySlug?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ArticlesByAuthorIdAndCreatedAtQueryVariables = {
  authorId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ArticlesByAuthorIdAndCreatedAtQuery = {
  articlesByAuthorIdAndCreatedAt?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetBoardBySlugQuery = {
  getBoardBySlug?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CategoriesByBoardIdAndOrderQueryVariables = {
  boardId: string,
  order?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoriesByBoardIdAndOrderQuery = {
  categoriesByBoardIdAndOrder?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCreatedAtQueryVariables = {
  boardId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCreatedAtQuery = {
  postsByBoardIdAndCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndViewCountQueryVariables = {
  boardId: string,
  viewCount?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndViewCountQuery = {
  postsByBoardIdAndViewCount?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCustomSort1QueryVariables = {
  boardId: string,
  customSort1?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCustomSort1Query = {
  postsByBoardIdAndCustomSort1?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCustomSort2QueryVariables = {
  boardId: string,
  customSort2?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCustomSort2Query = {
  postsByBoardIdAndCustomSort2?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCustomSort3QueryVariables = {
  boardId: string,
  customSort3?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCustomSort3Query = {
  postsByBoardIdAndCustomSort3?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCustomSort4QueryVariables = {
  boardId: string,
  customSort4?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCustomSort4Query = {
  postsByBoardIdAndCustomSort4?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByBoardIdAndCustomSort5QueryVariables = {
  boardId: string,
  customSort5?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByBoardIdAndCustomSort5Query = {
  postsByBoardIdAndCustomSort5?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByCategoryIdAndCreatedAtQueryVariables = {
  categoryId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByCategoryIdAndCreatedAtQuery = {
  postsByCategoryIdAndCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByAuthorIdAndCreatedAtQueryVariables = {
  authorId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByAuthorIdAndCreatedAtQuery = {
  postsByAuthorIdAndCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByPinnedStatusAndBoardIdAndCreatedAtQueryVariables = {
  pinnedStatus: string,
  boardIdCreatedAt?: ModelPostByBoardPinnedCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByPinnedStatusAndBoardIdAndCreatedAtQuery = {
  postsByPinnedStatusAndBoardIdAndCreatedAt?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TagsByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsByNameQuery = {
  tagsByName?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TagsBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TagsBySlugQuery = {
  tagsBySlug?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByPostIdAndThreadPathQueryVariables = {
  postId: string,
  threadPath?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostIdAndThreadPathQuery = {
  commentsByPostIdAndThreadPath?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByParentCommentIdAndCreatedAtQueryVariables = {
  parentCommentId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByParentCommentIdAndCreatedAtQuery = {
  commentsByParentCommentIdAndCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByAuthorIdAndCreatedAtQueryVariables = {
  authorId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByAuthorIdAndCreatedAtQuery = {
  commentsByAuthorIdAndCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCalendarQueryVariables = {
  id: string,
};

export type GetCalendarQuery = {
  getCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCalendarsQueryVariables = {
  filter?: ModelCalendarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCalendarsQuery = {
  listCalendars?:  {
    __typename: "ModelCalendarConnection",
    items:  Array< {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCalendarBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCalendarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetCalendarBySlugQuery = {
  getCalendarBySlug?:  {
    __typename: "ModelCalendarConnection",
    items:  Array< {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      calendarId: string,
      title: string,
      description?: string | null,
      location?: string | null,
      startDateTime: string,
      endDateTime: string,
      isAllDay: boolean,
      recurrenceRule?: string | null,
      sourceType: string,
      sourceEventId?: string | null,
      mailAccountLinkId?: string | null,
      colorHex?: string | null,
      creatorId?: string | null,
      createdAt: string,
      updatedAt: string,
      lastSyncedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByCalendarIdAndStartDateTimeQueryVariables = {
  calendarId: string,
  startDateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByCalendarIdAndStartDateTimeQuery = {
  eventsByCalendarIdAndStartDateTime?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      calendarId: string,
      title: string,
      description?: string | null,
      location?: string | null,
      startDateTime: string,
      endDateTime: string,
      isAllDay: boolean,
      recurrenceRule?: string | null,
      sourceType: string,
      sourceEventId?: string | null,
      mailAccountLinkId?: string | null,
      colorHex?: string | null,
      creatorId?: string | null,
      createdAt: string,
      updatedAt: string,
      lastSyncedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByMailAccountLinkIdAndStartDateTimeQueryVariables = {
  mailAccountLinkId: string,
  startDateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByMailAccountLinkIdAndStartDateTimeQuery = {
  eventsByMailAccountLinkIdAndStartDateTime?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      calendarId: string,
      title: string,
      description?: string | null,
      location?: string | null,
      startDateTime: string,
      endDateTime: string,
      isAllDay: boolean,
      recurrenceRule?: string | null,
      sourceType: string,
      sourceEventId?: string | null,
      mailAccountLinkId?: string | null,
      colorHex?: string | null,
      creatorId?: string | null,
      createdAt: string,
      updatedAt: string,
      lastSyncedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EventsByCreatorIdAndStartDateTimeQueryVariables = {
  creatorId: string,
  startDateTime?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EventsByCreatorIdAndStartDateTimeQuery = {
  eventsByCreatorIdAndStartDateTime?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      calendarId: string,
      title: string,
      description?: string | null,
      location?: string | null,
      startDateTime: string,
      endDateTime: string,
      isAllDay: boolean,
      recurrenceRule?: string | null,
      sourceType: string,
      sourceEventId?: string | null,
      mailAccountLinkId?: string | null,
      colorHex?: string | null,
      creatorId?: string | null,
      createdAt: string,
      updatedAt: string,
      lastSyncedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDefaultLayoutQueryVariables = {
};

export type GetDefaultLayoutQuery = {
  getDefaultLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberProfileSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfileFilterInput | null,
  id?: string | null,
};

export type OnCreateMemberProfileSubscription = {
  onCreateMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberProfileSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfileFilterInput | null,
  id?: string | null,
};

export type OnUpdateMemberProfileSubscription = {
  onUpdateMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberProfileSubscriptionVariables = {
  filter?: ModelSubscriptionMemberProfileFilterInput | null,
  id?: string | null,
};

export type OnDeleteMemberProfileSubscription = {
  onDeleteMemberProfile?:  {
    __typename: "MemberProfile",
    id: string,
    email: string,
    displayName: string,
    avatarS3Key?: string | null,
    roleId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    lastLoginAt?: string | null,
    isActive: boolean,
    cachedPermissions?: Array< string | null > | null,
    permissionsCachedAt?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    articles?:  {
      __typename: "ModelArticleConnection",
      nextToken?: string | null,
    } | null,
    uploadedAttachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnCreateRoleSubscription = {
  onCreateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnUpdateRoleSubscription = {
  onUpdateRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteRoleSubscriptionVariables = {
  filter?: ModelSubscriptionRoleFilterInput | null,
};

export type OnDeleteRoleSubscription = {
  onDeleteRole?:  {
    __typename: "Role",
    id: string,
    name: string,
    description?: string | null,
    isSystemRole: boolean,
    createdAt: string,
    updatedAt: string,
    permissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberProfileConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionPermissionFilterInput | null,
};

export type OnCreatePermissionSubscription = {
  onCreatePermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionPermissionFilterInput | null,
};

export type OnUpdatePermissionSubscription = {
  onUpdatePermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionPermissionFilterInput | null,
};

export type OnDeletePermissionSubscription = {
  onDeletePermission?:  {
    __typename: "Permission",
    id: string,
    moduleType: string,
    permissionKey: string,
    displayName: string,
    description?: string | null,
    category: string,
    rolePermissions?:  {
      __typename: "ModelRolePermissionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRolePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRolePermissionFilterInput | null,
};

export type OnCreateRolePermissionSubscription = {
  onCreateRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRolePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRolePermissionFilterInput | null,
};

export type OnUpdateRolePermissionSubscription = {
  onUpdateRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRolePermissionSubscriptionVariables = {
  filter?: ModelSubscriptionRolePermissionFilterInput | null,
};

export type OnDeleteRolePermissionSubscription = {
  onDeleteRolePermission?:  {
    __typename: "RolePermission",
    id: string,
    roleId: string,
    permissionId: string,
    role?:  {
      __typename: "Role",
      id: string,
      name: string,
      description?: string | null,
      isSystemRole: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    permission?:  {
      __typename: "Permission",
      id: string,
      moduleType: string,
      permissionKey: string,
      displayName: string,
      description?: string | null,
      category: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnCreatePostTagSubscription = {
  onCreatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type OnUpdatePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnUpdatePostTagSubscription = {
  onUpdatePostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type OnDeletePostTagSubscriptionVariables = {
  filter?: ModelSubscriptionPostTagFilterInput | null,
};

export type OnDeletePostTagSubscription = {
  onDeletePostTag?:  {
    __typename: "PostTag",
    id: string,
    postId: string,
    tagId: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tag?:  {
      __typename: "Tag",
      id: string,
      name: string,
      slug: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    authorId?: string | null,
  } | null,
};

export type OnCreateMailAccountLinkSubscriptionVariables = {
  filter?: ModelSubscriptionMailAccountLinkFilterInput | null,
};

export type OnCreateMailAccountLinkSubscription = {
  onCreateMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMailAccountLinkSubscriptionVariables = {
  filter?: ModelSubscriptionMailAccountLinkFilterInput | null,
};

export type OnUpdateMailAccountLinkSubscription = {
  onUpdateMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMailAccountLinkSubscriptionVariables = {
  filter?: ModelSubscriptionMailAccountLinkFilterInput | null,
};

export type OnDeleteMailAccountLinkSubscription = {
  onDeleteMailAccountLink?:  {
    __typename: "MailAccountLink",
    id: string,
    calendarId: string,
    accountType: string,
    accountEmail: string,
    encryptedAccessToken: string,
    encryptedRefreshToken: string,
    tokenExpiresAt: string,
    displayName: string,
    colorHex: string,
    isActive: boolean,
    lastSyncedAt?: string | null,
    lastSyncStatus?: string | null,
    lastSyncError?: string | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
  uploaderId?: string | null,
};

export type OnCreateAttachmentSubscription = {
  onCreateAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
  uploaderId?: string | null,
};

export type OnUpdateAttachmentSubscription = {
  onUpdateAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
  uploaderId?: string | null,
};

export type OnDeleteAttachmentSubscription = {
  onDeleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    postId?: string | null,
    articleId?: string | null,
    s3Key: string,
    s3Bucket: string,
    fileName: string,
    fileSize: number,
    mimeType: string,
    isEmbedded: boolean,
    embedLocation?: string | null,
    uploaderId: string,
    uploader?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      content: string,
      slug: string,
      authorId: string,
      viewCount: number,
      publishedAt?: string | null,
      isPublished: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateViewCountQueueSubscriptionVariables = {
  filter?: ModelSubscriptionViewCountQueueFilterInput | null,
};

export type OnCreateViewCountQueueSubscription = {
  onCreateViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateViewCountQueueSubscriptionVariables = {
  filter?: ModelSubscriptionViewCountQueueFilterInput | null,
};

export type OnUpdateViewCountQueueSubscription = {
  onUpdateViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteViewCountQueueSubscriptionVariables = {
  filter?: ModelSubscriptionViewCountQueueFilterInput | null,
};

export type OnDeleteViewCountQueueSubscription = {
  onDeleteViewCountQueue?:  {
    __typename: "ViewCountQueue",
    id: string,
    targetType: string,
    targetId: string,
    incrementBy: number,
    processedAt?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    parentMenuId?: string | null,
    title: string,
    slug: string,
    order: number,
    isVisible: boolean,
    moduleConfigId?: string | null,
    moduleConfig?:  {
      __typename: "ModuleConfig",
      id: string,
      moduleType: string,
      displayName: string,
      moduleSettings: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    layoutId?: string | null,
    layout?:  {
      __typename: "Layout",
      id: string,
      name: string,
      description?: string | null,
      templateId: string,
      isDefault: boolean,
      regionConfigs: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentMenu?:  {
      __typename: "Menu",
      id: string,
      parentMenuId?: string | null,
      title: string,
      slug: string,
      order: number,
      isVisible: boolean,
      moduleConfigId?: string | null,
      layoutId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    childMenus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateModuleConfigSubscriptionVariables = {
  filter?: ModelSubscriptionModuleConfigFilterInput | null,
};

export type OnCreateModuleConfigSubscription = {
  onCreateModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateModuleConfigSubscriptionVariables = {
  filter?: ModelSubscriptionModuleConfigFilterInput | null,
};

export type OnUpdateModuleConfigSubscription = {
  onUpdateModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteModuleConfigSubscriptionVariables = {
  filter?: ModelSubscriptionModuleConfigFilterInput | null,
};

export type OnDeleteModuleConfigSubscription = {
  onDeleteModuleConfig?:  {
    __typename: "ModuleConfig",
    id: string,
    moduleType: string,
    displayName: string,
    moduleSettings: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLayoutSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutFilterInput | null,
};

export type OnCreateLayoutSubscription = {
  onCreateLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLayoutSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutFilterInput | null,
};

export type OnUpdateLayoutSubscription = {
  onUpdateLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLayoutSubscriptionVariables = {
  filter?: ModelSubscriptionLayoutFilterInput | null,
};

export type OnDeleteLayoutSubscription = {
  onDeleteLayout?:  {
    __typename: "Layout",
    id: string,
    name: string,
    description?: string | null,
    templateId: string,
    isDefault: boolean,
    regionConfigs: string,
    menus?:  {
      __typename: "ModelMenuConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  authorId?: string | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  authorId?: string | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
  authorId?: string | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    content: string,
    slug: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    customFieldDefinitions?: string | null,
    defaultSortField?: string | null,
    defaultSortOrder?: string | null,
    postsPerPage: number,
    permissionScope: string,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    boardId: string,
    name: string,
    slug: string,
    description?: string | null,
    order: number,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  authorId?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  authorId?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  authorId?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    boardId: string,
    categoryId?: string | null,
    title: string,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    viewCount: number,
    customFieldValues?: string | null,
    customSort1?: string | null,
    customSort2?: string | null,
    customSort3?: string | null,
    customSort4?: string | null,
    customSort5?: string | null,
    board?:  {
      __typename: "Board",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      customFieldDefinitions?: string | null,
      defaultSortField?: string | null,
      defaultSortOrder?: string | null,
      postsPerPage: number,
      permissionScope: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      boardId: string,
      name: string,
      slug: string,
      description?: string | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    tags?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    publishedAt?: string | null,
    isPublished: boolean,
    isPinned: boolean,
    pinnedStatus: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  filter?: ModelSubscriptionTagFilterInput | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    id: string,
    name: string,
    slug: string,
    posts?:  {
      __typename: "ModelPostTagConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  authorId?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  authorId?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  authorId?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postId: string,
    parentCommentId?: string | null,
    content: string,
    authorId: string,
    author?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    depth: number,
    threadPath: string,
    post?:  {
      __typename: "Post",
      id: string,
      boardId: string,
      categoryId?: string | null,
      title: string,
      content: string,
      authorId: string,
      viewCount: number,
      customFieldValues?: string | null,
      customSort1?: string | null,
      customSort2?: string | null,
      customSort3?: string | null,
      customSort4?: string | null,
      customSort5?: string | null,
      publishedAt?: string | null,
      isPublished: boolean,
      isPinned: boolean,
      pinnedStatus: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parentComment?:  {
      __typename: "Comment",
      id: string,
      postId: string,
      parentCommentId?: string | null,
      content: string,
      authorId: string,
      depth: number,
      threadPath: string,
      createdAt: string,
      updatedAt: string,
      isDeleted: boolean,
    } | null,
    replies?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    isDeleted: boolean,
  } | null,
};

export type OnCreateCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnCreateCalendarSubscription = {
  onCreateCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnUpdateCalendarSubscription = {
  onUpdateCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCalendarSubscriptionVariables = {
  filter?: ModelSubscriptionCalendarFilterInput | null,
};

export type OnDeleteCalendarSubscription = {
  onDeleteCalendar?:  {
    __typename: "Calendar",
    id: string,
    name: string,
    description?: string | null,
    slug: string,
    defaultView: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    mailAccountLinks?:  {
      __typename: "ModelMailAccountLinkConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  creatorId?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  creatorId?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  creatorId?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    calendarId: string,
    title: string,
    description?: string | null,
    location?: string | null,
    startDateTime: string,
    endDateTime: string,
    isAllDay: boolean,
    recurrenceRule?: string | null,
    sourceType: string,
    sourceEventId?: string | null,
    mailAccountLinkId?: string | null,
    colorHex?: string | null,
    creatorId?: string | null,
    creator?:  {
      __typename: "MemberProfile",
      id: string,
      email: string,
      displayName: string,
      avatarS3Key?: string | null,
      roleId: string,
      createdAt: string,
      lastLoginAt?: string | null,
      isActive: boolean,
      cachedPermissions?: Array< string | null > | null,
      permissionsCachedAt?: string | null,
      updatedAt: string,
    } | null,
    calendar?:  {
      __typename: "Calendar",
      id: string,
      name: string,
      description?: string | null,
      slug: string,
      defaultView: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    mailAccountLink?:  {
      __typename: "MailAccountLink",
      id: string,
      calendarId: string,
      accountType: string,
      accountEmail: string,
      encryptedAccessToken: string,
      encryptedRefreshToken: string,
      tokenExpiresAt: string,
      displayName: string,
      colorHex: string,
      isActive: boolean,
      lastSyncedAt?: string | null,
      lastSyncStatus?: string | null,
      lastSyncError?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    lastSyncedAt?: string | null,
  } | null,
};
