import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { Navigate, useNavigate } from "react-router-dom";

const Widget = ({ type, widgetData }) => {
  let data;
  const rawSales = widgetData.totalSales[0].totalsales;
  const sales = rawSales.toLocaleString("ko-KR");
  const orders = widgetData.totalOrders[0].totalorders;
  const users = widgetData.totalUsers[0].totalusers;
  const courses = widgetData.totalCourses[0].totalcourses;
  const navigate = useNavigate();

  let diff = 20;
  switch (type) {
    case "sales":
      data = {
        title: "매출",
        link: "주문 내역 조회",
        icon: <PaidOutlinedIcon className="icon" />,
        value: sales,
      };
      break;
    case "orders":
      data = {
        title: "주문",
        link: "주문 내역 조회",
        icon: <InsertChartOutlinedIcon className="icon" />,
        value: orders,
      };
      break;
    case "users":
      data = {
        title: "회원",
        link: "회원 정보 조회",
        icon: <PersonOutlinedIcon className="icon" />,
        value: users,
      };
      break;
    case "courses":
      data = {
        title: "강좌",
        link: "개설 강좌 조회",
        icon: <LocalLibraryOutlinedIcon className="icon" />,
        value: courses,
      };
      break;
    default:
      break;
  }

  const onClickLink = () => {
    navigate(type);
  };

  return (
    <>
      <div className="admin_widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.title === "매출" && "₩ " + data.value}
            {data.title === "주문" && data.value + " 건"}
            {data.title === "회원" && data.value + " 명"}
            {data.title === "강좌" && data.value + " 개"}
          </span>
          <span className="link" onClick={onClickLink}>
            {data.link}
          </span>
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
