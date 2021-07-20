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
      <div
        className={"type-switcher__expenses" + activeExpenseClass}
        onClick={() => onChangeType("expense")}
      >
        <p className="type-switcher__text">Expenses</p>
      </div>

      <div
        className={"type-switcher__incomes" + activeIncomeClass}
        onClick={() => onChangeType("income")}
      >
        <p className="type-switcher__text">Incomes</p>
      </div>
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
