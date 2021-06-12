import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ onMenuOpen }) => {
  return <div className="backdrop" onClick={onMenuOpen}></div>;
};

export default Backdrop;
