import React from "react";
import "./AuthForm.scss";

import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";

const AuthForm = ({ authType, changeType, onChangeType }) => {
  return (
    <form className="auth-form">
      <Input inpFor="Email" type="email">
        Email
      </Input>
      <Input inpFor="Password" type="password">
        Password
      </Input>
      <div className="button-wrapper">
        <Button type='submit'>{authType}</Button>
      </div>
      <p onClick={onChangeType} className="auth-form__change-method">
        Change method to {changeType}
      </p>
    </form>
  );
};

export default AuthForm;
