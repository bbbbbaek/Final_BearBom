import React, { useCallback, useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import axios from "axios";
import { API_BASE_URL } from "../app-config";
import { useNavigate } from "react-router-dom";

const PwFind = () => {
  const navigate = useNavigate();

  // 값 저장
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // 이메일 체크
  const [test, setTest] = useState("");

  //오류메시지 상태 저장
  const [userEmailMessage, setUserEmailMessage] = useState("");
  const [userEmailCheckMessage, setUserEmailCheckMessage] = useState("");

  //유효성 검사
  const [isUserEmail, setIsUserEmail] = useState(false);
  const [isUserEmailCheckError, setIsUserEmailCheckError] = useState(false);

  const [userInfo, setUserInfo] = useState({});
  const addUserInfo = (e) => {
    const newUserInfo = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };

    setUserInfo(newUserInfo);
  };

  const onChangeUserId = (e) => {
    const userIdCurrent = e.target.value;
    setUserId(userIdCurrent);
  };

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setUserEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      // setUserEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요");
      setIsUserEmail(false);
    } else {
      // setUserEmailMessage("올바른 이메일 형식이에요 : )");
      setIsUserEmail(true);
      addUserInfo(e);
    }
  }, []);

  // 버튼 클릭
  // const onSubmitJoinHandler = (e) => {
  //   e.preventDefault();

  //   const userId = data.get("userId");
  //   const userEmail = data.get("userEmail");

  // 기존
  // const onSubmitPwFindHandler = (e) => {
  //   console.log({
  //     userId: userId,
  //     userEmail: userEmail,
  //   });
  //   e.preventDefault();

  //   axios({
  //     method: "post",
  //     url: API_BASE_URL + "/api/user/pwFind",
  //     data: {
  //       userId: userId,
  //       userEmail: userEmail,
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //     navigate("/login");
  //   });
  // };

  const onSubmitPwFindHandler = (e) => {
    console.log({
      userId: userId,
      userEmail: userEmail,
    });
    e.preventDefault();

    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/login",
      data: { userId: userId, userEmail: userEmail },
    })
      .then((response) => {
        // console.log(response);
        // navigate("/");
        console.log(response);
        localStorage.setItem("USER_ID", response.data.userId);
        if (response.data.token) {
          localStorage.setItem("ACCESS_TOKEN", response.data.token);
          navigate("/");
          alert("로그인 되었습니다.");
        }
      })
      .catch((err) => {
        if (err.response.data.error === "not exist id") {
          alert("존재하지 않는 아이디입니다.");
        } else if (err.response.data.error === "wrong password") {
          alert("비밀번호를 확인해 주세요.");
        } else if (err.response.data.error === "loging denied") {
          alert(
            "비밀번호 5회 오류로 사용이 제한됩니다. \n비밀번호 변경 후 이용해 주세요"
          );
        }
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={onSubmitPwFindHandler}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "gray" }} />
            <Typography component="h1" variant="h5">
              비밀번호 찾기
            </Typography>
            <Box noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userId"
                      label="아이디"
                      name="userId"
                      autoFocus
                      value={userId}
                      onChange={onChangeUserId}
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userEmail"
                      label="이메일"
                      name="userEmail"
                      value={userEmail}
                      onChange={onChangeEmail}
                    />
                    {userEmail.length > 0 && (
                      <span
                        className={`message ${
                          isUserEmail ? "success" : "error"
                        }`}
                      >
                        {userEmailMessage}
                      </span>
                    )}
                  </div>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 7 }}
                // disabled={!(isUserId && isUserEmail && isUserEmailCheckError)}
              >
                확인
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default PwFind;
