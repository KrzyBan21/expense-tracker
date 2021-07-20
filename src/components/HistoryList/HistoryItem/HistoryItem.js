import React from "react";
import "./HistoryItem.scss";

import { RiDeleteBin6Line } from "react-icons/ri";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const HistoryItem = ({ type, category, amount, date, id, onDeleteData }) => {
  return (
    <li className="history-item">
      <div
        className="history-item__delete"
        onClick={() => onDeleteData(id, date)}
      >
        <RiDeleteBin6Line />
      </div>
      {/* <p className="history-item__type">{type}</p> */}
      <p className="history-item__category">{category}</p>
      <p className="history-item__amount">{amount}</p>
      <p className="history-item__date">{date}</p>
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
