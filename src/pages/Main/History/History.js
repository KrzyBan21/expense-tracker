import React from "react";
import "./History.scss";

import Container from "../../../components/Container/Container";
import HistoryList from "../../../components/HistoryList/HistoryList";

const History = ({ budget }) => {
  return (
    <div className="history">
      <Container scroll={true}>
        <HistoryList budget={budget} />
      </Container>
    </div>
  );
};

export default History;
