import React from "react";
import "../css/mypage.css";
import QuickView from "./MyPage/QuickView";
import SideBar from "./MyPage/SideBar";

const Mypage = () => {
  return (
    <>
      <p>mypage</p>

      <div className="mypage-banner">mypage</div>
      <div style={{ marginLeft: "15%", marginRight: "15%" }}>
        <div className="mypage-quickview-wrapper">
          <QuickView />
          {/* <div className="mypage-quickview-container"></div> */}
        </div>
        <div className="mypage-container">
          <div className="mypage-sidebar-wrapper">
            <SideBar />
          </div>
          <div className="mypage-content-wrapper">mypage-content-wrapper</div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
