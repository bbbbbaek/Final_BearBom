import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { KAKAO_AUTH_URL } from "./OAuth";

const LoginNaver = () => {
  return <Button href={KAKAO_AUTH_URL}>카카오</Button>;
};

export default LoginNaver;
