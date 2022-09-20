import React from "react";
import "./sidebar.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const Sidebar = () => {
  return (
    <>
      <div className="admin_sidebar">
        <div className="top">
          <span className="logo">BearBom Admin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Main</p>
            <li>
              <HomeIcon className="icon" />
              <span>메인메뉴</span>
            </li>
            <p className="title">Sales</p>
            <li>
              <PaidOutlinedIcon className="icon" />
              <span>매출 관리</span>
            </li>
            <p className="title">Order</p>
            <li>
              <ListAltOutlinedIcon className="icon" />
              <span>주문 관리</span>
            </li>
            <p className="title">User</p>
            <li>
              <PeopleIcon className="icon" />
              <span>고객 관리</span>
            </li>
            <p className="title">Course</p>
            <li>
              <Inventory2OutlinedIcon className="icon" />
              <span>강좌 관리</span>
            </li>
            <p className="title">Helpdesk</p>
            <li>
              <NotificationsOutlinedIcon className="icon" />
              <span>공지사항 관리</span>
            </li>
            <li>
              <HelpCenterOutlinedIcon className="icon" />
              <span>FAQ 관리</span>
            </li>
            <li>
              <QuestionAnswerOutlinedIcon className="icon" />
              <span>고객문의 관리</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
