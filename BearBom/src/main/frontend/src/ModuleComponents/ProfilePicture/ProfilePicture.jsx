import React, { useEffect, useState } from "react";
import "./profilepicture.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import defaultProfilePicture from "../../images/defaultProfilePicture.png";
import { onRequest } from "../../ModuleComponents/UsefulFunctions/ApiService";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const ProfilePicture = ({ pictureData }) => {
  //0926 광민 확인 필요
  //  const [fileImage, setFileImage] = useState(defaultProfilePicture);
  //  const saveFileImage = (e) => {
  //setFileImage(URL.createObjectURL(e.target.files[0]));
  //   const fileData = URL.createObjectURL(e.target.files[0]);
  //  console.log(fileImage);

  const [fileImage, setFileImage] = useState(defaultProfilePicture);
  const [fileData, setFileData] = useState();
  const [formData, setFormData] = useState({});

  const saveFileImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileData(e.target.files[0]);
    }
    console.log(fileData);

    if (window.confirm("프로필 사진을 변경 하시겠습니까?")) {
      setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    setFormData({ image: fileData });
  }, [fileImage]);

  useEffect(() => {
    console.log("프로필 사진 변경 시작");
    console.log(fileData);
    console.log(formData);
    axios({
      url: API_BASE_URL + "/api/mypage/updateUserPhoto",
      method: "POST",
      data: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        alert("프로필 사진 변경이 완료되었습니다.");
      })
      .catch((e) => {
        console.log(e);
        alert("프로필 사진 변경에 실패하였습니다.");
      });
  }, [formData]);

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
