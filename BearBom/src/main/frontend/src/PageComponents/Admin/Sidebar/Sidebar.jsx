import React from "react";
import "./sidebar.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Admin = () => {
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
              <AcUnitIcon className="icon" />
              <span>메인메뉴</span>
            </li>
            <p className="title">Sales</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>매출 관리</span>
            </li>
            <p className="title">Order</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>주문 관리</span>
            </li>
            <p className="title">User</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>고객 관리</span>
            </li>
            <p className="title">Course</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>강좌 관리</span>
            </li>
            <p className="title">Helpdesk</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>공지사항 관리</span>
            </li>
            <li>
              <AcUnitIcon className="icon" />
              <span>FAQ 관리</span>
            </li>
            <li>
              <AcUnitIcon className="icon" />
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

export default Admin;
