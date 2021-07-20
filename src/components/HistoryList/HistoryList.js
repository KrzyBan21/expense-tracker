import React from "react";
import "./HistoryList.scss";

import HistoryItem from "./HistoryItem/HistoryItem";

import { connect } from "react-redux";

const HistoryList = ({ budget, budgetType }) => {
  const sortedList = budget
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return -1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        return 1;
      }
      return 0;
    })
    .reverse()
    .filter((item) => item.type === budgetType);

  const historyItems = sortedList.map((item) => (
    <HistoryItem
      key={item.id}
      category={item.category}
      amount={item.amount}
      date={item.date}
      id={item.id}
    />
  ));

  return (
    <ul className="history-list">
      {historyItems.length > 0 ? (
        <HistoryItem
          category="Category"
          amount="Amount"
          date="Date"
          isHeader={true}
        />
      ) : null}
      {historyItems}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    budgetType: state.main.budgetType,
  };
};

export default connect(mapStateToProps)(HistoryList);
