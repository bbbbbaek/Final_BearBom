import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import "../../css/courseRegistration.css";
import SelectButton from "./RegistrationComponents/SelectButton";
import KakaoAPI from "./RegistrationComponents/KakaoAPI";
import KakaoAPI2 from "./RegistrationComponents/KakaoAPI2";
import CourseStore from "./CourseStore";

const StepTwo_6 = () => {

  const [location, setLocation] = useState("");

  const handleChangeLoca = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                위치정보
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">클래스의 위치를 알려주세요</p>
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
          <div className="contentDetail">
          <div className="numCheck">
              <div className="datailLabel">
                <p>상세위치</p>
              </div>
              <div className="kakaoPostCode">
                <>{/* 카카오 주소, 지도 API 시작 */}

                  <KakaoAPI/>
                  <KakaoAPI2/>{/*지도 표출 안됨 수정중*/}
                </>{/* 카카오 주소, 지도 API 종료 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo_6;
