import { GET_USERS, GET_USER, USER_ERROR, GET_USERS_TAGS } from "./users.types";
import { usersData, profileData, userTags } from "../../api/usersApi";

// Get users
export const getUsers = () => async (dispatch) => {
  try {
    const res = await usersData();
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get user
export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await profileData(id);

    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get user tag
export const getUserTag = (userId) => async (dispatch) => {
  try {
    const res = await userTags(userId);
    console.log(res);
    // dispatch({
    //   type: GET_USERS_TAGS,
    //   payload: res.data.data,
    // });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
