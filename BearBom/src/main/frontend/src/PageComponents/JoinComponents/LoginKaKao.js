import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { CLIENT_ID, KAKAO_AUTH_URL, REDIRECT_URI } from "./OAuth";

//리덕스, 리액트쿼리 함 봐야겠다
const LoginNaver = () => {
  return (
    // <Button href={KAKAO_AUTH_URL}>카카오</Button>
    <a href={KAKAO_AUTH_URL}>
      <img
        src={require("../../img/kakao_login.png")}
        height="50"
        alt="카카오"
      ></img>
    </a>
  );
};

export default LoginNaver;
