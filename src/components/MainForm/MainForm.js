import React from "react";
import "./MainForm.scss";
import { useFormik } from "formik";

import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const validate = (values) => {
  const errors = {};

  if (!values.type) {
    errors.type = "Field is required";
  }

  if (!values.category) {
    errors.category = "Field is required";
  }

  if (!values.amount) {
    errors.amount = "Field is required";
  }

  if (!values.date) {
    errors.date = "Field is required";
  }

  return errors;
};

const MainForm = ({
  types,
  choosenType,
  incomes,
  expenses,
  onChangeCategory,
}) => {
  const formik = useFormik({
    initialValues: {
      type: "expense",
      category: "",
      amount: 0,
      date: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm({
        type: "expense",
        category: "",
        amount: 0,
        date: "",
      });
    },
  });

  const categories =
    choosenType === "income"
      ? incomes.map((income) => income.type)
      : expenses.map((expense) => expense.type);

  const changeCategoryHandler = (e) => {
    onChangeCategory();
    formik.handleChange(e);
  };

  return (
    <form className="main-form" onSubmit={formik.handleSubmit}>
      <Select
        inpFor="type"
        options={types}
        def={choosenType}
        changeHandler={changeCategoryHandler}
        error={formik.errors.type}
        blur={formik.handleBlur}
        touched={formik.touched.type}
      >
        Type
      </Select>
      <Select
        inpFor="category"
        options={categories}
        changeHandler={formik.handleChange}
        value={formik.values.category}
        error={formik.errors.category}
        blur={formik.handleBlur}
        touched={formik.touched.category}
      >
        Category
      </Select>
      <Input
        inpFor="amount"
        type="number"
        change={formik.handleChange}
        value={formik.values.amount}
        error={formik.errors.amount}
        blur={formik.handleBlur}
        touched={formik.touched.amount}
      >
        Amount
      </Input>
      <Input
        inpFor="date"
        type="date"
        change={formik.handleChange}
        value={formik.values.date}
        error={formik.errors.date}
        blur={formik.handleBlur}
        touched={formik.touched.date}
      >
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
