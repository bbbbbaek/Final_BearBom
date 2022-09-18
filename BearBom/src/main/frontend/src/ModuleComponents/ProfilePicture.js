import React, { useState } from "react";
import "../css/profilepicture.css";
import adminProfileImage from "../images/adminProfileImage.png";
import cameraButton from "../images/cameraButton.png";

const ProfilePicture = () => {
  const [fileImage, setFileImage] = useState(adminProfileImage);
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    console.log(fileImage);
  };
  return (
    <>
      <div className="pp-main">
        <div className="pp-wrapper">
          <div
            className="pp-div"
            style={{ backgroundImage: `url(${fileImage})` }}
          ></div>
          <input
            accept="image/*"
            className="pp-input"
            id="pp-input"
            type="file"
            onChange={saveFileImage}
          />
          <label htmlFor="pp-input" id="pp-label" />
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
