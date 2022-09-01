import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import React, { useState } from "react";
  import "../../css/courseRegistration.css";
import KakaoAPI from "./RegistrationComponents/KakaoAPI";
  
  const StepThree_1 = () => {
    const [location, setLocation] = useState("");
  
    const handleChangeLoca = (event) => {
      setLocation(event.target.value);
    };
  
    return (
      <>
        <div className="content content1">
          <div className="contentName">Step.3 금액 및 일정</div>
          <div className="contentWrap">
            <div className="contentDetail">
              <div className="nameWrap">
                <h5 className="detailName">
                  클래스 일정 및 인원
                  <div className="nameUnderbar"></div>
                </h5>
              </div>
              <div className="detailEx">
                <p className="datilNameInfo">클래스의 일정과 수강인원을 설정해 주세요</p>
              </div>
              <div className="detail">
                <div className="selectBox">
                  <FormControl
                    sx={{ minWidth: 280 }}
                    style={{ marginLeft: 20 }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-label">
                      지역선택
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={location}
                      label="Cate"
                      onChange={handleChangeLoca}
                    >
                      <MenuItem value={201}>전체</MenuItem>
                      <MenuItem value={202}>서울</MenuItem>
                      <MenuItem value={203}>경기</MenuItem>
                      <MenuItem value={204}>인천</MenuItem>
                      <MenuItem value={205}>강원</MenuItem>
                      <MenuItem value={206}>대구</MenuItem>
                      <MenuItem value={207}>부산</MenuItem>
                      <MenuItem value={208}>경상북도</MenuItem>
                      <MenuItem value={209}>경상남도</MenuItem>
                      <MenuItem value={210}>울산</MenuItem>
                      <MenuItem value={211}>광주</MenuItem>
                      <MenuItem value={212}>전라북도</MenuItem>
                      <MenuItem value={213}>전라남도</MenuItem>
                      <MenuItem value={214}>세종</MenuItem>
                      <MenuItem value={215}>제주</MenuItem>
                      <MenuItem value={216}>충청북도</MenuItem>
                      <MenuItem value={217}>충청남도</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default StepThree_1;
  