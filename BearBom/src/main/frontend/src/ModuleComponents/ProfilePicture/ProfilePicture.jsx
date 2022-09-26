import React, { useState } from "react";
import "./profilepicture.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import defaultProfilePicture from "../../images/defaultProfilePicture.png";
import { onRequest } from "../../ModuleComponents/UsefulFunctions/ApiService";

const ProfilePicture = ({ pictureData }) => {
  const [fileImage, setFileImage] = useState(defaultProfilePicture);
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const fileData = URL.createObjectURL(e.target.files[0]);
    console.log(fileImage);

    // 서버에 업로드한 이미지 post하는 코드 필요

    onRequest("/api/mypage/updateUserPhoto", "post", fileData);
  };
  return (
    <>
      <div className="profilePicture">
        <div className="wrapper1">
          {pictureData ? (
            <div
              className="picture"
              style={{ backgroundImage: `url(${fileImage})` }}
            ></div>
          ) : (
            <div
              className="picture"
              style={{ backgroundImage: `url(${fileImage})` }}
            ></div>
          )}

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
