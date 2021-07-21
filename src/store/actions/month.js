import * as actionTypes from "./actionTypes";

export const nextMonth = (aggregation) => {
  return {
    type: actionTypes.NEXT_MONTH,
    aggregation,
  };
};

export const previousMonth = (aggregation) => {
  return {
    type: actionTypes.PREVIOUS_MONTH,
    aggregation,
  };
};

export const changeDataAggregation = (dataAggregation) => {
  return {
    type: actionTypes.CHANGE_DATA_AGGREGATION,
    dataAggregation, //day, month, year; default month
  };
};
