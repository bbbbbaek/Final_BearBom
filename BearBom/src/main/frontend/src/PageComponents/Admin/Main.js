import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/admin-main.css";
import BarSales from "./Chart/BarSales";
import Doughnut from "./Chart/Doughnut";
import QuickView from "./QuickView";

const Main = () => {
  return (
    <>
      <h4>대시보드</h4>
      <hr />
      <div className="admin-main-content-wrapper">
        <div className="admin-main-content-wrapper-left">
          <div className="admin-main-content-wrapper-left-item" id="first-tab">
            <h5>월별 매출</h5>
            <BarSales />
          </div>
          <QuickView />
        </div>
        <div className="admin-main-content-wrapper-right">
          <div className="admin-main-content-wrapper-right-item">
            <h5>월별 매출</h5>
            <Doughnut />
          </div>
          <div className="admin-main-content-wrapper-right-item">dd</div>
        </div>
      </div>
    </>
  );
};

export default Main;
