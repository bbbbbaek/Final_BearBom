import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import "react-date-range/dist/styles.css"; // 캘린더 main style file
import "react-date-range/dist/theme/default.css"; // 캘린더 theme css file
import "../../css/courseRegistration.css";
import CourseStore from "./CourseStore";
import RegClassCalendar from "./RegistrationComponents/RegClassCalendar";

const StepThree_1 = ({ formData, saveFormData }) => {
  //const { min } = CourseStore();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
  }, [formObj]);

  useEffect(() => {
    setFormObj({ ...formObj, courseStTime: startTime });
  }, [startTime]);

  useEffect(() => {
    setFormObj({ ...formObj, courseEndTime: endTime });
  }, [endTime]);

  const range = (start, stop, step) => {
    let a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return a;
  };

  useEffect(() => {
    setStartTime(formData.courseStTime);
    setEndTime(formData.courseEndTime);
  },[]);

  const handleStTime = (event) => {
    if(event.target.value > endTime){
      alert("시작시간은 종료시간 이전으로 설정해주세요.")
    }else{
    setStartTime(event.target.value);
  }
  };

  const handleEndTime = (event) => {
    if(event.target.value < startTime){
      alert("종료시간은 시작시간 이후로 설정해주세요.")
    }else{
    setEndTime(event.target.value);
    }
  };

  return (
    <form id="step_three_1_form">
      <div className="content content1">
        <div className="contentName">Step.3 금액 및 일정</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                클래스 일정
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">
                클래스의 시작/종료일과 강의시간을 설정해 주세요
              </p>
            </div>
            <div className="stepThreeDetail">
            <div className="stepThreeDetail">
                <div className="stepThree lec">
                  <div className="timeBox">
                    <FormControl
                      sx={{ minWidth: 150 }}
                      style={{ marginLeft: 20 }}
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-label">
                        시작시간
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={startTime}
                        label="Cate"
                        onChange={handleStTime}
                      >
                        <MenuItem disabled value={0}>
                          시작시간
                        </MenuItem>
                        {range(1, 24, 1).map((item) => (
                          <MenuItem value={item}>{item}:00</MenuItem>
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
                        종료시간
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={endTime}
                        label="Cate"
                        onChange={handleEndTime}
                      >
                        <MenuItem disabled value={0}>
                          종료시간
                        </MenuItem>
                        {range(1, 24, 1).map((item) => (
                          <MenuItem value={item}>{item}:00</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="stepThree">
                {/* <div className="datailLabel">
                  <p>클래스 일정</p>
                </div> */}
                <div>
                  <RegClassCalendar formData={formData} saveFormData={saveFormData} />
                </div>
                <p className="inputWar">*일정 지정 시 특이사항이 있는 날짜는 반드시 상세내용에 기재.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default React.memo(StepThree_1);
