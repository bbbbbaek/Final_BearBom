import React, { useState } from "react";
import "./profilepicture.scss";
import adminProfileImage from "../../images/adminProfileImage.png";

const ProfilePicture = () => {
  const [fileImage, setFileImage] = useState(adminProfileImage);
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    console.log(fileImage);
  };
  return (
    <>
      <div className="profilePicture">
        <div className="wrapper1">
          <div
            className="picture"
            style={{ backgroundImage: `url(${fileImage})` }}
          ></div>

          <input
            accept="image/*"
            id="secretInput"
            type="file"
            onChange={saveFileImage}
          />
          <label htmlFor="secretInput" id="label" />
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
