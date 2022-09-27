import React from "react";
import "./quickview.scss";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useNavigate } from "react-router-dom";
const QuickView = ({ type, widgetData }) => {
  let data;
  const [liked] = Object.values(Object.values(widgetData)[2][0]);
  const [opened] = Object.values(Object.values(widgetData)[0][0]);
  const [taken] = Object.values(Object.values(widgetData)[1][0]);
  const [taking] = Object.values(Object.values(widgetData)[3][0]);
  const navigate = useNavigate();

  switch (type) {
    case "taking":
      data = {
        title: "수강 중인 클래스",
        value: taking,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "taken":
      data = {
        title: "수강 완료 클래스",
        value: taken,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "opened":
      data = {
        title: "개설한 클래스",
        value: opened,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    case "liked":
      data = {
        title: "찜한 클래스",
        value: liked,
        icon: <OpenInNewOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  const onClickNavigate = () => {
    switch (type) {
      case "taking":
        navigate("course/user");
        break;
      case "taken":
        navigate("course/user");
        break;
      case "opened":
        navigate("course/lecturer");
        break;
      case "liked":
        navigate("wishlist");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="mypage_widget">
        <div className="top">
          <span className="title">{data.title}</span>
          <span onClick={onClickNavigate}>{data.icon}</span>
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
