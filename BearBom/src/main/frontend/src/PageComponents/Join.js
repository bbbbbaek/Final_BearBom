import React from "react";
import "../css/join.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import DaumPostcode from "react-daum-postcode";

const Join = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const userId = data.get("userId");
    const userPw = data.get("userPw");

    // Join({ userId: userId, userPw: userPw }).then((response) => {
    //   //회원가입 성공 시 로그인페이지로 이동
    //   window.location.href = "/login";
    // });
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form noValidate onSubmit={handleSubmit}>
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
              회원가입
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userId"
                    label="아이디"
                    name="userId"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userEmail"
                    label="이메일"
                    name="userEmail"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userPw"
                    label="비밀번호"
                    type="password"
                    id="userPw"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userRePw"
                    label="비밀번호 확인"
                    type="Password"
                    id="userRePw"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userNm"
                    label="이름"
                    name="userNm"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userNickName"
                    label="별명"
                    name="userNickName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userAddress"
                    label="주소"
                    name="userAddress"
                    // value={userAddress}
                    // onChange={({ target: { value } }) => setUserAddress(value)}
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="userAddressDef"
                    label="상세주소"
                    name="userAddressDef"
                    // value={userAddressDef}
                    // onChange={({ target: { value } }) =>
                    //   setUserAddressDef(value)
                    // }
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userNm"
                    label="전화번호"
                    name="userNm"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                  />
                  <Link href="#">이용약관에</Link> 동의합니다.
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                  />
                  <Link href="#">개인정보 수집·이용에</Link> 동의합니다.
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>

              <hr />

              <div className="easy_login_name">간편 로그인</div>
              <br />
              <div class="easy_login">
                <div className="google_login">
                  <a href="https://accounts.google.com/ServiceLogin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <img
                      src={require("../img/google_login.png")}
                      width="50"
                      height="50"
                    ></img>
                  </a>
                </div>
                <div className="kakao_login">
                  <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fcategory%3D166%26locale%3Dko%26service%3D52">
                    <img
                      src={require("../img/kakao_login.png")}
                      width="50"
                      height="50"
                    ></img>
                  </a>
                </div>
                <div className="naver_login">
                  <a href="https://nid.naver.com/nidlogin.login">
                    <img
                      src={require("../img/naver_login.png")}
                      width="50"
                      height="50"
                    ></img>
                  </a>
                </div>
              </div>
              {/* <Grid container justifyContent="flex-end" mb={9}>
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </form>
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Join;
