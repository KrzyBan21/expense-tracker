import React, { useState } from "react";
import "./Main.scss";

import Container from "../../components/Container/Container";
import CurrentMonth from "../../components/CurrentMonth/CurrentMonth";
// import NavBar from "../../components/UI/NavBar/NavBar";
import HamburgerIcon from "../../components/UI/HamburgerIcon/HamburgerIcon";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="main-content">
      <MobileMenu openMenu={openMenu} onMenuOpen={onMenuOpen} />
      <div className="main-content__menu">
        <HamburgerIcon onMenuOpen={onMenuOpen} />
      </div>
      <CurrentMonth />
      <div className="main-content__form">
        <Container>Wydatki</Container>
      </div>
    </div>
  );
};

export default Main;
