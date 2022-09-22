import React, { useEffect, useMemo, useState } from "react";
import useStore from "zustand";
import CenteredTabs from "../PageComponents/CourseRegistration/AddCourseNav";
import StepOne from "./CourseRegistration/StepOne";
import StepTwo_1 from "./CourseRegistration/StepTwo_1";
import StepTwo_2 from "./CourseRegistration/StepTwo_2";
import StepTwo_3 from "./CourseRegistration/StepTwo_3";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import "../css/courseRegistration.css";
import StepTwo_4 from "./CourseRegistration/StepTwo_4";
import StepTwo_5 from "./CourseRegistration/StepTwo_5";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import StepTwo_6 from "./CourseRegistration/StepTwo_6";
import StepThree_1 from "./CourseRegistration/StepThree_1";
import StepThree_2 from "./CourseRegistration/StepThree_2";
import CourseStore from "./CourseRegistration/CourseStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//const [formData1, setFormData1] = useState({});

// const onClickNexButton = (formData) => {
//   setFormData1(formData);
// }

/////////////////////////////////////////////////////////////////////////////////////////
//페이지 이동 시 데이터 합칠 때 - + 컨트롤러에서 받을때 엔티티를 Course, CourseFile을 같이 선언해서 키 값 따라 저장되는 지 확인 후 사용
//안될경우 모카클래스처럼 스탭 별 네비게이터 생성 후 한페이지에서 값을 따로 최종단계에서 저장하는것으로
// const [formData, setFormData] = useState({});

// const handleSubmit = (e) => {
//     const addformData = new FormData(e.target)
//     const newFormData = {
//         ...formData,
//         addformData
//     }
//     setFormData(newFormData);
// }////////////////////////////////////////////////////////////////////////////////

const theme = createTheme({
  palette: {
    primary: {
      //light: '#111',
      main: "#958a78 ",
      //dark: '#555',
      //contrastText: '#fff',
    },
    secondary: {
      //light: '#ff7961',
      main: "#675d58 ",
      //dark: '#ba000d',
      //contrastText: '#000',
    },
    success: {
      main: "#453b36 ",
    },
  },
});

const CourseRegistration = () => {
  const navigete = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    if (
      accessToken === null ||
      accessToken === "" ||
      typeof accessToken === "undefined"
    ) {
      navigete("/login");
    }
  }, []);

  // const {
  //   nm,
  //   onOff,
  //   level,
  //   runtime,
  //   levelContent,
  //   address,
  //   addressDef,
  //   zipcode,
  //   min,
  //   max,
  // } = CourseStore();

  const courseInfo = {};

  const [currentStep, setCurrentStep] = useState(0);
  //const currentStep = 0;

  const returnButtonValue = useMemo(() => {
    if (currentStep === 8) {
      return "등록";
    }
    return "다음";
  }, [currentStep]);

  const [formData, setFormData] = useState({});

  const saveFormData = (obj) => {
    const newFormData = {
      ...formData,
      ...obj
    }
    setFormData(newFormData);
  }

  const handleSubmit = (e) => {
    console.log("등록하기 전송시작");
    console.log(formData);//axios사용 시 
      axios({
        url: "http://localhost:8080/api/course/courseRegistration",
        method: "POST",
        data: formData,
        //403 에러는 보안관련 에러
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
          "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
        },
      })
        .then((response) => {})
        .catch((e) => {
          console.log(e);
        });
  };

  const handleStepPlus = () => {
    setCurrentStep(currentStep + 1);
    console.log(formData);
  };

  const handleStepMinus = () => {
    setCurrentStep(currentStep - 1);
    //console.log(formData);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
        <div className="addclass">
          <div className="top">
            <div className="subTitle">
              <CoPresentIcon fontSize="large" color="action"></CoPresentIcon>
              <h4>&nbsp;등록페이지</h4>
            </div>
            <div className="progressbar">
              <CenteredTabs></CenteredTabs>
            </div>
          </div>
          <div className="fullline"></div>
          <div className="middle">
            <div className="leftbar">
              <div className="step0 step">Step 1. 인증 및 클래스 유형</div>
              <div className="step">Step 2. 클래스 소개</div>
              <div className="step">Step 3. 금액 및 일정</div>
              <div className="step">Step 4. 클래스 위치</div>
            </div>
            <div className="midline" />
            <div className="midRight">
              <div className="midContent">
                {
                  [
                    <StepOne formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_1 formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_2 formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_3 formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_4 formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_5 formData={formData} saveFormData={saveFormData}/>,
                    <StepTwo_6 formData={formData} saveFormData={saveFormData}/>,
                    <StepThree_1 formData={formData} saveFormData={saveFormData}/>,
                    <StepThree_2 formData={formData} saveFormData={saveFormData}/>,
                  ][currentStep]
                }
              </div>
              <div className="midStepBtn">
                <div className="stepBtnBox">
                  {currentStep > 0 && (
                    <Button
                      variant="outlined"
                      size="large"
                      disabled={currentStep <= 0}
                      color="secondary"
                      onClick={handleStepMinus}
                    >
                      이전
                    </Button>
                  )}
                  {currentStep < 8 && (
                  <Button
                    variant="outlined"
                    color="success"
                    size="large"
                    disabled={currentStep >= 8}
                    style={{ marginLeft: 20, background: "#dbd7d3" }}
                    onClick={handleStepPlus}
                  >
                    {returnButtonValue}
                  </Button>
                  )}
                  {currentStep >= 8 && (
                  <Button
                    variant="outlined"
                    color="success"
                    size="large"
                    disabled={currentStep < 8}
                    style={{ marginLeft: 20, background: "#dbd7d3" }}
                    type="button"
                    onClick={handleSubmit}
                    
                  >
                    등록
                  </Button>)}
                  {/* <div>{currentStep}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </ThemeProvider>
    </>
  );
};
export default CourseRegistration;