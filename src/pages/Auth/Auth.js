import React, { useState, useEffect } from "react";
import "./Auth.scss";

import AuthForm from "./AuthForm/AuthForm";
import Container from "../../components/Container/Container";
import Spinner from "../../components/UI/Spinner/Spinner";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const authTypes = ["Sign In", "Log In"];

const Auth = ({ token, loading, categoriesLoading }) => {
  const [authType, setAuthType] = useState(authTypes[0]);
  const history = useHistory();

  const type = authType === authTypes[0] ? authTypes[0] : authTypes[1];
  const changeType = authType === authTypes[0] ? authTypes[1] : authTypes[0];

  useEffect(() => {
    if (token && !categoriesLoading) {
      history.replace("/main");
    }
  });

  const onChangeType = () => {
    if (authType === authTypes[0]) {
      setAuthType(authTypes[1]);
    } else {
      setAuthType(authTypes[0]);
    }
  };

  return (
    <div className="auth-container">
      <Container title={type} showTitle={true}>
        {loading && (
          <div className="auth-container__spinner">
            <Spinner />
          </div>
        )}
        <AuthForm
          authType={type}
          changeType={changeType}
          onChangeType={onChangeType}
          loading={loading}
        />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.auth.loading,
    categoriesLoading: state.categories.loading,
  };
};

export default connect(mapStateToProps)(Auth);
