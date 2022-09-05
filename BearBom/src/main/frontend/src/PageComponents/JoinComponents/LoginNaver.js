import React, { useEffect } from "react";

const LoginNaver = () => {
  const { naver } = window;
  const NAVER_CLIENT_ID = "nktLBUpLqPCjOb8jlpUU";
  const NAVER_CALLBACK_URL = "http://localhost:3000/login/oauth2/code/naver";
  const NAVER_CLIENT_SECRET = "K5hElQhTK7";
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      clientSecret: NAVER_CLIENT_SECRET,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 1, height: "60" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin"></div>;
};

export default LoginNaver;
