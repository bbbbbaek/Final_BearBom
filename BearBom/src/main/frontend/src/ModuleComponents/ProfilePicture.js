import React from "react";
import "../css/profilepicture.css";
import adminProfileImage from "../images/adminProfileImage.png";
import changePP from "../images/changePP.png";

const ProfilePicture = () => {
  return (
    <>
      <div className="pp-wrapper">
        <div
          className="pp-div"
          style={{ background: `url(${adminProfileImage})` }}
        ></div>
        <input
          className="pp-input"
          id="pp-input"
          type="file"
          style={{
            background: `url(${adminProfileImage})`,
          }}
        />
        <label htmlFor="pp-input" id="pp-label">
          <div
            className="pp-label-div"
            style={{ background: `url(${changePP})` }}
          ></div>
        </label>
      </div>
    </>
  );
};

export default ProfilePicture;
