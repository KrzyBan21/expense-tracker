import * as actionTypes from "../actions/actionTypes";
import { copy } from "../utils";
import CurrentDate from "../../utils/CurrentDate";

const initialState = {
  currentDate: new CurrentDate(),
};

const nextMonth = (state, action) => {
  state.currentDate.nextMonth();
  const newDate = new CurrentDate(
    state.currentDate.getMonth(),
    state.currentDate.getYear()
  );

  const newState = { currentDate: newDate };

  return copy(state, newState);
};

const previousMonth = (state) => {
  state.currentDate.previousMonth();
  const newDate = new CurrentDate(
    state.currentDate.getMonth(),
    state.currentDate.getYear()
  );

  const newState = { currentDate: newDate };

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
