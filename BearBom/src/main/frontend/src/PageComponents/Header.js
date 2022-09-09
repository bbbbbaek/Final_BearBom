import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/header.css";
import logoImg from "../images/logo.png";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../app-config";
import { KAKAO_LOGOUT_URL } from "./JoinComponents/OAuth";
import LogoutKaKao from "./JoinComponents/LogoutKaKao";
import { id } from "date-fns/locale";

const Header = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("ACCESS_TOKEN") === null) {
  //     navigate("/");
  //   }
  // }, []);

  //isLogin은 localStorage에 ACCESS_TOKEN이라는 값을 저장하고 있는지를 검사하는 함수
  const isLogin = !!localStorage.getItem("ACCESS_TOKEN");
  const [loginText, setLoginText] = useState("");
  const [logoutText, setLogoutText] = useState("");
  const userId = localStorage.getItem("USER_ID");
  console.log(!!localStorage.getItem("ACCESS_TOKEN"));
  console.log(isLogin);

  // const test2 = localStorage.removeItem("USER_ID");

  const onClickIsLogin = (e) => {
    e.preventDefault();
    if (!isLogin) {
      // setLoginText("로그인");
      console.log(loginText);
      // window.location.href("/loginTest");
      navigate("/loginTest");
    } else {
      // setLoginText(localStorage.getItem("USER_ID"));
      console.log(loginText);
      // window.location.href("/mypage");
      navigate("/mypage");
    }
    console.log(loginText);
  };

  const test = localStorage.getItem("test");
  // else if (test === "kakao") {
  //   localStorage.removeItem("USER_ID");
  //   localStorage.removeItem("ACCESS_TOKEN");
  //   localStorage.clear();
  // }
  const onClicklogOut = (e) => {
    if (!isLogin) {
      navigate("/joinTest");
    } else {
      localStorage.removeItem("USER_ID");
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <>
      <div className="header-main">
        {/* Navbar부분 */}
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">
              {/* <h4 style={{ color: "#958a78", margin: 0, fontWeight: "bold" }}>
                베어봄
              </h4> */}
              <img className="logoImg" src={logoImg} alt="" />
            </Navbar.Brand>
            <Nav className="justify-content-start">
              <Nav.Link
                onClick={() => {
                  navigate("/course");
                }}
              >
                클래스 검색
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("course/registration");
                }}
              >
                클래스 등록
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/guide");
                }}
              >
                이용안내
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/helpdesk");
                }}
              >
                고객센터
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                마이페이지
              </Nav.Link>
              <div
                className="loginButton"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <div style={{ width: "50px" }}></div>
                {/* <Nav.Link
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </Nav.Link> */}
                <Nav.Link
                  // onClick={() => {

                  //   navigate("/loginTest");
                  // }}
                  onClick={onClickIsLogin}
                  // onChange={onChangeIsLogin}
                >
                  {isLogin ? <sapn>{userId}</sapn> : <span>로그인</span>}
                </Nav.Link>
                {/* <Nav.Link
                  onClick={() => {
                    navigate("/loginTest");
                  }}
                >
                  로그인2
                </Nav.Link> */}
                {/* <Nav.Link
                  onClick={() => {
                    navigate("/join");
                  }}
                >
                  회원가입
                </Nav.Link> */}
                {/** */}
                {/* <Nav.Link
                  onClick={() => {
                    navigate("/joinTest");
                  }}
                >
                  회원가입2
                </Nav.Link> */}
                <Nav.Link onClick={onClicklogOut}>
                  {isLogin ? <span>로그아웃</span> : <span>회원가입</span>}
                </Nav.Link>
                <LogoutKaKao></LogoutKaKao>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
