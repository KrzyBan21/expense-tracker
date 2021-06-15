import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Auth from "../pages/Auth/Auth";
import Main from "../pages/Main/Main";

import { connect } from "react-redux";

const App = ({ token }) => {
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

export default connect(mapStateToProps)(App);
