import React from "react";
import "./HamburgerIcon.scss";

const HamburgerIcon = ({ onMenuOpen }) => {
  return <div className="hamburger-icon" onClick={onMenuOpen}></div>;
};

export default HamburgerIcon;
