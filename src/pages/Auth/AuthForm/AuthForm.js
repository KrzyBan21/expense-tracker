import React from "react";
import "./AuthForm.scss";
import { useFormik } from "formik";

import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Field is required";
  }

  if (!values.password) {
    errors.password = "Field is required";
  }

  return errors;
};

const AuthForm = ({
  authType,
  changeType,
  onChangeType,
  onAuth,
  authError,
  loading,
  onGetCategories
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      onAuth(values.email, values.password, authType);
      onGetCategories();
    },
  });

  const invisibleStyle = loading ? " auth-form--invisible" : "";

  return (
    <form
      className={"auth-form" + invisibleStyle}
      onSubmit={formik.handleSubmit}
    >
      {authError ? (
        <h3 className="auth-form__error-message">Error: {authError}</h3>
      ) : null}
      <Input
        inpFor="email"
        type="email"
        change={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        blur={formik.handleBlur}
        touched={formik.touched.email}
      >
        Email
      </Input>
      <Input
        inpFor="password"
        type="password"
        change={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        blur={formik.handleBlur}
        touched={formik.touched.password}
      >
        Password
      </Input>
      <div className="button-wrapper">
        <Button type="submit">{authType}</Button>
      </div>
      <p onClick={onChangeType} className="auth-form__change-method">
        Change to {changeType}
      </p>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, signIn) =>
      dispatch(actions.auth(email, password, signIn)),
    onGetCategories: () => dispatch(actions.getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
