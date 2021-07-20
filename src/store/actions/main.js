import * as actionTypes from "./actionTypes";
import firebase from "../../apis/firebase";
import stringToDateObj from "../../utils/stringToDateObj";

const postDataStart = () => {
  return {
    type: actionTypes.POST_DATA_START,
  };
};

const postDataSuccess = (data, currentMonth, currentYear) => {
  return {
    type: actionTypes.POST_DATA_SUCCESS,
    data,
    currentMonth,
    currentYear,
  };
};

const postDataFail = (error) => {
  return {
    type: actionTypes.POST_DATA_FAIL,
    error,
  };
};

export const postData = (
  createdObj,
  incomes,
  expenses,
  currentMonth,
  currentYear
) => {
  return async (dispatch) => {
    try {
      dispatch(postDataStart());
      const { year, month, day } = stringToDateObj(createdObj.date);
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      let colorObj;

      if (createdObj.type === "expense") {
        colorObj = expenses.find((el) => el.type === createdObj.category);
      } else if (createdObj.type === "income") {
        colorObj = incomes.find((el) => el.type === createdObj.category);
      }
      createdObj.color = colorObj.color;

      const url = `budget/${userId}/${year}/${month}/${day}/.json`;

      const response = await firebase.post(url, createdObj, {
        params: {
          auth: token,
        },
      });
      createdObj.id = response.data.name
      dispatch(postDataSuccess(createdObj, currentMonth, currentYear));
    } catch (e) {
      dispatch(postDataFail(e));
    }
  };
};

const getBudgetDataStart = () => {
  return {
    type: actionTypes.GET_BUDGET_DATA_START,
  };
};

const getBudgetDataSuccess = (budget) => {
  return {
    type: actionTypes.GET_BUDGET_DATA_SUCCESS,
    budget,
  };
};

const getBudgetDataFail = (error) => {
  return {
    type: actionTypes.GET_BUDGET_DATA_FAIL,
    error,
  };
};

export const getBudgetData = (year, month) => {
  return async (dispatch) => {
    try {
      dispatch(getBudgetDataStart());

      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const url = `budget/${userId}/${year}/${month}/.json`;

      const budget = await firebase.get(url, {
        params: {
          auth: token,
        },
      });
      console.log(budget.data);
      dispatch(getBudgetDataSuccess(budget.data));
    } catch (e) {
      dispatch(getBudgetDataFail(e));
    }
  };
};


export const changeType = (budgetType) => {
  return {
    type: actionTypes.CHANGE_TYPE,
    budgetType
  }
}