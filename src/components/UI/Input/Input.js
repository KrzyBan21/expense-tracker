import React from "react";
import "./Input.scss";

const Input = ({
  inpFor,
  type,
  children,
  change,
  value,
  error,
  blur,
  touched,
}) => {
  return (
    <div className="input-component">
      <label className="input-component__label" htmlFor={inpFor}>
        {children}
      </label>
      <input
        className="input-component__input"
        type={type}
        id={inpFor}
        onChange={change}
        value={value}
        onBlur={blur}
      ></input>
      {touched && error ? (
        <p className="input-component__error">{error}</p>
      ) : null}
    </div>
  );
};

export default Input;
