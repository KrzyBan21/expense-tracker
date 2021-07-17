import React from "react";
import "./Summary.scss";

import Chart from "../../../components/Chart/Chart";
import Container from "../../../components/Container/Container";
import MainForm from "../../../components/MainForm/MainForm";

const Summary = ({ budget }) => {
  return (
    <React.Fragment>
      <div className="main-content__form">
        <Container>
          <MainForm />
        </Container>
      </div>
      <div className="main-content__chart main-content--income">
        <Container>
          <Chart type="income" budget={budget} title="Incomes" />
        </Container>
      </div>
      <div className="main-content__chart main-content--expense">
        <Container>
          <Chart type="expense" budget={budget} title="Expenses" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Summary;
