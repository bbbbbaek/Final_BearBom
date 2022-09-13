import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import "../../css/courseRegistration.css";
import CourseStore from "./CourseStore";

const range = (start, stop, step) => {
  let a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
};

const StepThree_1 = () => {
  const { min } = CourseStore();
  const [minPeople, setMinPeople] = useState();
  const [maxPeople, setMaxPeople] = useState();

  const handleMinPeople = (event) => {
    setMinPeople(event.target.value);
    CourseStore.setState({ min: event.target.value });
  };

  const handleMaxPeople = (event) => {
    setMaxPeople(event.target.value);
  };

  return (
    <>
      {min}
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
              <p className="datilNameInfo">
                클래스의 일정과 수강인원을 설정해 주세요
              </p>
            </div>
            <div className="detail">
              <div className="numCheck">
                <div className="datailLabel">
                  <p>클래스 일정</p>
                </div>
                <div>여기에 캘린더 추가</div>
                <p className="inputWar">*일정 지정 시 유의사항 적는곳.</p>
              </div>
              <div className="numCheck">
                <div className="datailLabel">
                  <p>클래스 인원</p>
                </div>
                <div className="minMaxBox">
                  <FormControl
                    sx={{ minWidth: 150 }}
                    style={{ marginLeft: 20 }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-label">
                      최소 인원
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={minPeople}
                      label="Cate"
                      onChange={handleMinPeople}
                    >
                      <MenuItem disabled value={0}>
                        최소 인원
                      </MenuItem>
                      {range(1, 20, 1).map((item) => (
                        <MenuItem value={item}>{item}명</MenuItem>
                      ))}
                      {range(30, 100, 10).map((item) => (
                        <MenuItem value={item}>{item}명</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div>/</div>
                  <FormControl
                    sx={{ minWidth: 150 }}
                    style={{ marginLeft: 0 }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-label">
                      최대 인원
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={maxPeople}
                      label="Cate"
                      onChange={handleMaxPeople}
                    >
                      <MenuItem disabled value={0}>
                        최대 인원
                      </MenuItem>
                      {range(1, 20, 1).map((item) => (
                        <MenuItem value={item}>{item}명</MenuItem>
                      ))}
                      {range(30, 100, 10).map((item) => (
                        <MenuItem value={item}>{item}명</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <p className="inputWar">*인원 지정 시 유의사항 적는곳.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepThree_1;
