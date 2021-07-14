import React, { useState, useEffect } from "react";
import "./Main.scss";

import Container from "../../components/Container/Container";
import CurrentMonth from "../../components/CurrentMonth/CurrentMonth";
import HamburgerIcon from "../../components/UI/HamburgerIcon/HamburgerIcon";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";
import MainForm from "../../components/MainForm/MainForm";
import Chart from "../../components/Chart/Chart";
import NavList from "../../components/NavList/NavList";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Main = ({ currentYear, currentMonth, onGetBudgetData, budget }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const onMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    onGetBudgetData(currentYear, currentMonth);
  }, [currentYear, currentMonth, onGetBudgetData]);

  return (
    <div className="main-content">
      <MobileMenu openMenu={openMenu} onMenuOpen={onMenuOpen} />
      <div className="main-content__menu">
        <div className="main-content__menu--hamburger">
          <HamburgerIcon onMenuOpen={onMenuOpen} />
        </div>
        <div className="main-content__menu--navlist">
          <NavList />
        </div>
      </div>
      <div className="main-content__month">
        <Container>
          <CurrentMonth />
        </Container>
      </div>
      <div className="main-content__form">
        <Container>
          <MainForm />
        </Container>
      </div>
      <div className="main-content__chart main-content--income">
        <Container>
          <Chart type="income" budget={budget} title="Income" />
        </Container>
      </div>
      <div className="main-content__chart main-content--expense">
        <Container>
          <Chart type="expense" budget={budget} title="Expense" />
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentYear: state.month.currentYear,
    currentMonth: state.month.currentMonthStr,
    budget: state.main.budget,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBudgetData: (year, month) =>
      dispatch(actions.getBudgetData(year, month)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
