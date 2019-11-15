// export const LOAD_USERS_ACTION = "loadUsers";

const LOAD_USERS_ACTION = "loadUsers";
const LOAD_POST_BY_USER_ID_ACTION = "loadPostsByUserId";
const LOAD_COMMENT_BY_POST = { action: "loadCommentsByPostId", mutation: "loadCommentsSuccess" };

export default { LOAD_USERS_ACTION, LOAD_POST_BY_USER_ID_ACTION, LOAD_COMMENT_BY_POST };
