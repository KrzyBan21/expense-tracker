import React from "react";
import "./AggregationData.scss";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const AggregationData = ({
  onAggregationChange,
  onModalOpen,
  dataAggregation,
}) => {
  const dayActive =
    dataAggregation === "day"
      ? " aggregation-data__aggregation-level--active"
      : "";

  const monthActive =
    dataAggregation === "month"
      ? " aggregation-data__aggregation-level--active"
      : "";

  const yearActive =
    dataAggregation === "year"
      ? " aggregation-data__aggregation-level--active"
      : "";

  return (
    <div className="aggregation-data">
      <div className="aggregation-data__aggregation" onClick={onModalOpen}>
        <div
          className={"aggregation-data__aggregation-level" + dayActive}
          onClick={() => onAggregationChange("day")}
        >
          <p>Day</p>
        </div>
        <div
          className={"aggregation-data__aggregation-level" + monthActive}
          onClick={() => onAggregationChange("month")}
        >
          <p>Month</p>
        </div>
        <div
          className={"aggregation-data__aggregation-level" + yearActive}
          onClick={() => onAggregationChange("year")}
        >
          <p>Year</p>
        </div>
      </div>
      <div className="aggregation-data__filters"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataAggregation: state.month.dataAggregation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAggregationChange: (dataAggregation) =>
      dispatch(actions.changeDataAggregation(dataAggregation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AggregationData);
