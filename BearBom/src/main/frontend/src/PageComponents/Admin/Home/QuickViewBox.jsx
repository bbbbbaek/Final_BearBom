import React from "react";
import "./quickviewbox.scss";
import Chart from "../Chart/Chart";
import Featured from "../Featured/Featured";
import LatestTransaction from "../LatestTransaction/LatestTransaction";

const QuickViewBox = () => {
  return (
    <>
      <div className="quickviewbox">
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <LatestTransaction />
        </div>
      </div>
    </>
  );
};

export default QuickViewBox;
