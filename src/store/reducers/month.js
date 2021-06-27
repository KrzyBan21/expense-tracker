import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";

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
};

const nextMonth = (state, action) => {
  let currentMonth, currentYear, currentFullMonth;

  currentYear = state.currentYear;

  if (state.currentMonth === 11) {
    currentMonth = 0;
    currentYear = state.currentYear + 1;
  } else {
    currentMonth = state.currentMonth + 1;
  }

  currentFullMonth = months[currentMonth];

  const newState = {
    currentMonth,
    currentYear,
    currentFullMonth,
  };

  return copy(state, newState);
};

const previousMonth = (state) => {
  let currentMonth, currentYear, currentFullMonth;

  currentYear = state.currentYear;

  if (state.currentMonth === 0) {
    currentMonth = 11;
    currentYear = state.currentYear - 1;
  } else {
    currentMonth = state.currentMonth - 1;
  }

  currentFullMonth = months[currentMonth];

  const newState = {
    currentMonth,
    currentYear,
    currentFullMonth,
  };

  return copy(state, newState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_MONTH:
      return nextMonth(state);
    case actionTypes.PREVIOUS_MONTH:
      return previousMonth(state);
    default:
      return state;
  }
};

export default reducer;
