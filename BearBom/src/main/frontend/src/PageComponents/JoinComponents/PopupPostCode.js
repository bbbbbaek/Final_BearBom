import { Button } from "@mui/material";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = ({ setZonecodee, setFullAddresss, onClose }) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  //   const [zonecodee, setZonecodee] = useState();
  //   const [fullAddresss, setFullAddresss] = useState();

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    setZonecodee(data.zonecode);
    setFullAddresss(fullAddress);
    onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "26%",
    width: "600px",
    height: "458px",
    padding: "7px",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />

      <Button
        onClick={() => {
          onClose();
        }}
        className="postCode_btn"
      >
        {" "}
        닫기
      </Button>
    </div>
  );
};

export default PopupPostCode;
