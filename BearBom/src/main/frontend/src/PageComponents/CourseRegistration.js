
import React, { useState } from "react";
import CenteredTabs from "../PageComponents/CourseRegistration/AddCourseNav";
import StepOne from "./CourseRegistration/StepOne";
import StepTwo_1 from "./CourseRegistration/StepTwo_1"
import StepTwo_2 from "./CourseRegistration/StepTwo_2"
import CoPresentIcon from "@mui/icons-material/CoPresent";
import "../css/courseRegistration.css";

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

const CourseRegistration = () => {
  


  return (
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
            {/*<StepOne></StepOne>*/}
            {/*<StepTwo_1></StepTwo_1>*/}
            {/*<StepTwo_2></StepTwo_2>*/}
            <StepTwo_2></StepTwo_2>
          </div>
          {/*<div className="midStepBtn">
            <button>이전</button>
            <button>다음</button>
           </div>*/}
        </div>
      </div>
    </div>
  );
};
export default CourseRegistration;
