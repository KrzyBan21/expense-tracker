import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  const newState = {
    error: null,
    loading: true,
  };

  return copy(state, newState);
};

const authSuccess = (state, action) => {
  const newState = {
    token: action.token,
    userId: action.userId,
    error: null,
    loading: false,
  };

  return copy(state, newState);
};

const authFail = (state, action) => {
  const newState = {
    error: action.error,
    loading: false,
  };

  return copy(state, newState);
};

const authLogout = (state) => {
  const newState = {
    token: null,
    userId: null,
  };

  return copy(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
