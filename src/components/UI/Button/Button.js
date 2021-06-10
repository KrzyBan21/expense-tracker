import React from "react";
import "./Button.scss";

const Button = ({ children, type }) => {
  return (
    <button type={type} className="styled-button">
      {children}
    </button>
  );
};

export default Button;
