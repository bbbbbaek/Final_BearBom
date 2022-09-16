import React from "react";
import "../../css/userprofilepicture.css";
import adminProfileImage from "../../images/adminProfileImage.png";
import ProfilePicture from "../../ModuleComponents/ProfilePicture";

const UserProfilePicture = () => {
  return (
    <>
      <div className="upp-main">
        <div className="upp-pp-wrapper">
          <ProfilePicture />
        </div>
        <div className="upp-pp-text">
          <p>
            <strong>김광민 님 환영합니다.</strong>
          </p>
          <br />
          <span>kmkim4238@naver.com</span>
          <br />
          <span>010-3936-1653</span>
        </div>
      </div>
    </>
  );
};

export default UserProfilePicture;
