import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import "../css/courseRegistration.css";
import CenteredTabs from "../PageComponents/CourseRegistration/AddCourseNav";

//const [formData1, setFormData1] = useState({});

// const onClickNexButton = (formData) => {
//   setFormData1(formData);
// }

const CourseRegistration = (/*{onClickNexButton}*/) => {
  //const formData = {};

  // const changeInput = e => {
  //   formData[e.target.name] = e.target.value;
  //   onClickNexButton(formData);
  // }

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const CourseRegistration = () => {
    return (
      <>
        <div className="top">
          <h1>등록페이지</h1>
          <div className="progressbar">
            <CenteredTabs></CenteredTabs>
          </div>
        </div>
        <div className="middle">
          <div className="leftbar">
            <div>1. 인증 및 클래스 유형</div>
            <div>2. 클래스 소개</div>
            <div>3. 금액 및 일정</div>
          </div>
          <div className="content content1">
            <div className="contentName">
              <h3>Step.1 인증 및 클래스 유형</h3>
            </div>
            <div className="checkHost">
              <div>
                번호인증
                <div>클래스 등록 전 호스트님을 인증해주세요</div>
                <div className="numCheck">
                  <p>전화번호</p>
                  <div>
                    <input
                      className="phoneNum"
                      type="text"
                      placeholder="' - '를 제외하고 입력해주세요"
                    ></input>
                    <Button variant="contained" size="small">
                      인증번호 받기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentDetail">
              <div className="detail1">
                <div className="detail1name"> 강의유형</div>
                <div className="detail1content">
                  <Button variant="contained" size="small">
                    온라인
                  </Button>
                  <Button variant="contained" size="small">
                    오프라인
                  </Button>
                </div>
              </div>
            </div>
            {/* </div>
        <div className="content content2"> */}
            <div className="contentName">
              <h3>Step.2 클래스 소개</h3>
            </div>
            <div className="titleAndCate">
              <div>클래스 제목과 카테고리를 등록해주세요</div>
              <div className="detail2">
                <div className="detail2name">클래스명</div>
                <div className="detail2content">
                  <input
                    type="text"
                    placeholder="클래스 명을 입력해 주세요"
                  ></input>
                </div>
              </div>
              <div className="detail3">
                <div className="detail3name">
                  카테고리와 지역을 선택해 주세요
                </div>
                <div className="detail3content">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
};
export default CourseRegistration;
