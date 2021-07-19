import React from "react";
import "./Container.scss";

const Container = ({ children, title, showTitle, scroll }) => {
  return (
    <div className="container" style={scroll ? { overflow: "scroll" } : null}>
      {showTitle && <h3 className="container__title">{title}</h3>}
      <div className="container__data">{children}</div>
    </div>
  );
};

export default Container;
