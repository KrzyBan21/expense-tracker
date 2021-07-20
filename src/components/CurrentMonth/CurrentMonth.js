import React from "react";
import "./CurrentMonth.scss";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const CurrentMonth = ({ month, year, onNextMonth, onPreviousMonth, onModalOpen }) => {
  return (
    <div className="current-month">
      <div className="current-month__icon" onClick={onPreviousMonth}>
        <AiFillLeftCircle />
      </div>
      <div className="current-month__month" onClick={onModalOpen}>
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
    month: state.month.currentFullMonth,
    year: state.month.currentYear,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNextMonth: () => dispatch(actions.nextMonth()),
    onPreviousMonth: () => dispatch(actions.previousMonth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentMonth);
