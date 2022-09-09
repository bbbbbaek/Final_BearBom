import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectForKakaoLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        navigate("/");
      } catch (e) {
        console.error(e);
        navigate("/loginTest");
      }
    })();
  }, []);

  return <div></div>;
};

export default RedirectForKakaoLogout;
