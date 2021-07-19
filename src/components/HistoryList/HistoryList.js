import React from "react";
import "./HistoryList.scss";

import HistoryItem from "./HistoryItem/HistoryItem";

const HistoryList = ({ budget }) => {
  const sortedList = budget.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return -1;
    }
    if (new Date(a.date) > new Date(b.date)) {
      return 1;
    }
    return 0;
  }).reverse();

  const historyItems = sortedList.map((item, index) => (
    <HistoryItem
      key={index}
      type={item.type}
      category={item.category}
      amount={item.amount}
      date={item.date}
    />
  ));

  return (
    <ul className="history-list">
      {historyItems}
      {/* <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem /> */}
    </ul>
  );
};

export default HistoryList;
