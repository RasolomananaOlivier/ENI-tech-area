import axios from "axios";

import {
  usersData as _usersData,
  profileData as _profileData,
  userTags as _userTags,
} from "./urls";

export const usersData = () => {
  return axios.get(_usersData);
};

export const profileData = (id) => {
  return axios.get(_profileData.replace("{id}", id));
};

export const userTags = (userId) => {
  return axios.get(_userTags.replace("{id}", userId));
};
