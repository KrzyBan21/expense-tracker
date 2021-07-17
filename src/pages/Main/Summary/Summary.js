import React from "react";
import "./Summary.scss";

import Chart from "../../../components/Chart/Chart";
import Container from "../../../components/Container/Container";
import MainForm from "../../../components/MainForm/MainForm";

const Summary = ({ budget }) => {
  return (
    <div className="summary">
      <div className="summary__form">
        <Container>
          <MainForm />
        </Container>
      </div>
      <div className="summary__chart summary--income">
        <Container>
          <Chart type="income" budget={budget} title="Incomes" />
        </Container>
      </div>
      <div className="summary__chart summary--expense">
        <Container>
          <Chart type="expense" budget={budget} title="Expenses" />
        </Container>
      </div>
    </div>
  );
};

export default Summary;
