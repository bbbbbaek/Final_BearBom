import React from "react";
import { Button } from "react-bootstrap";
import { KAKAO_LOGOUT_URL } from "./OAuth";

const LogoutKaKao = () => {
  return <a href={KAKAO_LOGOUT_URL}>로그아웃</a>;
};

export default LogoutKaKao;
