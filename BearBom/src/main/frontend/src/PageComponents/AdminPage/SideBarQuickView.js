import React from "react";
import "../../css/sidebarquickview.css";
import adminProfileImage from "../../images/adminProfileImage.png";

const SideBarQuickView = () => {
  return (
    <>
      <div className="sidebar-quickview-wrapper">
        <div className="sidebar-quickview-left">
          <div className="sidebar-quickview-left-image">
            <p>Admin님 환영합니다.</p>
            <div className="profile-image-div">
              <img
                src={adminProfileImage}
                alt="adminProfileImage"
                className="profile-image"
              />
            </div>
            <div className="profile-image-description"></div>
          </div>
          <div className="sidebar-quickview-left-content">
            <div></div>
          </div>
        </div>
        <div className="sidebar-quickview-right">
          <div className="sidebar-quickview-right-item">문의</div>
          <div className="sidebar-quickview-right-item">개설 승인</div>
          <div className="sidebar-quickview-right-item">몰라</div>
          <div className="sidebar-quickview-right-item">뭐 넣을까</div>
        </div>
      </div>
    </>
  );
};

export default SideBarQuickView;
