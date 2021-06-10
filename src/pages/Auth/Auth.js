import React, { useState } from "react";
import "./Auth.scss";

import AuthForm from "./AuthForm/AuthForm";
import Container from "../../components/Container/Container";

const authTypes = ["Sign In", "Log In"];

const Auth = () => {
  const [authType, setAuthType] = useState(authTypes[0]);

  const type = authType === authTypes[0] ? authTypes[0] : authTypes[1];
  const changeType = authType === authTypes[0] ? authTypes[1] : authTypes[0];

  const onChangeType = () => {
    if (authType === authTypes[0]) {
      setAuthType(authTypes[1]);
    } else {
      setAuthType(authTypes[0]);
    }
  };

  return (
    <div className="auth-container">
      <Container title={type}>
        <AuthForm
          authType={type}
          changeType={changeType}
          onChangeType={onChangeType}
        />
      </Container>
    </div>
  );
};

export default Auth;
