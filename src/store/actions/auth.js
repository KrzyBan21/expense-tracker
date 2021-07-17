import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as actions from "./index";

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
      if (signIn === "Sign In") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzRGkyljD5wZexUwBvSbEaG1SPVVCNP0o";
      }

      const response = await axios.post(url, authData);
      const { idToken, localId, expiresIn } = response.data;

      // console.log(response);

      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      localStorage.setItem("token", idToken);
      localStorage.setItem("userId", localId);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch(authSuccess(idToken, localId));
    } catch (error) {
      dispatch(authFail(error.response.data.error.message));
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (new Date(expirationDate) <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(actions.getCategories());
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
