import React from "react";
import "./CurrentMonth.scss";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const CurrentMonth = ({ month, year, onNextMonth, onPreviousMonth }) => {
  return (
    <div className="current-month">
      <div className="current-month__icon" onClick={onPreviousMonth}>
        <AiFillLeftCircle />
      </div>
      <div className="current-month__month">
        {month} {year}
      </div>
      <div className="current-month__icon" onClick={onNextMonth}>
        <AiFillRightCircle />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    month: state.month.currentDate.getFullMonth(),
    year: state.month.currentDate.getYear(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextMonth: () => dispatch(actions.nextMonth()),
    onPreviousMonth: () => dispatch(actions.previousMonth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMonth);
