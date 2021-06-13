import React from "react";
import "./CurrentMonth.scss";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

const CurrentMonth = () => {
  return (
    <div className="current-month">
      <div className="current-month__icon">
        <AiFillLeftCircle />
      </div>
      <div className="current-month__month">Month</div>
      <div className="current-month__icon">
        <AiFillRightCircle />
      </div>
    </div>
  );
};

export default CurrentMonth;
