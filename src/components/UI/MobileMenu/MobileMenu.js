import React, { Fragment } from "react";
import "./MobileMenu.scss";

import Backdrop from "../Backdrop/Backdrop";
import NavList from "../../NavList/NavList";

const MobileMenu = ({ openMenu, onMenuOpen }) => {
  const styleName = openMenu ? " mobile-menu--animation" : "";

  return (
    <Fragment>
      <div className={"mobile-menu" + styleName}>
        <NavList onMenuOpen={onMenuOpen}/>
      </div>
      {openMenu && <Backdrop onMenuOpen={onMenuOpen} />}
    </Fragment>
  );
};

export default MobileMenu;
