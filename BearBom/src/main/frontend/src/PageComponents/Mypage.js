import React from "react";
import "../css/mypage.css";
import QuickView from "./MyPage/QuickView";
import SideBar from "./MyPage/SideBar";

const Mypage = () => {
  return (
    <>
<<<<<<< HEAD
      <p>mypage</p>
=======
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
>>>>>>> 867145d (김광민 마이페이지 요소 추가 220904)
    </>
  );
};

export default Mypage;
