import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import 'react-date-range/dist/styles.css'; // 캘린더 main style file
import 'react-date-range/dist/theme/default.css'; // 캘린더 theme css file
import "../../css/courseRegistration.css";
import CourseStore from "./CourseStore";
import RegClassCalendar from "./RegistrationComponents/RegClassCalendar";


const StepThree_1 = ({formData, saveFormData}) => {
  //const { min } = CourseStore();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
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

 const handleStTime = (event) => {
  setStartTime(event.target.value);
};

const handleEndTime = (event) => {
  setEndTime(event.target.value);
};

const range = (start, stop, step) => {
  let a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
};

  return (
    <form id="step_three_1_form">
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
                <div><RegClassCalendar saveFormData={saveFormData}/></div>
                <p className="inputWar">*일정 지정 시 유의사항 적는곳.</p>
              </div>
              <div className="contentDetail">
            
            <div className="numCheck lec">
              <div className="timeBox">
              <FormControl
                sx={{ minWidth: 150 }}
                style={{ marginLeft: 20 }}
                size="small"
              >
                <InputLabel id="demo-simple-select-label">시작시간</InputLabel>
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
                <InputLabel id="demo-simple-select-label">종료시간</InputLabel>
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
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default React.memo(StepThree_1);
