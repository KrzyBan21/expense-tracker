import React from "react";
import "./HistoryItem.scss";

import { RiDeleteBin6Line } from "react-icons/ri";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const HistoryItem = ({
  category,
  amount,
  date,
  id,
  onDeleteData,
  isHeader,
}) => {
  const getHeaderClassModifier = (className) => {
    return isHeader ? " " + className + "--header" : " ";
  };

  return (
    <li className="history-item">
      <div
        className={
          "history-item__delete" +
          getHeaderClassModifier("history-item__delete")
        }
        onClick={!isHeader ? () => onDeleteData(id, date) : null}
      >
        <RiDeleteBin6Line />
      </div>
      <p
        className={
          "history-item__category" +
          getHeaderClassModifier("history-item__category")
        }
      >
        {category}
      </p>
      <p
        className={
          "history-item__amount" +
          getHeaderClassModifier("history-item__amount")
        }
      >
        {amount}
      </p>
      <p
        className={
          "history-item__date" + getHeaderClassModifier("history-item__date")
        }
      >
        {date}
      </p>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteData: (id, budgdetDate) =>
      dispatch(actions.deleteData(id, budgdetDate)),
  };
};

export default connect(null, mapDispatchToProps)(HistoryItem);
