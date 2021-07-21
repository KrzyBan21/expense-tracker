import React from "react";
import "./CurrentMonth.scss";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const CurrentMonth = ({
  month,
  year,
  day,
  aggregation,
  onNextMonth,
  onPreviousMonth,
  onModalOpen,
}) => {
  let displayDate;

  switch (aggregation) {
    case "day":
      displayDate = `${day} ${month} ${year}`;
      break;
    case "month":
      displayDate = `${month} ${year}`;
      break;
    case "year":
      displayDate = `${year}`;
      break;
    default:
      displayDate = `${month} ${year}`;
      break;
  }

  return (
    <div className="current-month">
      <div
        className="current-month__icon"
        onClick={() => onPreviousMonth(aggregation)}
      >
        <AiFillLeftCircle />
      </div>
      <div className="current-month__month" onClick={onModalOpen}>
        <p>{displayDate}</p>
      </div>
      <div
        className="current-month__icon"
        onClick={() => onNextMonth(aggregation)}
      >
        <AiFillRightCircle />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    month: state.month.currentFullMonth,
    year: state.month.currentYear,
    day: state.month.currentDayStr,
    aggregation: state.month.dataAggregation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextMonth: (aggregation) => dispatch(actions.nextMonth(aggregation)),
    onPreviousMonth: (aggregation) =>
      dispatch(actions.previousMonth(aggregation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMonth);
