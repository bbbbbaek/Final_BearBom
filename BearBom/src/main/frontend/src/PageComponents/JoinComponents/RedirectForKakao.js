import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";

function RedirectForKakao() {
  const navigate = useNavigate();

  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/oauth/kakao?code=${code}`);
        const token = res.data.token;
        const name = res.data.userNm;
        const test = res.data.userAddress;
        window.localStorage.setItem("ACCESS_TOKEN", token);
        window.localStorage.setItem("USER_ID", name);
        window.localStorage.setItem("test", test);
        console.log(res);
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/loginTest");
      }
    })();
  }, []);

  return <div></div>;
}

export default RedirectForKakao;
