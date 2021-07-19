import React from "react";
import "./TypeSwitcher.scss";

import { connect } from "react-redux";
import * as action from "../../store/actions/index";

const TypeSwitcher = ({ budgetType, onChangeType }) => {
  const activeExpenseClass =
    budgetType === "expense" ? " type-switcher--active" : "";
  const activeIncomeClass =
    budgetType === "income" ? " type-switcher--active" : "";

  return (
    <div className="type-switcher">
      <p
        className={"type-switcher__expenses" + activeExpenseClass}
        onClick={() => onChangeType("expense")}
      >
        Expenses
      </p>
      <p
        className={"type-switcher__incomes" + activeIncomeClass}
        onClick={() => onChangeType("income")}
      >
        Incomes
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    budgetType: state.main.budgetType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeType: (type) => dispatch(action.changeType(type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeSwitcher);
