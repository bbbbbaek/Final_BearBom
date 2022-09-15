import React from "react";
import "../../css/userprofilepicture.css";
import adminProfileImage from "../../images/adminProfileImage.png";

const UserProfilePicture = () => {
  return (
    <>
      <div className="upp-main">
        <div className="upp-pp-wrapper">
          <input
            className="upp-pp"
            id="upp-up"
            type="file"
            style={{
              background: `url(${adminProfileImage})`,
            }}
          />
          <label htmlFor="upp-up">hello</label>
        </div>
        <p>
          <strong>김광민 님 환영합니다.</strong>
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
