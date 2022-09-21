import React from "react";
import "./sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ProfilePicture from "../../../ModuleComponents/ProfilePicture/ProfilePicture";
import Advertisement from "../../../ModuleComponents/Advertisement/Advertisement";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../../ModuleComponents/reduxStore/reduxStore";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const onNavigate = (e) => {
    navigate(e.target.id);
  };
  let state = useSelector((state) => state.tab);
  let dispatch = useDispatch();
  console.log(state);

  return (
    <>
      <div className="mypage_sidebar">
        <div className="mypageTitle">마이페이지</div>
        <div className="top">
          <ProfilePicture />
          <span className="name">김광민님</span>
          <span className="else">kmkim4238@naver.com</span>
          <span className="else">010-3936-1653</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Main</p>
            <li>
              <HomeIcon className="icon" />
              <span id="" onClick={onNavigate}>
                메인메뉴
              </span>
            </li>
            <p className="title">Course</p>
            <li>
              <ContentPasteSearchOutlinedIcon className="icon" />
              <span id="course/user" onClick={onNavigate}>
                수강 클래스 조회
              </span>
            </li>
            <li>
              <ContentPasteSearchOutlinedIcon className="icon" />
              <span id="course/lecturer" onClick={onNavigate}>
                개설 클래스 조회
              </span>
            </li>
            <p className="title">User</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span id="info/user" onClick={onNavigate}>
                개인 정보 수정
              </span>
            </li>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span id="info/lecturer" onClick={onNavigate}>
                강사 프로필 수정
              </span>
            </li>
            <p className="title">Inquiry</p>
            <li>
              <Inventory2OutlinedIcon className="icon" />
              <span id="inquiry/view" onClick={onNavigate}>
                문의 내역 조회
              </span>
            </li>
            <li>
              <NotificationsOutlinedIcon className="icon" />
              <span id="inquiry" onClick={onNavigate}>
                문의하기
              </span>
            </li>
            <p className="title">Wishlist</p>
            <li>
              <FavoriteBorderOutlinedIcon className="icon" />
              <span id="wishlist" onClick={onNavigate}>
                찜한 클래스 조회
              </span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="bottom">
          <Advertisement />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
