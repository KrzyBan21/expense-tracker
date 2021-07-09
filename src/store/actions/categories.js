import * as actionTypes from "./actionTypes";
import firebase from "../../apis/firebase";

const getCategoriesStart = () => {
  return {
    type: actionTypes.GET_CATEGORIES_START,
  };
};

const getCategoriesSuccess = (incomes, expenses) => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    incomes,
    expenses,
  };
};

const getCategoriesFail = (error) => {
  return {
    type: actionTypes.GET_CATEGORIES_FAIL,
    error,
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(getCategoriesStart());

      const expenseCategories = await firebase.get("/expenseCategories.json");
      const incomeCategories = await firebase.get("/incomeCategories.json");

      // console.log(expenseCategories.data);
      // console.log(incomeCategories.data);

      dispatch(
        getCategoriesSuccess(incomeCategories.data, expenseCategories.data)
      );
    } catch (error) {
      dispatch(getCategoriesFail(error));
    }
  };
};

export const changeCategory = () => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
  };
};

export const resetCategory = () => {
  return {
    type: actionTypes.RESET_CATEGORY,
  };
};
