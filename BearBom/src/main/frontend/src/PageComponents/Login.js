import React from "react";
import "../css/mypage.css";

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

const Login = () => {
  return (
    <>  
      <Container component="main" maxWidth="xs">
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
            로그인
          </Typography>

          <TextField
            margin="normal"
            label="이메일 주소"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            label="비밀번호"
            type="password"
            required
            fullWidth
            name="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="이메일 주소 저장"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Grid container mb={9}>
            <Grid item xs>
              <Link>비밀번호 찾기</Link>
            </Grid>
            <Grid item>
              <Link>회원가입</Link>
            </Grid>
          </Grid>
        </Box>
        <hr />

        <div className="easy_login_name">간편 로그인</div>
        <br />
        <div class="easy_login">
          <div className="google_login">
            <a href="">
              <img src="img/google_login.png" width="50" height="50"></img>
            </a>
          </div>
          <div className="kakao_login">
            <a href="">
              <img src="img/kakao_login.png" width="50" height="50"></img>
            </a>
          </div>
          <div className="naver_login">
            <a href="">
              <img src="img/naver_login.png" width="50" height="50"></img>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
