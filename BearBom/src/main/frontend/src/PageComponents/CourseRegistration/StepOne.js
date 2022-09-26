import { Button, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import "../../css/courseRegistration.css";
import SelectButton from "./RegistrationComponents/SelectButton";
import CourseStore from "./CourseStore";
import { width } from "@mui/system";

const StepOne = ({ formData, saveFormData }) => {
  const [buttonValue, setButtonValue] = useState(2);
  const [number, setNumber] = useState();
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
  }, [formObj]);

  useEffect(() => {
      // if (number.length === 10) {
      //   setNumber(number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
      // }
      // if (number.length === 13) {
      //   setNumber(number.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
      // }
    setFormObj({ ...formObj, userTel: number });
  }, [number]);

  useEffect(() => {
    if (buttonValue) setFormObj({ ...formObj, courseOnOff: "on" });
    else setFormObj({ ...formObj, courseOnOff: "off" });
  }, [buttonValue]);

  const handlePhoneNum = (event) => {
   event.target.value = event.target.value
   .replace(/[^0-9]/g, '')
   .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setNumber(event.target.value);
    //CourseStore.setState({phoneNum:event.target.value})
  };

  useEffect(() => {
    setNumber(formData.userTel);
    if (formData.courseOnOff==="off"){
      setButtonValue(false);
    } 
  },[]);


  return (
    <form id="step_one_form">
      <div className="content content1">
        <div className="contentName">Step.1 호스트 정보 및 클래스 유형</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                연락처 확인
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">
                클래스 등록 전 호스트님의 연락가능한 번호를 적어주세요.
              </p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>전화번호</p>
              </div>
              <div className="inputButtonWrap">
                <div className="inputWrap">
                  <input
                    className="phoneNum"
                    name="phoneNum"
                    type="text"
                    placeholder="' - '를 제외하고 입력해주세요"
                    value={number}
                    maxlength="13"
                    onChange={handlePhoneNum}
                  ></input>
                </div>
                {/* <Button //인증문자 전송버튼
                  variant="contained"
                  size="small"
                  color="primary"
                  style={{ minWidth: 80 }}
                >
                  문자전송
                </Button> */}
              </div>
              <p className="numCheck1 inputWar">
                * 실제 연락 가능한 번호를 적어주세요.
              </p>
            </div>
          </div>
          <div className="contentDetail">
            <div className="detail">
              <div className="nameWrap">
                <h5 className="detailName">
                  클래스 유형
                  <div className="nameUnderbar"></div>
                </h5>
              </div>
              <div className="detailEx">
                <p className="datilNameInfo">클래스 유형을 선택해 주세요.</p>
              </div>
              <div className="detail1content selectButtonBox">
                <ToggleButtonGroup>
                  <SelectButton
                    onClick={() => setButtonValue(true)}
                    selected={buttonValue}
                    //style={width=300}
                  >
                    온라인 클래스
                  </SelectButton>
                  <div className="btnSpace"></div>
                  <SelectButton
                    selected={!buttonValue}
                    onClick={() => setButtonValue(false)}
                  >
                    오프라인 클래스
                  </SelectButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepOne;
