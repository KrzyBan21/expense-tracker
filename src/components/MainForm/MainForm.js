import React from "react";
import "./MainForm.scss";

import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const MainForm = ({
  types,
  choosenType,
  incomes,
  expenses,
  onChangeCategory,
}) => {
  const categories =
    choosenType === "income"
      ? incomes.map((income) => income.type)
      : expenses.map((expense) => expense.type);

  return (
    <form className="main-form">
      <Select
        inpFor="type"
        options={types}
        def={choosenType}
        changeHandler={onChangeCategory}
      >
        Type
      </Select>
      <Select inpFor="category" options={categories}>
        Category
      </Select>
      <Input inpFor="amount" type="number">
        Amount
      </Input>
      <Input inpFor="date-picker" type="date">
        Date
      </Input>
      <div className="button-wrapper">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.categories.types,
    choosenType: state.categories.choosenType,
    incomes: state.categories.incomes,
    expenses: state.categories.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCategory: () => dispatch(actions.changeCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
