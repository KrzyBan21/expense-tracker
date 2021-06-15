import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";

const initialState = {
  incomes: [],
  expenses: [],
  error: null,
  loading: false,
};

const getCategoriesStart = (state) => {
  const newState = {
    error: null,
    loading: true,
  };

  return copy(state, newState);
};

const getCategoriesSuccess = (state, action) => {
  const newState = {
    incomes: action.incomes,
    expenses: action.expenses,
    loading: false,
  };

  return copy(state, newState);
};

const getCategoriesFail = (state, action) => {
  const newState = {
    error: action.error,
    loading: false,
  };

  return copy(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_START:
      return getCategoriesStart(state);
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return getCategoriesSuccess(state, action);
    case actionTypes.GET_CATEGORIES_FAIL:
      return getCategoriesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
