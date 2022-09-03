import React, { useState } from "react";
import "../../css/login.css";
import "../../css/login.scss";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onChangeUserId = (e) => {
    const userIdCurrent = e.target.value;
    setUserId(userIdCurrent);
  };

  const onChangeUserPw = (e) => {
    const userPwCurrent = e.target.value;
    setUserPw(userPwCurrent);
  };

  const onSubmitLoginHandler = (e) => {
    console.log({
      userId: userId,
      userPw: userPw,
    });
    e.preventDefault();
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/login",
      data: { userId: userId, userPw: userPw },
    })
      .then((response) => {
        // console.log(response);
        // navigate("/");
        console.log(response);
        localStorage.setItem("USER_ID", response.data.userId);
        if (response.data.token) {
          localStorage.setItem("ACCESS_TOKEN", response.data.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <form onSubmit={onSubmitLoginHandler}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* 아이콘 */}
            <Avatar sx={{ m: 1, bgcolor: "gray" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              로그인2
            </Typography>
            <TextField
              margin="normal"
              label="아이디"
              required
              fullWidth
              name="userId"
              autoFocus
              value={userId}
              onChange={onChangeUserId}
            />
            <TextField
              label="비밀번호"
              type="password"
              required
              fullWidth
              name="userPw"
              value={userPw}
              onChange={onChangeUserPw}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container mb={1}>
              <Grid item xs>
                <Link href="#">비밀번호 찾기</Link>
              </Grid>
              <Grid item>
                <Link href="join">회원가입</Link>
              </Grid>
            </Grid>
          </Box>

          <hr />
          <div className="easy_login_name">간편 로그인</div>
          <br />
          <div class="easy_login">
            <div className="google_login">
              <a href="https://accounts.google.com/ServiceLogin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                <img
                  src={require("../../img/google_login.png")}
                  width="50"
                  height="50"
                  alt="google"
                ></img>
              </a>
            </div>
            <div className="kakao_login">
              <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fcategory%3D166%26locale%3Dko%26service%3D52">
                <img
                  src={require("../../img/kakao_login.png")}
                  height="50"
                  width="50"
                  alt="kakao"
                ></img>
              </a>
            </div>
            <div className="naver_login">
              <a href="https://nid.naver.com/nidlogin.login">
                <img
                  src={require("../../img/naver_login.png")}
                  width="50"
                  height="50"
                  alt="naver"
                ></img>
              </a>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
