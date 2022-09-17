import React, { useState } from "react";
import "./mypage.scss";
import OpenedClassView from "../Menu/OpenedClassView";
import QuickView from "../Quickview/QuickView";
import SideBar from "../Sidebar/SideBar";
import TakenClassView from "../Menu/TakenClassView";
import InquiryView from "../Menu/InquiryView";
import WishlistView from "../Menu/WishlistView";
import UserInfoModification from "../Menu/UserInfoModification";
import LecturerInfoModification from "../Menu/LecturerInfoModification";
import UserProfilePicture from "../UserProfilePicture";
import InquiryWrite from "../Menu/InquiryWrite";

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
              <div className={"mypage-content"}>
                {
                  [
                    <TakenClassView />,
                    <OpenedClassView />,
                    <UserInfoModification />,
                    <LecturerInfoModification />,
                    <InquiryView />,
                    <InquiryWrite />,
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
