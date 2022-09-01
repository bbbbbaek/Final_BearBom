import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
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

import PopupPostCode from "./PopupPostCode";
import { responsesAreSame } from "workbox-broadcast-update";
import { API_BASE_URL } from "../app-config";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userRePw, setUserRePw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNm, setUserNm] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userAddressDef, setUserAddressDef] = useState("");
  const [zonecodee, setZonecodee] = useState("");
  const [fullAddresss, setFullAddresss] = useState("");

  const [userIdError, setUserIdError] = useState(true);
  const [userPwError, setUserPwError] = useState(true);
  const [userRePwError, setUserRePwError] = useState(true);
  const [userEmailError, setUserEmailError] = useState(true);
  const [userNmError, setUserNmError] = useState(true);
  const [userNickNameError, setUserNickNameError] = useState(true);
  const [userTelError, setUserTelError] = useState(true);
  const [checkIdError, setCheckIdError] = useState(true);

  // 아이디 유효성 검사
  const onChangeUserId = (e) => {
    const userIdRegex = /^[a-zA-z0-9]{5,10}$/;

    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };

  // 비밀번호 유효성 검사
  const onChangeUserPw = (e) => {
    const userPwRegex =
      // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!e.target.value || userPwRegex.test(e.target.value))
      setUserPwError(false);
    else setUserPwError(true);

    if (!userRePw || e.target.value === userRePw) setUserRePwError(false);
    else setUserRePwError(true);
    setUserPw(e.target.value);
  };
  const onChangeUserRePw = (e) => {
    if (userPw === e.target.value) setUserRePwError(false);
    else setUserRePwError(true);
    setUserRePw(e.target.value);
  };

  // 이메일 유효성 검사
  const onChangeUserEmail = (e) => {
    const userEmailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!e.target.value || userEmailRegex.test(e.target.value))
      setUserEmailError(false);
    else setUserEmailError(true);
    setUserEmail(e.target.value);
  };

  // 이름 유효성 검사
  const onChangeUserNm = (e) => {
    const userNmRegex = /^[a-z|A-Zㅣ가-힣]+$/;
    if (!e.target.value || userNmRegex.test(e.target.value))
      setUserNmError(false);
    else setUserNmError(true);
    setUserNm(e.target.value);
  };

  // 닉네임 유효성 검사
  const onChangeUserNickName = (e) => {
    const userNickNameRegex = /^[a-z|A-Zㅣ가-힣]{2,10}$/;
    if (!e.target.value || userNickNameRegex.test(e.target.value))
      setUserNickNameError(false);
    else setUserNickNameError(true);
    setUserNickName(e.target.value);
  };

  // 전화번호 유효성 검사
  const onChangeUserTel = (e) => {
    const userTelRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
    if (!e.target.value || userTelRegex.test(e.target.value))
      setUserTelError(false);
    else setUserTelError(true);
    setUserTel(e.target.value);
  };

  const validation = () => {
    if (!userId) setUserIdError(true);
    if (!userPw) setUserPwError(true);
    if (!userRePw) setUserRePwError(true);
    if (!userEmail) setUserEmailError(true);
    if (!userNm) setUserNmError(true);
    if (!userNickName) setUserNickNameError(true);
    if (!userTel) setUserTelError(true);
    if (!checkIdError) setCheckIdError(true);

    if (
      userId &&
      userPw &&
      userRePw &&
      userEmail &&
      userNm &&
      userNickName &&
      userTel &&
      checkIdError
    )
      return true;
    else return false;
  };

  const onUserAddressDefHandler = (e) => {
    setUserAddressDef(e.currentTarget.value);
  };

  const onZonecodeeHandler = (e) => {
    setZonecodee(e.currentTarget.value);
  };

  const onFullAddresssHandler = (e) => {
    setFullAddresss(e.currentTarget.value);
  };

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // const onSubmit = (e) => {
  //   if (validation()) return;

  //   // API Call
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.target);
  //   const userId = data.get("userId");
  //   const userPw = data.get("userPw");

  //   // Join({ userId: userId, userPw: userPw }).then((response) => {
  //   //   //회원가입 성공 시 로그인페이지로 이동
  //   //   window.location.href = "/login";
  //   // });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    // if (
    //   userIdError &&
    //   userPwError &&
    //   userRePwError &&
    //   userEmailError &&
    //   userNmError &&
    //   userNickNameError &&
    //   userTelError &&
    //   checkIdError
    // ) {
    //   alert("양식에 맞게 작성해주세요.");
    //   return;
    // } else {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/join",
      data: {
        userId: userId,
        userPw: userPw,
        // userRePw: userRePw,
        userEmail: userEmail,
        userNm: userNm,
        userNickName: userNickName,
        userTel: userTel,
        userAddressDef: userAddressDef,
        zonecodee: zonecodee,
        fullAddresss: fullAddresss,
      },
    }).then((response) => {
      console.log(response);
      window.location.href = "/login";
    });

    // }

    // const joinObj = {};
    // const formData = new FormData(e.target);

    // formData.forEach(function (value, key) {
    //   joinObj[key] = value;
    // });
  };

  const idCheck = () => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/checkId",
      data: { userId: userId },
    }).then((response) => {
      console.log(response);
      if (response.data === "1") {
        alert("이미 사용중인 아이디 입니다.");
        setCheckIdError(true);
      } else {
        setCheckIdError(false);
      }
    });
  };

  // // ??
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios({
  //     method: "post",
  //     url: API_BASE_URL + "/api/user/checkId",
  //     data: {userId: userId},
  //   }).then((response) => {
  //     console.log(response);
  // if (response.data === 1) {
  //   alert("already exist");
  //   setCheckIdError(true);
  // };
  //   });

  //   //회원가입 버튼
  //   const onSubmitHandler = (e) => {
  //     e.preventDefault();

  //     const data = new FormData(e.target);
  //     const userId = data.get("userId");
  //     const userPw = data.get("userPw");
  //     const userNm = data.get("userNm");
  //     const userNickName = data.get("userNickName");
  //     const userTel = data.get("userTel");
  //     const userEmail = data.get("userEmail");
  //     const zonecodee = data.get("zonecodee");
  //     const fullAddresss = data.get("FullAddresss");
  //     const userAddressDef = data.get("userAddressDef");
  //     // const userMarketing = data.get("userMarketing");

  //     if (!(userPw && userRePw)) {
  //       console.log(userPw);
  //       console.log(userRePw);
  //       alert("제대로 입력하세요.");
  //       return;
  //     } else {
  //       Join({
  //         userId: userId,
  //         userPw: userPw,
  //         userNm: userNm,
  //         userNickName: userNickName,
  //         userTel: userTel,
  //         userEmail: userEmail,
  //         // userZip: userZip,
  //         fullAddresss: fullAddresss,
  //         userAddressDef: userAddressDef,
  //         // userMarketing: userMarketing,
  //       }).then((response) => {
  //         //회원가입 성공시 로그인 페이지로 이동
  //         window.location.href = "/login";
  //       });
  //     }
  //  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={onSubmitHandler}>
          {/* <form noValidate onSubmit={handleSubmit}> */}
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
                <Grid item xs={8}>
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
                  {userIdError && (
                    <div class="invalid-input">
                      5자 이상 10자 이하로 입력해 주세요.
                    </div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <Button type="submit" fullWidth sx={{ mt: 1 }}>
                    중복 확인
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    id="userEmail"
                    label="이메일"
                    name="userEmail"
                    autoComplete="email"
                    value={userEmail}
                    onChange={onChangeUserEmail}
                  />
                  {userEmailError && (
                    <div class="invalid-input">
                      유효한 이메일 형식을 입력하세요.
                    </div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <Button type="submit" fullWidth sx={{ mt: 1 }}>
                    이메일 확인
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userPw"
                    label="비밀번호"
                    type="password"
                    id="userPw"
                    value={userPw}
                    onChange={onChangeUserPw}
                  />
                  {userPwError && (
                    <div class="invalid-input">
                      숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요.
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userRePw"
                    label="비밀번호 확인"
                    type="Password"
                    id="userRePw"
                    value={userRePw}
                    onChange={onChangeUserRePw}
                  />
                  {userRePwError && (
                    <div class="invalid-input">
                      비밀번호가 일치하지 않습니다.
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userNm"
                    label="이름"
                    name="userNm"
                    value={userNm}
                    onChange={onChangeUserNm}
                  />
                  {userNmError && (
                    <div class="invalid-input">
                      한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용
                      불가)
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userNickName"
                    label="별명"
                    name="userNickName"
                    value={userNickName}
                    onChange={onChangeUserNickName}
                  />
                  {userNickNameError && (
                    <div class="invalid-input">
                      2자 이상 10자 이내로 작성 가능합니다.
                    </div>
                  )}
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    id="userZipcode"
                    label="우편번호"
                    name="userZipCode"
                    value={zonecodee}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button onClick={openPostCode}>검색</Button>
                  <div id="popupDom">
                    {isPopupOpen && (
                      <PopupPostCode
                        setZonecodee={setZonecodee}
                        setFullAddresss={setFullAddresss}
                        onClose={closePostCode}
                      />
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userAddress"
                    label="주소"
                    name="userAddress"
                    value={fullAddresss}
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
                    id="userTel"
                    label="전화번호"
                    name="userTel"
                    value={userTel}
                    onChange={onChangeUserTel}
                  />
                  {userTelError && (
                    <div class="invalid-input">"-"을 입력해 주세요.</div>
                  )}
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
                // submit은 입력값 그대로 보내기 할 때,
                // button은 입력값이 경우에 따라 다르게 사용 될 때??
                type="submit"
                // type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={onSubmitHandler}
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
