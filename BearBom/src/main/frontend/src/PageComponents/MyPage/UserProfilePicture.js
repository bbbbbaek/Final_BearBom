import React from "react";
import "../../css/userprofilepicture.css";
import adminProfileImage from "../../images/adminProfileImage.png";

const UserProfilePicture = () => {
  return (
    <>
      <div className="upp-main">
        <div className="upp-pp-wrapper">
          <input className="upp-pp" type="file" />
        </div>
        <p>
          <strong>김광민</strong>
        </p>
        <br />
        <span>kmkim4238@naver.com</span>
        <br />
        <span>010-3936-1653</span>
      </div>
    </>
  );
};

export default UserProfilePicture;
