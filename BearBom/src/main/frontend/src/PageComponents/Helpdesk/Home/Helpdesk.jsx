import React, { useEffect, useState } from "react";
import "./helpdesk.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Notice from "../Notice/Notice";
import FAQ from "../FAQ/FAQ";
import Inquiry from "../Inquiry/Inquiry";
import banner from "../../../images/helpdesk-banner.png";
import Board from "../../../ModuleComponents/Board/Board";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../store/store";
import { Outlet, useNavigate } from "react-router-dom";

const Helpdesk = () => {
  const navigate = useNavigate();

  // Helpdesk의 default tab을 notice로 설정하기 위한 useEffect
  useEffect(() => {
    navigate("notice");
  }, []);

  // navigate 함수(e.target의 id값으로 navigate)
  const onNavigate = (e) => {
    navigate(e.target.id);
  };

  return (
    <>
      <div className="helpdesk_home">
        <div className="banner" />
        <br />
        <div className="body">
          <div className="menuBar">
            <div id="notice" className="menu" onClick={onNavigate}>
              공지사항
            </div>
            <div id="faq" className="menu" onClick={onNavigate}>
              FAQ
            </div>
            <div id="inquiry" className="menu" onClick={onNavigate}>
              1:1문의
            </div>
          </div>

          <br />
          {/* Modal부분 */}
          <div className="content">
            {/* Helpdesk --> Notice --> Table --> Board 로 
            tabContent를 props drilling 하지 않기 위한 전역 관리 필요*/}
            <Outlet />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Helpdesk;
