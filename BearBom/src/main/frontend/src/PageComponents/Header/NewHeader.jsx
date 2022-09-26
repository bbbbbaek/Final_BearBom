import "./newheader.scss";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { KAKAO_LOGOUT_URL } from "../JoinComponents/OAuth";
import LogoutKaKao from "../JoinComponents/LogoutKaKao";
import { id } from "date-fns/locale";
import LogoImage from "../../img/blogo1.png";
import LogoText from "../../images/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AlarmBar from "../../ModuleComponents/AlarmBar/AlarmBar";
import defaultProfilePicture from "../../images/defaultProfilePicture.png";
import { useDispatch, useSelector } from "react-redux";
import {
  onLogin,
  onLogout,
} from "../../ModuleComponents/reduxStore/reduxStore";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkLocalStorage = localStorage.getItem("USER_ID");
  const loginStatus = useSelector((state) => state);
  // 새로고침하게 될 경우, reduxStore가 초기화되면서 로그아웃되는 것을 방지하기 위함
  if (checkLocalStorage && !loginStatus.loginStatus) dispatch(onLogin());

  const [cartAlarm, setCartAlarm] = useState(false);
  const [pushAlarm, setPushAlarm] = useState(false);
  const [fetchedData, setFetchedData] = useState({
    userId: false,
    userPhotoOrgNm: false,
  });

  // 로그인 하면 유저 데이터를 가져오는 부분
  useEffect(() => {
    if (loginStatus.loginStatus) {
      axios({
        method: "get",
        url: API_BASE_URL + "/api/mypage/getUser",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
        },
      }).then((res) => {
        console.log(res.data);
        setFetchedData(res.data);
      });
    } else return;
  }, [loginStatus]);

  // 로그아웃
  const onClickLogout = () => {
    localStorage.removeItem("USER_ID");
    localStorage.removeItem("ACCESS_TOKEN");
    dispatch(onLogout());
    setFetchedData({
      userId: false,
      userPhotoOrgNm: false,
    });
    navigate("/");
  };

  // 메뉴 이동
  const onClickMenu = (e) => {
    navigate(e.target.id);
  };

  // 마이페이지로 이동 (로그인하지 않은 유저)
  const onClickMypage = (e) => {
    if (fetchedData.userId) navigate(e.target.id);
    else {
      alert("로그인하신 후 이용하실 수 있습니다.");
      navigate("/login");
    }
  };

  // 썸네일 이미지 클릭 시 마이페이지 / 관리자 페이지 이동
  const onClickThumbnail = (e) => {
    let role = localStorage.getItem("USER_ROLE");
    if (role === "ROLE_ADMIN") {
      navigate("/admin");
    } else {
      navigate(e.target.id);
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <div
            onClick={() => {
              console.log(fetchedData);
              console.log(loginStatus);
            }}
          >
            test
          </div>
          <img
            id="/"
            className="logoImage"
            src={LogoImage}
            alt="pp"
            onClick={onClickMenu}
          />
          <img
            id="/"
            className="logoText"
            src={LogoText}
            alt="pp"
            onClick={onClickMenu}
          />
        </div>
        <div className="menu">
          <ul>
            <li id="/course" onClick={onClickMenu}>
              클래스 검색
            </li>
            <li id="course/registration" onClick={onClickMenu}>
              클래스 등록
            </li>
            <li id="/guide" onClick={onClickMenu}>
              이용안내
            </li>
            <li id="/helpdesk" onClick={onClickMenu}>
              고객센터
            </li>
            <li id="/mypage" onClick={onClickMypage}>
              마이페이지
            </li>
          </ul>
        </div>
        <div className="user">
          {/* reduxStore state인 loginStatus는 객체로 반환되므로, .loginStatus로 한번 더 접근해줘야 함 */}

          {loginStatus.loginStatus ? (
            <ul id="isLoggedIn">
              <li>
                <img
                  src={
                    fetchedData.userPhotoOrgNm
                      ? `${API_BASE_URL}/upload/${fetchedData.userPhotoOrgNm}`
                      : defaultProfilePicture
                  }
                  alt=""
                  id="/mypage"
                  onClick={onClickThumbnail}
                />
              </li>
              <li id="/mypage" onClick={onClickMenu}>
                {fetchedData.userNickName} 님
              </li>
              <li>
                <ShoppingCartOutlinedIcon
                  style={{ position: "relative" }}
                  onClick={() => {
                    setCartAlarm(!cartAlarm);
                    setPushAlarm(false);
                  }}
                />
                {cartAlarm ? <AlarmBar type="cart" /> : null}
                <div className="notif">1</div>
              </li>
              <li>
                <NotificationsNoneOutlinedIcon
                  style={{ position: "relative" }}
                  onClick={() => {
                    setPushAlarm(!pushAlarm);
                    setCartAlarm(false);
                  }}
                />
                {pushAlarm ? <AlarmBar type="push" /> : null}
                <div className="notif">2</div>
              </li>
              <li onClick={onClickLogout}>로그아웃</li>
            </ul>
          ) : (
            <ul id="inNotLoggedIn">
              <li id="/login" onClick={onClickMenu}>
                로그인
              </li>
              <li id="/join" onClick={onClickMenu}>
                회원가입
              </li>
            </ul>
          )}
          {/* {isLoggedIn ? (
            test === "kakao" ? (
              <LogoutKaKao />
            ) : (
              <span>로그아웃</span>
            )
          ) : (
            <span>회원가입</span>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Header;
