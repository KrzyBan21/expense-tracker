import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";

const initialState = {
  error: null,
  deleteError: null,
  loading: false,
  deleteLoading: false,
  budget: [],
  budgetType: "expense",
};

const deleteDataStart = (state) => {
  const newState = {
    deleteError: null,
    deleteLoading: true,
  };

  return copy(state, newState);
};

const deleteDataSuccess = (state, action) => {
  const newBudget = [...state.budget].filter((el) => el.id !== action.id);

  const newState = {
    loading: false,
    budget: newBudget,
  };

  return copy(state, newState);
};

const deleteDataFail = (state, action) => {
  const newState = {
    deleteError: action.error,
    deleteLoading: false,
  };

  return copy(state, newState);
};

const changeType = (state, action) => {
  const newState = {
    budgetType: action.budgetType,
  };

  return copy(state, newState);
};

const postDataStart = (state) => {
  const newState = {
    error: null,
    loading: true,
  };

  return copy(state, newState);
};

const postDataSuccess = (state, action) => {
  const year = +action.data.date.substr(0, 4);
  const month = action.data.date.substr(5, 2);
  const { currentMonth, currentYear } = action;

  let newBudget;
  let newState;

  newState = {
    loading: false,
  };

  if (currentMonth === month && currentYear === year) {
    newBudget = state.budget.concat(action.data);

    newState = {
      loading: false,
      budget: newBudget,
    };
  }

  return copy(state, newState);
};

const postDataFail = (state, action) => {
  const newState = {
    error: action.error,
    loading: false,
  };

  return copy(state, newState);
};

const getBudgetDataStart = (state) => {
  const newState = {
    error: null,
    loading: true,
    budget: [],
  };

  return copy(state, newState);
};

const getBudgetDataSuccess = (state, action) => {
  const arrayOfArrays = Object.values(action.budget).map((el) =>
    Object.values(el)
  );

  const arrayOfArraysKeys = Object.values(action.budget).map((el) =>
    Object.keys(el)
  );

  const arrOfBudget = arrayOfArrays.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
  }, []);

  const arrOfKeys = arrayOfArraysKeys.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
  }, []);

  arrOfBudget.forEach((el, indx) => (el.id = arrOfKeys[indx]));

  const newBudget = copy(state.budget, arrOfBudget);

  const newState = {
    loading: false,
    budget: newBudget,
  };

  return copy(state, newState);
};

const getBudgetDataFail = (state, action) => {
  const newState = {
    error: action.error,
    loading: false,
    budget: [],
  };

  return copy(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_START:
      return postDataStart(state);
    case actionTypes.POST_DATA_SUCCESS:
      return postDataSuccess(state, action);
    case actionTypes.POST_DATA_FAIL:
      return postDataFail(state, action);
    case actionTypes.GET_BUDGET_DATA_START:
      return getBudgetDataStart(state, action);
    case actionTypes.GET_BUDGET_DATA_SUCCESS:
      return getBudgetDataSuccess(state, action);
    case actionTypes.GET_BUDGET_DATA_FAIL:
      return getBudgetDataFail(state, action);
    case actionTypes.CHANGE_TYPE:
      return changeType(state, action);

    case actionTypes.DELETE_DATA_START:
      return deleteDataStart(state, action);
    case actionTypes.DELETE_DATA_SUCCESS:
      return deleteDataSuccess(state, action);
    case actionTypes.DELETE_DATA_FAIL:
      return deleteDataFail(state, action);
    default:
      return state;
  }
};

export default reducer;
