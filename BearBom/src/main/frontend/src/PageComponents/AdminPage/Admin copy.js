import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ClassView from "./ClassView";
import Main from "./Main";
import SalesView from "./SalesView";
import "../../css/admin.css";
import SideBarQuickView from "./SideBarQuickView";
import ProfilePicture from "../../ModuleComponents/ProfilePicture";
import InquiryView from "../MyPage/InquiryView";
import Notice from "../../ModuleComponents/Notice";

const Admin = () => {
  // 아래로 너무 길어지니깐 menu state에 데이터 담고 map함수 써서 간결하게 만들자
  const [menu, setMenu] = useState([]);
  const [tab, setTab] = useState(0);

  return (
    <>
      {/* <hr />
      <div className="title-wrapper">
        <h1
          onClick={() => {
            setTab(0);
          }}
        >
          Admin Page (for BearBom)
        </h1>
        <p>설명 : 관리자 페이지</p>
      </div>
      <hr /> */}
      <div className="page-wrapper">
        <div className="sidebar-wrapper">
          <h3>관리자 페이지</h3>
          <SideBarQuickView />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>매출 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(1);
                }}
              >
                - 매출 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(2);
                }}
              >
                - 클래스 추가/수정
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>클래스 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(3);
                }}
              >
                - 클래스 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(4);
                }}
              >
                - 클래스 추가/수정
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>고객 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(5);
                }}
              >
                - 고객 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(6);
                }}
              >
                - 고객 정보 관리
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(7);
                }}
              >
                - 블랙리스트 관리
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>이벤트 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(8);
                }}
              >
                - 이벤트 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(9);
                }}
              >
                - 이벤트 등록
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>고객센터 관리</Accordion.Header>
              <Accordion.Body
                onClick={() => {
                  setTab(10);
                }}
              >
                - 공지사항 조회
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(11);
                }}
              >
                - 공지사항 등록
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(12);
                }}
              >
                - FAQ 조회/수정
              </Accordion.Body>
              <Accordion.Body
                onClick={() => {
                  setTab(13);
                }}
              >
                - 고객문의 조회
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="content-wrapper">
          {[<Main />, <SalesView />, <ClassView />, <InquiryView />][tab]}
        </div>
      </div>
    </>
  );
};

export default Admin;
