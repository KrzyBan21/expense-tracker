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
      createdObj.id = response.data.name;
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

const getBudgetDataSuccess = (budget, aggregation) => {
  return {
    type: actionTypes.GET_BUDGET_DATA_SUCCESS,
    budget,
    aggregation,
  };
};

const getBudgetDataFail = (error) => {
  return {
    type: actionTypes.GET_BUDGET_DATA_FAIL,
    error,
  };
};

export const getBudgetData = (year, month, day, aggregation) => {
  return async (dispatch) => {
    try {
      dispatch(getBudgetDataStart());

      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      let url;

      switch (aggregation) {
        case "day":
          url = `budget/${userId}/${year}/${month}/${day}.json`;
          break;
        case "month":
          url = `budget/${userId}/${year}/${month}.json`;
          break;
        case "year":
          url = `budget/${userId}/${year}.json`;
          break;
        default:
          url = `budget/${userId}/${year}/${month}.json`;
          break;
      }

      const budget = await firebase.get(url, {
        params: {
          auth: token,
        },
      });
      console.log(budget.data);
      dispatch(getBudgetDataSuccess(budget.data, aggregation));
    } catch (e) {
      dispatch(getBudgetDataFail(e));
    }
  };
};

export const changeType = (budgetType) => {
  return {
    type: actionTypes.CHANGE_TYPE,
    budgetType,
  };
};

const deleteDataStart = () => {
  return {
    type: actionTypes.DELETE_DATA_START,
  };
};

const deleteDataSuccess = (id) => {
  return {
    type: actionTypes.DELETE_DATA_SUCCESS,
    id,
  };
};

const deleteDataFail = (error) => {
  return {
    type: actionTypes.DELETE_DATA_FAIL,
    error,
  };
};

export const deleteData = (id, budgetDate) => {
  return async (dispatch) => {
    try {
      dispatch(deleteDataStart());

      const { year, month, day } = stringToDateObj(budgetDate);

      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const url = `budget/${userId}/${year}/${month}/${day}/${id}.json`;

      await firebase.delete(url, {
        params: {
          auth: token,
        },
      });

      dispatch(deleteDataSuccess(id));

      // console.log(response);
    } catch (e) {
      dispatch(deleteDataFail(e));
    }
  };
};
