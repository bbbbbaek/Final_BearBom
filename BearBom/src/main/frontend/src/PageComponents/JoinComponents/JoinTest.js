import React, { useCallback, useEffect, useState } from "react";

import "../../css/join.scss";

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

import { useDaumPostcodePopup } from "react-daum-postcode";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  // 값 저장
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userRePw, setUserRePw] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNm, setUserNm] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userAddressDef, setUserAddressDef] = useState("");
  const [usingTerm, setUsingTerm] = useState(false);
  const [infoTerm, setInfoTerm] = useState(false);

  // 이메일 체크
  const [userEmailCheck, setUserEmailCheck] = useState("");
  const [test, setTest] = useState("");

  //오류메시지 상태 저장
  const [userIdMessage, setUserIdMessage] = useState("");
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userRePwMessage, setUserRePwMessage] = useState("");
  const [userEmailMessage, setUserEmailMessage] = useState("");
  const [userNmMessage, setUserNmMessage] = useState("");
  const [userNickNameMessage, setUserNickNameMessage] = useState("");
  const [userTelMessage, setUserTelMessage] = useState("");
  const [usingTermMessage, setUsingTermMessage] = useState("");
  const [infoTermMessage, setInfoTermMessage] = useState("");
  const [userEmailCheckMessage, setUserEmailCheckMessage] = useState("");

  //유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  const [isUserPw, setIsUserPw] = useState(false);
  const [isUserRePw, setIsUserRePw] = useState(false);
  const [isUserEmail, setIsUserEmail] = useState(false);
  const [isUserNm, setIsUserNm] = useState(false);
  const [isUserNickName, setIsUserNickName] = useState(false);
  const [isUserTel, setIsUserTel] = useState(false);
  const [isUsingTerm, setIsUsingTerm] = useState(false);
  const [isInfoTerm, setIsInfoTerm] = useState(false);
  const [isIdCheckError, setIsIdCheckError] = useState(false);
  const [isUserEmailCheckError, setIsUserEmailCheckError] = useState(false);

  const [userInfo, setUserInfo] = useState({});

  const addUserInfo = (e) => {
    const newUserInfo = {
      ...userInfo,
      [e.target.name]: e.target.value,
    };

    setUserInfo(newUserInfo);
  };

  //우편번호 및 주소 조회(다음 우편번호 검색 서비스 사용)
  const open = useDaumPostcodePopup(
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  let [zipCode, setZipCode] = useState("");
  let [fullAddress, setFullAddress] = useState("");

  const handleComplete = (data) => {
    fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setZipCode(data.zonecode);
      setFullAddress(fullAddress);
    }
  };

  //우편번호 검색 버튼 클릭시
  const handleClick = () => {
    open({ onComplete: handleComplete });
  }; //onComplete - 우편번호 검색이 끝났을 때 사용자가 선택한 정보를 받아올 콜백함수. 주소 데이터의 구성은 Daum 가이드를 참고.

  //유효성
  //아이디
  const onChangeName = useCallback((e) => {
    setUserId(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 10) {
      setUserIdMessage("2글자 이상 10글자 미만으로 입력해주세요.");
      setIsUserId(false);
    } else {
      setUserIdMessage("올바른 이름 형식입니다.");
      setIsUserId(true);
      addUserInfo(e);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setUserEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setUserEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요");
      setIsUserEmail(false);
    } else {
      setUserEmailMessage("올바른 이메일 형식이에요 : )");
      setIsUserEmail(true);
      addUserInfo(e);
    }
  }, []);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setUserPw(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setUserPwMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsUserPw(false);
    } else {
      setUserPwMessage("올바른 비밀번호 입니다.");
      setIsUserPw(true);
      addUserInfo(e);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setUserRePw(passwordConfirmCurrent);

      if (userPw === passwordConfirmCurrent) {
        setUserRePwMessage("비밀번호가 일치합니다.");
        setIsUserRePw(true);
      } else {
        setUserRePwMessage("비밀번호가 일치하지 않습니다.");
        setIsUserRePw(false);
        addUserInfo(e);
      }
    },
    [userPw]
  );

  //이름
  const onChangeUserNm = useCallback((e) => {
    const userNmRegex = /^[a-z|A-Zㅣ가-힣]+$/;
    const userNmCurrent = e.target.value;

    setUserNm(userNmCurrent);
    if (!userNmRegex.test(userNmCurrent)) {
      setUserNmMessage(
        "한글과 영문 대 소문자를 사용하세요.(특수기호, 공백 사용불가)"
      );
      setIsUserNm(false);
    } else {
      setUserNmMessage("올바른 이름입니다.");
      setIsUserNm(true);
      addUserInfo(e);
    }
  });

  //별명
  const onChangeUserNickName = useCallback((e) => {
    const userNickNameCurrent = e.target.value;
    setUserNickName(userNickNameCurrent);
    addUserInfo(e);
  });

  //이메일 인증
  const onChangeEmailCheck = (e) => {
    const emailCheckCurrent = e.target.value;
    setUserEmailCheck(emailCheckCurrent);

    if (test === e.target.value) {
      setUserEmailCheckMessage("성공");
      setIsUserEmailCheckError(true);
    } else {
      setUserEmailCheckMessage("실패");
      setIsUserEmailCheckError(false);
    }
    console.log(userEmailCheck);
  };

  //전화번호
  const onChangeUserTel = useCallback((e) => {
    const userTelRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
    const userTelCurrent = e.target.value;
    setUserTel(userTelCurrent);

    if (!userTelRegex.test(userTelCurrent)) {
      setUserTelMessage(" - 을 입력해 주세요.");
      setIsUserTel(false);
    } else {
      setUserTelMessage("올바른 전화번호입니다.");
      setIsUserTel(true);
      addUserInfo(e);
    }
  });

  //우편번호
  const onChangeZipCode = (e) => {
    const zipCodeCurrent = e.target.value;
    setZipCode(zipCodeCurrent);
    addUserInfo(e);
  };

  //주소
  const onChangeFullAddress = (e) => {
    const fullAddressCurrent = e.target.value;
    setFullAddress(fullAddressCurrent);
    addUserInfo(e);
  };

  //상세주소
  const onChangeUserAddressDef = (e) => {
    const userAddressDefCurrent = e.target.value;
    setUserAddressDef(userAddressDefCurrent);
    addUserInfo(e);
  };

  //이용약관
  const onChangeUsingTerm = (e) => {
    setUsingTerm(e.target.checked);
    setIsUsingTerm(e.target.checked);
  };

  //개인정보 수집 이용
  const onChangeInfoTerm = (e) => {
    setInfoTerm(e.target.checked);
    setIsInfoTerm(e.target.checked);
  };

  //회원가입 버튼 클릭
  // const onSubmitJoinHandler = (e) => {
  //   e.preventDefault();

  //   const data = new FormData(e.target);
  //   const userId = data.get("userId");
  //   const userPw = data.get("userPw");
  //   const userEmail = data.get("userEmail");
  //   const userNm = data.get("userNm");
  //   const userNickName = data.get("userNickName");
  //   const userTel = data.get("userTel");
  //   const userZipcode = data.get("userZipcode");
  //   const userAddress = data.get("userAddress");
  //   const userAddressDef = data.get("userAddressDef");
  //   // multipart/form-data 이미지 헤더
  //   try {
  //     axios({
  //       method: "post",
  //       url: API_BASE_URL + "/api/user/joinTest",
  //       data: {
  //         userId: userId,
  //         userPw: userPw,
  //         userEmail: userEmail,
  //         userNm: userNm,
  //         userNickName: userNickName,
  //         userTel: userTel,
  //         userZipcode: userZipcode,
  //         userAddress: userAddress,
  //         userAddressDef: userAddressDef,
  //       },
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         navigate("/login");
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const onSubmitJoinHandler = (e) => {
    console.log({
      ...userInfo,

      userZipcode: zipCode,
      userAddress: fullAddress,
      userAddressDef: userAddressDef,
    });
    e.preventDefault();
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

      // headers: {
      //   Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      // },

      data: {
        ...userInfo,
        userId: userId,
        userEmail: userEmail,
        userZipcode: zipCode,
        userAddress: fullAddress,
        userAddressDef: userAddressDef,
      },
      // data: { ...userInfo, userZipCode: zonecodee, userAddress: fullAddresss },
    }).then((response) => {
      console.log(response);
      // window.location.href = "/login";
      navigate("/loginTest");
    });
  };

  const idCheck = () => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/checkId",
      data: { userId: userId },
    }).then((response) => {
      console.log(response);

      if (response.data === 1) {
        alert("사용 불가능한 아이디입니다.");
        // setCheckIdError(true);
        setIsIdCheckError(false);
      } else {
        alert("사용 가능한 아이디 입니다.");
        // setCheckIdError(false);
        setIsIdCheckError(true);
      }
    });
  };

  const emailConfirm = () => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/user/emailConfirm",
      data: { userEmail: userEmail },
    }).then((response) => {
      console.log(response);
      // setUserEmailCheck(response.data);
      console.log(response.data);
      setTest(response.data);
      // setUserEmailCheck(response.data);
      // console.log(test);
      // console.log(userEmailCheck);
      // return response;
    });
    // .then((response) => {
    //   console.log(test);
    //   if (test === userEmailCheck) {
    //     setUserEmailCheckMessage("성공");
    //     setIsUserEmailCheckError(true);
    //   } else {
    //     setUserEmailCheckMessage("실패");
    //     setIsUserEmailCheckError(false);
    //   }
    // });
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={onSubmitJoinHandler}>
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
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userId"
                      label="아이디"
                      name="userId"
                      autoFocus
                      value={userId}
                      onChange={onChangeName}
                    />
                    {userId.length > 0 && (
                      <span
                        className={`message ${isUserId ? "success" : "error"}`}
                      >
                        {userIdMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    type="button"
                    onClick={idCheck}
                    fullWidth
                    sx={{ mt: 1 }}
                    disabled={!isUserId}
                  >
                    중복 확인
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userEmail"
                      label="이메일"
                      name="userEmail"
                      autoComplete="email"
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
                <Grid item xs={4}>
                  <Button
                    type="button"
                    onClick={emailConfirm}
                    fullWidth
                    sx={{ mt: 1 }}
                    disabled={!isUserEmail}
                  >
                    이메일 인증
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      fullWidth
                      id="userEmailCheck"
                      label="이메일 코드 인증"
                      name="userEmailCheck"
                      value={userEmailCheck}
                      onChange={onChangeEmailCheck}
                    />
                    {userEmailCheck.length > 0 && (
                      <span
                        className={`message ${
                          isUserEmailCheckError ? "success" : "error"
                        }`}
                      >
                        {userEmailCheckMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      name="userPw"
                      label="비밀번호"
                      type="password"
                      id="userPw"
                      value={userPw}
                      onChange={onChangePassword}
                    />
                    {userPw.length > 0 && (
                      <span
                        className={`message ${isUserPw ? "success" : "error"}`}
                      >
                        {userPwMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      name="userRePw"
                      label="비밀번호 확인"
                      type="Password"
                      id="userRePw"
                      value={userRePw}
                      onChange={onChangePasswordConfirm}
                    />
                    {userRePw.length > 0 && (
                      <span
                        className={`message ${
                          isUserRePw ? "success" : "error"
                        }`}
                      >
                        {userRePwMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userNm"
                      label="이름"
                      name="userNm"
                      value={userNm}
                      onChange={onChangeUserNm}
                    />
                    {userNm.length > 0 && (
                      <span
                        className={`message ${isUserNm ? "success" : "error"}`}
                      >
                        {userNmMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userNickName"
                      label="별명"
                      name="userNickName"
                      value={userNickName}
                      onChange={onChangeUserNickName}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userTel"
                      label="전화번호"
                      name="userTel"
                      value={userTel}
                      onChange={onChangeUserTel}
                    />
                    {userTel.length > 0 && (
                      <span
                        className={`message ${isUserTel ? "success" : "error"}`}
                      >
                        {userTelMessage}
                      </span>
                    )}
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userZipcode"
                      label="우편번호"
                      name="userZipcode"
                      value={zipCode}
                      onChange={onChangeZipCode}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button id="userZipSearch" onClick={handleClick}>
                    주소 검색
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      required
                      fullWidth
                      id="userAddress"
                      label="주소"
                      name="userAddress"
                      value={fullAddress}
                      onChange={onChangeFullAddress}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="formbox">
                    <TextField
                      fullWidth
                      id="userAddressDef"
                      label="상세주소"
                      name="userAddressDef"
                      value={userAddressDef}
                      onChange={onChangeUserAddressDef}
                    />
                  </div>
                </Grid>
                {/*  const [usingTerm, setUsingTerm] = useState("");
               const [infoTerm, setInfoTerm] = useState(""); */}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={usingTerm}
                        color="primary"
                        onChange={onChangeUsingTerm}
                      />
                    }
                  />
                  <Link href="#">(필수) 이용약관에</Link> 동의합니다.
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={infoTerm}
                        color="primary"
                        onChange={onChangeInfoTerm}
                      />
                    }
                  />
                  <Link href="#">(필수) 개인정보 수집·이용에</Link> 동의합니다.
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
                disabled={
                  !(
                    isUserId &&
                    isUserPw &&
                    isUserRePw &&
                    isUserEmail &&
                    isUserNm &&
                    isUserTel &&
                    isUsingTerm &&
                    isInfoTerm &&
                    isIdCheckError &&
                    isUserEmailCheckError
                  )
                }
              >
                회원가입
              </Button>

              <hr />

              <div className="easy_login_name">간편 로그인</div>
              <br />
              <div className="easy_login">
                <div className="google_login">
                  <a href="https://accounts.google.com/ServiceLogin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <img
                      src={require("../../img/google_login.png")}
                      width="50"
                      height="50"
                      alt="t"
                    ></img>
                  </a>
                </div>
                <div className="kakao_login">
                  <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fcategory%3D166%26locale%3Dko%26service%3D52">
                    <img
                      src={require("../../img/kakao_login.png")}
                      width="50"
                      height="50"
                      alt="t"
                    ></img>
                  </a>
                </div>
                <div className="naver_login">
                  <a href="https://nid.naver.com/nidlogin.login">
                    <img
                      src={require("../../img/naver_login.png")}
                      width="50"
                      height="50"
                      alt="t"
                    ></img>
                  </a>
                </div>
              </div>
            </Box>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Join;
