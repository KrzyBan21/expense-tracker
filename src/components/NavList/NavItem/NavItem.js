import React from "react";
import "./NavItem.scss";
import { NavLink } from "react-router-dom";

const NavItem = ({ url, children, onFn }) => {
  return (
    <li className="nav-list__item">
      <NavLink to={url} onClick={(...args) => onFn(...args)}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
