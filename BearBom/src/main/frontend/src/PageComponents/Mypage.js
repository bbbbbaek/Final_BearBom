import React, { useState } from "react";
import "../css/mypage.css";
import OpenedClassView from "../PageComponents/MyPage/OpenedClassView";
import QuickView from "../PageComponents/MyPage/QuickView";
import SideBar from "../PageComponents/MyPage/SideBar";
import TakenClassView from "../PageComponents/MyPage/TakenClassView";
import InquiryView from "./MyPage/InquiryView";
import WishlistView from "./MyPage/WishlistView";
import UserInfoModification from "./MyPage/UserInfoModification";
import LecturerInfoModification from "./MyPage/LecturerInfoModification";
import UserProfilePicture from "./MyPage/UserProfilePicture";

const Mypage = () => {
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="mypage">
        <div className="mypage-banner">mypage</div>
        <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
          <div className="mypage-container">
            <div className="mypage-sidebar-wrapper">
              <UserProfilePicture />
              <hr />
              <SideBar setTab={setTab} />
            </div>
            <div className="mypage-content-wrapper">
              <div className="mypage-quickview-wrapper">
                <QuickView />
              </div>
              <div className="mypage-content">
                {
                  [
                    <TakenClassView />,
                    <OpenedClassView />,
                    <UserInfoModification />,
                    <LecturerInfoModification />,
                    <InquiryView />,
                    <div>dd</div>,
                    <WishlistView />,
                  ][tab]
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
