import React from "react";
import "./HistoryItem.scss";

import { RiDeleteBin6Line } from "react-icons/ri";

const HistoryItem = ({ type, category, amount, date }) => {
  return (
    <li className="history-item">
      <div className="history-item__delete">
        <RiDeleteBin6Line />
      </div>
      {/* <p className="history-item__type">{type}</p> */}
      <p className="history-item__category">{category}</p>
      <p className="history-item__amount">{amount}</p>
      <p className="history-item__date">{date}</p>
    </li>
  );
};

export default HistoryItem;
