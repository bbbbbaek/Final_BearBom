import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import "../../css/courseRegistration.css";
import SelectButton from "./RegistrationComponents/SelectButton";

const StepTwo_1 = ({formData, saveFormData}) => {
  const [category, setCategory] = useState("");
  const [className, setClassName] = useState();
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
     saveFormData(formObj);
  }, [formObj]);

  useEffect(() => {
   setFormObj({...formObj, "courseCategory": category})
  }, [category]);

  useEffect(() => {
   setFormObj({...formObj, "courseNm": className})
  }, [className]);

  ///////////////////////////////////////////

  const handleChangeCate = (event) => {
    setCategory(event.target.value);
  };

  const handleClassName = (e) => {
    setClassName(e.target.value);
  }

  useEffect(() => {
    setClassName(formData.courseNm);
    setCategory(formData.courseCategory);
  },[]);


  //const [menuItem, setMenuItem] = useState([]);
  //axios => setMenuItem

  return (
    <form id="step_two_1_form">
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                클래스 제목
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">아래에 클래스 제목을 입력해 주세요</p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>클래스명</p>
              </div>
              <div className="inputWrap">
                <input
                  className="classTitle inputBox"
                  type="text"
                  placeholder="클래스 제목 (최대100자)"
                  value={className}
                  onChange={handleClassName}
                ></input>
              </div>
            </div>
          </div>
          <div className="contentDetail">
            <div className="detail">
              <div className="nameWrap">
                <h5 className="detailName">
                  카테고리
                  <div className="nameUnderbar"></div>
                </h5>
              </div>
              <div className="selectBox">
                <FormControl
                  sx={{ minWidth: 280 }}
                  style={{ marginLeft: 20 }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Cate"
                    onChange={handleChangeCate}
                  >
                    {/**{menuItem.map(menu => )} */}
                    <MenuItem value={101}>핸드메이드</MenuItem>
                    <MenuItem value={102}>쿠킹</MenuItem>
                    <MenuItem value={103}>플라워</MenuItem>
                    <MenuItem value={104}>드로잉</MenuItem>
                    <MenuItem value={105}>음악</MenuItem>
                    <MenuItem value={106}>요가</MenuItem>
                    <MenuItem value={107}>필라테스</MenuItem>
                    <MenuItem value={108}>레져</MenuItem>
                    <MenuItem value={109}>뷰티</MenuItem>
                    <MenuItem value={110}>반려동물</MenuItem>
                    <MenuItem value={111}>체험</MenuItem>
                    <MenuItem value={112}>자기계발</MenuItem>
                  </Select>
                </FormControl>
                {/*<FormControl sx={{ minWidth: 240 }}>
                        <InputLabel>지역</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={location}
                        label="loca"
                        onChange={handleChangeLoca}
                        >
                        <MenuItem value={1}>서울</MenuItem>
                        <MenuItem value={2}>경기</MenuItem>
                        <MenuItem value={3}>부산</MenuItem>
                        </Select>
                     </FormControl>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_1;
