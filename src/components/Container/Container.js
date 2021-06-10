import React from "react";
import "./Container.scss";

const Container = ({ children, title }) => {
  return (
    <div className="container">
      <h3 className="container__title">{title}</h3>
      <div className="container__data">{children}</div>
    </div>
  );
};

export default Container;