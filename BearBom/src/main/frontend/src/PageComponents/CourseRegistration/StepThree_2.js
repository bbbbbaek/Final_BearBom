import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/courseRegistration.css";
//import NumberFormat from 'react-number-format';

const StepTwo_5 = ({ saveFormData }) => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [cost, setCost] = useState();

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

  useEffect(() => {
    setFormObj({ ...formObj, courseCost: cost });
  }, [cost]);

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
    <form id="step_two_5_form">
      <div className="content content1">
        <div className="contentName">Step.3 금액 및 일정</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                수강시간
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">수강시간을 설정해주세요.</p>
            </div>
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

          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                수강금액
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">클래스 수강비용을 설정해주세요.</p>
            </div>
            <div className="numCheck difSelect">
              <Typography>수강비용</Typography>
              {/* <NumberFormat */}
              <input
                className="runtimeInput"
                thousandSeparator={true}
                placeholder="숫자만 입력해주세요."
                onChange={(e) => setCost(e.target.value)}
                prefix={"$"}
                ></input>
              {/* /> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_5;
