import React from "react";
import "../css/login.css";

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

const Login = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="rePassword"
                  label="비밀번호 확인"
                  type="rePassword"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  name="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nickName"
                  label="별명"
                  name="nickName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="주소"
                  name="adress"
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="number"
                  label="전화번호"
                  name="number"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                />
                <Link>이용약관에</Link> 동의합니다.
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                />
                <Link>개인정보 수집·이용에</Link> 동의합니다.
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
                <a href="#">
                  <img src="img/google_login.png" width="50" height="50"></img>
                </a>
              </div>
              <div className="kakao_login">
                <a href="#">
                  <img src="img/kakao_login.png" width="50" height="50"></img>
                </a>
              </div>
              <div className="naver_login">
                <a href="#">
                  <img src="img/naver_login.png" width="50" height="50"></img>
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
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Login;
