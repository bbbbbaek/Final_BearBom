import React, { useEffect } from "react";
import "./quickview.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
const QuickView = ({ type }) => {
  let data;
  let number = 12;
  let amount = number.toLocaleString("ko-KR");
  switch (type) {
    case "taking":
      data = {
        title: "수강 중인 클래스",
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "taken":
      data = {
        title: "수강 완료 클래스",
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "opened":
      data = {
        title: "개설한 클래스",
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "liked":
      data = {
        title: "찜한 클래스",
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <>
      <div className="mypage_widget">
        <div className="top">
          <span className="title">{data.title}</span>
          {data.icon}
        </div>
        <div className="bottom">
          <span className="counter">
            {/* {data.type === "class" && amount + " 개"} */}
            {amount + " 개"}
          </span>
        </div>
      </div>
    </>
  );
};

export default QuickView;
