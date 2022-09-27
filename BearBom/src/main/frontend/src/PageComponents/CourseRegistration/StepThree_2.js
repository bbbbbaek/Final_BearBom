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

const StepTwo_5 = ({ formData, saveFormData }) => {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [cost, setCost] = useState();

  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
  }, [formObj]);


  useEffect(() => {
    setFormObj({ ...formObj, courseCost: cost });
  }, [cost]);

  useEffect(() => {
    if(max<min&&!(max==0)){
      window.alert("최소 인원은 최대 인원보다 클 수 없습니다.")
    }else{
    setFormObj({...formObj, "courseMin": min})
    }
   }, [min]);
  
   useEffect(() => {
    if(max<min){
      window.alert("최대 인원은 최소 인원보다 적을 수 없습니다.")
    }else{
    setFormObj({...formObj, "courseMax": max})
    }
   }, [max]);
  
    const handleMinPeople = (event) => {
      setMin(event.target.value);
    };
  
    const handleMaxPeople = (event) => {
      setMax(event.target.value);
    };
    
const range = (start, stop, step) => {
  let a = [start],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
};

useEffect(() => {
  setMin(formData.courseMin);
  setMax(formData.courseMax);
  setCost(formData.courseCost)
},[]);

const inputPriceFormat = (e) => {
  const str=e;
  const comma = (str) => {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  };
  const uncomma = (str) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  };
  return comma(uncomma(str));
};

  return (
    <form id="step_two_5_form">
      <div className="content content1">
        <div className="contentName">Step.3 금액 및 인원</div>
        <div className="contentWrap">
          <div className="nameWrap">
              <h5 className="detailName">
                수강인원
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx editDetailEx">
              <p className="datilNameInfo">수강인원을 설정해주세요.</p>
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
                      value={min}
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
                      value={max}
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
                <p className="inputWar">*최대 인원은 최소 인원 수 보다 많아야 합니다.</p>
              </div>
          <div className="contentDetail">
            <div className="nameWrap marTop">
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
              <input
                className="runtimeInput"
                thousandSeparator={true}
                placeholder="숫자만 입력해주세요."
                onChange={(e) => setCost(e.target.value)}
                prefix={"$"}
                value={cost}
                 ></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_5;
