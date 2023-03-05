import axios from "axios";

import {
  allPostsData as _allPostsData,
  allPostsDataByUserTags as _allTagPostsDataByUserTags,
  singlePostData as _singlePostData,
  allTagPostsData as _allTagPostsData,
  createSinglePost as _createSinglePost,
  deleteSinglePost as _deleteSinglePost,
  allAnswers as _allAnswers,
} from "./urls";

export const allPostsData = () => {
  return axios.get(_allPostsData);
};

export const allPostAnswers = (postId) => {
  return axios.get(_allAnswers.replace("{id}", postId));
};

export const allPostsDataByUserTags = () => {
  return axios.get(_allTagPostsDataByUserTags);
};

export const singlePostData = (id) => {
  return axios.get(_singlePostData.replace("{id}", id));
};

export const allTagPostsData = (tagName) => {
  return axios.get(_allTagPostsData.replace("{tagName}", tagName));
};

export const createSinglePost = (formData) => {
  return axios.post(_createSinglePost, formData);
};

export const deleteSinglePost = (id) => {
  return axios.delete(_deleteSinglePost.replace("{id}", id));
};
