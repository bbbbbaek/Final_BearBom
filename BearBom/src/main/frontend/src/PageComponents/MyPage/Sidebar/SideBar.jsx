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

const Sidebar = ({ userData }) => {
  const navigate = useNavigate();
  const onNavigate = (e) => {
    e.stopPropagation();
    navigate(e.target.id);
    console.log("navigate");
  };
  return (
    <>
      {userData ? (
        <div className="mypage_sidebar">
          <div className="mypageTitle">마이페이지</div>
          <div className="top">
            <ProfilePicture pictureData={userData.userPhotoOrgNm} />
            <span className="name">{userData.userNickName} 님</span>
            <span className="else">{userData.userEmail}</span>
            <span className="else">{userData.userTel}</span>
          </div>
          <hr />
          <div className="center">
            <ul>
              <p className="title">Main</p>
              <li id="" onClickCapture={onNavigate}>
                <HomeIcon className="icon" />
                <span id="">메인메뉴</span>
              </li>
              <p className="title">Course</p>
              <li id="course/user" onClick={onNavigate}>
                <ContentPasteSearchOutlinedIcon className="icon" />
                <span id="course/user">수강 클래스 조회</span>
              </li>
              <li id="course/lecturer" onClick={onNavigate}>
                <ContentPasteSearchOutlinedIcon className="icon" />
                <span id="course/lecturer">개설 클래스 조회</span>
              </li>
              <p className="title">User</p>
              <li id="info/user" onClickCapture={onNavigate}>
                <AccountCircleOutlinedIcon className="icon" />
                <span id="info/user">개인 정보 수정</span>
              </li>
              <li id="info/lecturer" onClickCapture={onNavigate}>
                <AccountCircleOutlinedIcon className="icon" />
                <span id="info/lecturer">강사 프로필 수정</span>
              </li>
              <p className="title">Inquiry</p>
              <li id="inquiry/view" onClickCapture={onNavigate}>
                <Inventory2OutlinedIcon className="icon" />
                <span id="inquiry/view">문의 내역 조회</span>
              </li>
              <li id="inquiry" onClickCapture={onNavigate}>
                <NotificationsOutlinedIcon className="icon" />
                <span id="inquiry">문의하기</span>
              </li>
              <p className="title">Wishlist</p>
              <li id="wishlist" onClickCapture={onNavigate}>
                <FavoriteBorderOutlinedIcon className="icon" />
                <span id="wishlist">찜한 클래스 조회</span>
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom">
            <Advertisement />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
