import React from "react";
import "./Input.scss";

const Input = ({ inpFor, type, children }) => {
  return (
    <div className="input-component">
      <label className="input-component__label" htmlFor={inpFor}>
        {children}
      </label>
      <input className="input-component__input" type={type} id={inpFor}></input>
    </div>
  );
};

export default Input;
