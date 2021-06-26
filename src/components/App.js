import React, { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Auth from "../pages/Auth/Auth";
import Main from "../pages/Main/Main";

import * as actions from "../store/actions/index";

import { connect } from "react-redux";

const App = ({ token, onAuthCheckState }) => {
  useEffect(() => {
    onAuthCheckState();
    // console.log('gownow')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="background"></div>
      <div className="app">
        <Switch>
          <Route path="/auth" render={() => <Auth />} />
          {/* {token && <Route path="/main" render={() => <Main />} />} */}
          <Route path="/main" render={() => <Main />} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheckState: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
