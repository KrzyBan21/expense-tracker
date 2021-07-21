import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";

const addLeadingZero = (nr, type) => {
  const num = type === "month" ? nr + 1 : nr;

  return num.toString().length === 1 ? "0" + num.toString() : num.toString();
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialState = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  currentFullMonth: months[new Date().getMonth()],
  currentMonthStr: addLeadingZero(new Date().getMonth(), "month"),
  currentDay: new Date().getDate(),
  currentDayStr: addLeadingZero(new Date().getDate()),
  dataAggregation: "month",
};

const changeDataAggregation = (state, action) => {
  const newState = {
    dataAggregation: action.dataAggregation,
  };

  return copy(state, newState);
};

const nextDate = (state, action) => {
  let currentMonth,
    currentYear,
    currentFullMonth,
    currentMonthStr,
    currentDay,
    currentDayStr;

  currentYear = state.currentYear;
  currentDay = state.currentDay;
  currentMonth = state.currentMonth;

  const numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  switch (action.aggregation) {
    case "day":
      if (currentDay === numberOfDays) {
        currentDay = 1;
        if (currentMonth === 11) {
          currentMonth = 0;
          currentYear = currentYear + 1;
        } else {
          currentMonth = currentMonth + 1;
        }
      } else {
        currentDay = currentDay + 1;
      }
      break;
    case "month":
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear = currentYear + 1;
      } else {
        currentMonth = currentMonth + 1;
      }
      break;
    case "year":
      currentYear = currentYear + 1;
      break;
    default:
      break;
  }

  currentFullMonth = months[currentMonth];
  currentMonthStr = addLeadingZero(currentMonth, "month");
  currentDayStr = addLeadingZero(currentDay);

  const newState = {
    currentMonth,
    currentYear,
    currentFullMonth,
    currentMonthStr,
    currentDay,
    currentDayStr,
  };

  return copy(state, newState);
};

const previousDate = (state, action) => {
  let currentMonth,
    currentYear,
    currentFullMonth,
    currentMonthStr,
    currentDay,
    currentDayStr;

  currentYear = state.currentYear;
  currentDay = state.currentDay;
  currentMonth = state.currentMonth;

  const numberOfDays = 1;

  switch (action.aggregation) {
    case "day":
      if (currentDay === numberOfDays) {
        currentDay = new Date(currentYear, currentMonth, 0).getDate();
        if (currentMonth === 0) {
          currentMonth = 11;
          currentYear = currentYear - 1;
        } else {
          currentMonth = currentMonth - 1;
        }
      } else {
        currentDay = currentDay - 1;
      }
      break;
    case "month":
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear = currentYear - 1;
      } else {
        currentMonth = currentMonth - 1;
      }
      break;
    case "year":
      currentYear = currentYear - 1;
      break;
    default:
      break;
  }

  currentFullMonth = months[currentMonth];
  currentMonthStr = addLeadingZero(currentMonth, "month");
  currentDayStr = addLeadingZero(currentDay);

  const newState = {
    currentMonth,
    currentYear,
    currentFullMonth,
    currentMonthStr,
    currentDay,
    currentDayStr,
  };

  return copy(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_MONTH:
      return nextDate(state, action);
    case actionTypes.PREVIOUS_MONTH:
      return previousDate(state, action);
    case actionTypes.CHANGE_DATA_AGGREGATION:
      return changeDataAggregation(state, action);
    default:
      return state;
  }
};

export default reducer;
