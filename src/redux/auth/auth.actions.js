import { loadUserData, registerUser, loginUser } from "../../api/authApi";
import setAuthToken from "./auth.utils";
import { setAlert } from "../alert/alert.actions";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./auth.types";
import { userTags } from "../../api/usersApi";
import { GET_USERS_TAGS } from "../users/users.types";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await loadUserData();

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const res = await registerUser(username, password);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data,
      });

      dispatch(setAlert(res.data.message, "success"));

      dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.message, "danger"));

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await loginUser(email, password);

      const userId = res.data.data.user.id;
      const token = res.data.data.tokens.accessToken;
      setAuthToken(token);

      const tagsResponse = await userTags(userId);

      const loginPayload = {
        ...res.data.data.user,
        tags: tagsResponse.data.data.tags,
      };

      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginPayload,
      });

      // dispatch(setAlert(res.data.message, 'success'));

      // dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert(err.response.data.message, "danger"));

      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch(setAlert("User has logged out", "success"));
  localStorage.removeItem("token");

  dispatch({ type: LOGOUT });
};
