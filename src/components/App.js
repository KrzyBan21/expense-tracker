import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";

import Auth from "../pages/Auth/Auth";
import Main from "../pages/Main/Main";

const url = "/expense-tracker";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path={`${url}/auth`} render={() => <Auth />} />
        <Route path={`${url}/main`} render={() => <Main />} />
        <Redirect to={url} />
      </Switch>
    </div>
  );
};

export default App;
