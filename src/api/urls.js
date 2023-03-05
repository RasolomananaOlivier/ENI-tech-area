import config from "../config";

// Users
export const usersData = config.BASE_URL + "/api/users";
export const profileData = config.BASE_URL + "/api/v1/users/{id}";

// Auth
export const loadUserData = config.BASE_URL + "/api/auth";
export const registerUser = config.BASE_URL + "/api/users";
export const loginUser = config.BASE_URL + "/api/v1/auth/login/local";

// Posts
export const allPostsData = config.BASE_URL + "/api/posts";
export const allPostsDataByUserTags =
  config.BASE_URL + "/api/v1/questions/suggestions";
export const singlePostData = config.BASE_URL + "/api/posts/{id}";
export const allTagPostsData = config.BASE_URL + "/api/posts/tag/{tagName}";
export const createSinglePost = config.BASE_URL + "/api/v1/questions";
export const deleteSinglePost = config.BASE_URL + "/api/posts/{id}";
export const allAnswers = config.BASE_URL + "/api/v1/questions/{id}/answers";

// Answers
export const allAnswersData = config.BASE_URL + "/api/posts/answers/{id}";
export const allAnswersComment =
  config.BASE_URL +
  "/api/v1/questions/{questionId}/answers/{answerId}/comments";

export const createSingleAnswer =
  config.BASE_URL + "/api/v1/questions/{postId}/answers";
export const deleteSingleAnswer =
  config.BASE_URL + "/api/posts/answers/{AnswerId}";

// Comments
export const allCommentsData = config.BASE_URL + "/api/posts/comments/{id}";
export const createSingleComment =
  config.BASE_URL + "/api/posts/comments/{postId}";
export const deleteSingleComment =
  config.BASE_URL + "/api/posts/comments/{CommentId}";

// Tags
export const allTagsData = config.BASE_URL + "/api/tags";
export const singleTagData = config.BASE_URL + "/api/tags/{tagName}";
export const userTags = config.BASE_URL + "/api/v1/users/{id}/usertags";

//changPass
export const changePass = config.BASE_URL + "/api/changePass";
