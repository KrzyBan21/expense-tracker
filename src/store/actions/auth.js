import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (email, password, signIn) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());

      const authData = {
        email,
        password,
        returnSecureToken: true,
      };

      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzRGkyljD5wZexUwBvSbEaG1SPVVCNP0o";
      if (signIn === "Log In") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzRGkyljD5wZexUwBvSbEaG1SPVVCNP0o";
      }

      const response = await axios.post(url, authData);
      const { idToken, localId } = response.data;

      dispatch(authSuccess(idToken, localId));
    } catch (error) {
      dispatch(authFail(error.response.data.error.message));
    }
  };
};
