import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

const Widget = ({ type }) => {
  let data;
  let number = 10000;
  const [test, setTest] = useState(0);
  let amount = number.toLocaleString("ko-KR");
  let diff = 20;

  switch (type) {
    case "earning":
      data = {
        title: "매출",
        link: "주문 내역 조회",
        icon: <PaidOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "주문",
        link: "주문 내역 조회",
        icon: <InsertChartOutlinedIcon className="icon" />,
      };
      break;
    case "user":
      data = {
        title: "회원",
        link: "회원 정보 조회",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "class":
      data = {
        title: "강좌",
        link: "개설 강좌 조회",
        icon: <LocalLibraryOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <>
      <div className="admin_widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.title === "매출" && "₩ " + test}
            {data.title === "주문" && amount + " 건"}
            {data.title === "회원" && amount + " 명"}
            {data.title === "강좌" && amount + " 개"}
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            {diff + "%"}
          </div>
          {data.icon}
        </div>
      </div>
    </>
  );
};

export default Widget;
