import {
    Button, ToggleButtonGroup,
  } from "@mui/material";
import React, { useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import "../../css/courseRegistration.css";
import SelectButton from "./RegistrationComponents/SelectButton";


  const StepOne = () => {

    const [buttonValue, setButtonValue] = useState(true);

    return (
        <>
            <div className="content content1">
              <div className="contentName">Step.1 인증 및 클래스 유형</div>
              <div className="contentWrap">
                <div className="contentDetail">
                  <div className="nameWrap">
                    <h5 className="detailName">
                      번호인증
                      <div className="nameUnderbar"></div>
                    </h5>
                  </div>
                  <div className="detailEx">
                    <p className="datilNameInfo">
                      클래스 등록 전 호스트님을 인증해주세요.
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
                          type="text"
                          placeholder="' - '를 제외하고 입력해주세요"
                        ></input>
                      </div>
                      <Button variant="contained" size="small" color="primary" style={{minWidth:80}}>
                        문자전송
                      </Button>
                    </div>
                    <p className="numCheck1 inputWar">
                      *번호 인증은 최초 1회만 하시면 됩니다.
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
                        >
                            온라인 클래스
                        </SelectButton>
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
          </>
      );
    };
    export default StepOne;