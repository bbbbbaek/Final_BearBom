import React from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
const Widget = ({ type }) => {
  let data;
  let amount = 10000;
  let diff = 20;
  switch (type) {
    case "earning":
      data = {
        title: "매출",
        isMoney: true,
        link: "주문 내역 조회",
        icon: <PaidOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "주문",
        isMoney: false,
        link: "주문 내역 조회",
        icon: <InsertChartOutlinedIcon className="icon" />,
      };
      break;
    case "user":
      data = {
        title: "회원",
        isMoney: false,
        link: "회원 정보 조회",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "class":
      data = {
        title: "강좌",
        isMoney: false,
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
            {data.isMoney && "₩"} {amount}
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
