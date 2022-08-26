import React, { useCallback, useEffect, useState } from "react";
import "../../css/join.css";

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

import DaumPost from "./DaumPost";
import Modal from "./ModalJoin";

const JoinTest = () => {
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
                <Grid item xs={9}>
                  <TextField
                    required
                    fullWidth
                    id="userEmail"
                    label="이메일"
                    name="userEmail"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button>이메일확인</Button>
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

                <Grid item xs={9}>
                  <TextField
                    required
                    fullWidth
                    id="userZipcode"
                    label="우편번호"
                    name="userZipcode"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button>주소검색</Button>
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
                </Grid>
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
                  ></TextField>
                </Grid>
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

export default JoinTest;
