import React from "react";
import "./AggregationData.scss";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const AggregationData = ({ onAggregationChange }) => {
  return (
    <div className="aggregation-data">
      <div className="aggregation-data__aggregation">
        <div
          className="aggregation-data__aggregation-level"
          onClick={() => onAggregationChange("day")}
        >
          <p>Day</p>
        </div>
        <div
          className="aggregation-data__aggregation-level"
          onClick={() => onAggregationChange("month")}
        >
          <p>Month</p>
        </div>
        <div
          className="aggregation-data__aggregation-level"
          onClick={() => onAggregationChange("year")}
        >
          <p>Year</p>
        </div>
      </div>
      <div className="aggregation-data__filters"></div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAggregationChange: (dataAggregation) =>
      dispatch(actions.changeDataAggregation(dataAggregation)),
  };
};

export default connect(null, mapDispatchToProps)(AggregationData);
