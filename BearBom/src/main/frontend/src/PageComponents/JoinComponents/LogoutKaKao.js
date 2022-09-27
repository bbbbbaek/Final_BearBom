import React from "react";
import { KAKAO_LOGOUT_URL } from "./OAuth";

const LogoutKaKao = () => {
  return (
    <a
      href={KAKAO_LOGOUT_URL}
      style={{ textDecoration: "none", color: "#212529" }}
    >
      로그아웃
    </a>
  );
};

export default LogoutKaKao;
