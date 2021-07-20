import * as actionTypes from "./actionTypes";

export const nextMonth = () => {
  return {
    type: actionTypes.NEXT_MONTH,
  };
};

export const previousMonth = () => {
  return {
    type: actionTypes.PREVIOUS_MONTH,
  };
};

export const changeDataAggregation = (dataAggregation) => {
  return {
    type: actionTypes.CHANGE_DATA_AGGREGATION,
    dataAggregation, //day, month, year; default month
  };
};
