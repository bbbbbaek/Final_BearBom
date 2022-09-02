import React from "react";
import "../../css/admin-main.css";
import BarSales from "./Chart/BarSales";
import Doughnut from "./Chart/Doughnut";

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
          <div className="admin-main-content-wrapper-left-item" id="second-tab">
            <div className="sleepy">월매출 10,000,000원</div>
            <div className="slicer"></div>
            <div className="sleepy">가입자 수 50,000명</div>
            <div className="slicer"></div>
            <div className="sleepy">등록된 클래스 수 500개</div>
            <div className="slicer"></div>
            <div className="sleepy">어제 방문자 수 2,000명</div>
          </div>
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
