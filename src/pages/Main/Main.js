import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./Main.scss";

import Container from "../../components/Container/Container";
import CurrentMonth from "../../components/CurrentMonth/CurrentMonth";
import HamburgerIcon from "../../components/UI/HamburgerIcon/HamburgerIcon";
import MobileMenu from "../../components/UI/MobileMenu/MobileMenu";
import NavList from "../../components/NavList/NavList";
import Summary from "./Summary/Summary";
import History from "./History/History";
import Modal from "../../components/UI/Modal/Modal";
import AggregationData from "../../components/AggregationData/AggregationData";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Main = ({
  currentYear,
  currentMonth,
  currentDay,
  aggregation,
  onGetBudgetData,
  budget,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  const onModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    onGetBudgetData(currentYear, currentMonth, currentDay, aggregation);
  }, [currentYear, currentMonth, onGetBudgetData, currentDay, aggregation]);

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
      <Modal modalOpen={modalOpen} onModalOpen={onModalOpen}>
        <AggregationData onModalOpen={onModalOpen}/>
      </Modal>
      <div className="main-content__month">
        <Container>
          <CurrentMonth onModalOpen={onModalOpen} />
        </Container>
      </div>

      <Switch>
        <Route
          path="/main/summary"
          exact
          render={() => <Summary budget={budget} />}
        />
        <Route
          path="/main/history"
          render={() => <History budget={budget} />}
          exact
        />
        <Redirect to="/main/summary" />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentYear: state.month.currentYear,
    currentMonth: state.month.currentMonthStr,
    currentDay: state.month.currentDayStr,
    budget: state.main.budget,
    aggregation: state.month.dataAggregation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBudgetData: (year, month, currentDay, aggregation) =>
      dispatch(actions.getBudgetData(year, month, currentDay, aggregation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
