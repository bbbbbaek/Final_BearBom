import React from "react";
import "./quickview.scss";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
const QuickView = ({ type, statusData }) => {
  let data;
  let number = 12;
  let amount = number.toLocaleString("ko-KR");
  const [value1] = Object.values(Object.values(statusData)[0][0]);
  const [value2] = Object.values(Object.values(statusData)[1][0]);
  const [value3] = Object.values(Object.values(statusData)[2][0]);
  const [value4] = Object.values(Object.values(statusData)[3][0]);

  switch (type) {
    case "taking":
      data = {
        title: "수강 중인 클래스",
        value: value1,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "taken":
      data = {
        title: "수강 완료 클래스",
        value: value2,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "opened":
      data = {
        title: "개설한 클래스",
        value: value3,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "liked":
      data = {
        title: "찜한 클래스",
        value: value4,
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
            {type === "taking" && data.value + "개"}
            {type === "taken" && data.value + "개"}
            {type === "opened" && data.value + "개"}
            {type === "liked" && data.value + "개"}
          </span>
        </div>
      </div>
    </>
  );
};

export default QuickView;
