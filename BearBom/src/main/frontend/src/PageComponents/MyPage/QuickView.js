import React from "react";
import "../../css/mypage-quickview.css";

const QuickView = () => {
  return (
    <>
      <div className="wrapper-content">
        <div className="wrapper-content-title">
          <p>
            <strong>나의 강좌 현황</strong>
          </p>
        </div>
        <div className="wrapper-content-content">
          <div className="myclass-status-item">
            <p>
              <strong>수강중</strong>
            </p>
            <h4>0</h4>
          </div>
          <div className="myclass-status-item">
            <p>
              <strong>수강완료</strong>
            </p>
            <h4>0</h4>
          </div>
          <div className="myclass-status-item">
            <p>
              <strong>찜한 클래스</strong>
            </p>
            <h4>0</h4>
          </div>
          <div id="myclass-status-item">
            <p>
              <strong>장바구니</strong>
            </p>
            <h4>0</h4>
          </div>
          {/* <div id="myclass-status-item">
            <ul>
              <li>- 환불 &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; 0</li>
              <li>- 취소 &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; 0</li>
              <li>- 미결제 &nbsp;:&nbsp;&nbsp; 0</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default QuickView;
