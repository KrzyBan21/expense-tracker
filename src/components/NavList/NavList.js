import React from "react";
import "./NavList.scss";

import NavItem from "./NavItem/NavItem";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { useHistory } from "react-router-dom";

const NavList = ({ onLogout }) => {
  const history = useHistory();

  const onLog = () => {
    history.replace("/auth");
    onLogout();
  };

  return (
    <nav className="nav-list">
      <ul className="nav-list__list">
        <NavItem url="/auth" onFn={onLog}>
          Logout
        </NavItem>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavList);
