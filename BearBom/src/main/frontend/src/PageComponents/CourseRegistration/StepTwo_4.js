import {
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/courseRegistration.css";

const StepTwo_4 = ({formData, saveFormData}) => {
  const [difficulty, setDifficulty] = useState("");
  const [durationTime, setDurationTime] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
 }, [formObj]);

 useEffect(() => {
  setFormObj({...formObj, "courseLevel": difficulty})
 }, [difficulty]);

 useEffect(() => {
  setFormObj({...formObj, "courseRuntime": durationTime})
 }, [durationTime]);
 
 useEffect(() => {
  setFormObj({...formObj, "courseLevelContent": curriculum})
 }, [curriculum]);

  const MyButton = ({ children, onClick, selected, value }) => {
    return (
      <Button
        value={value}
        onClick={onClick}
        color={selected ? "secondary" : "primary"}
        style={
          selected
            ? { background: "#edeae7", minWidth: 110, minHeight: 48 }
            : { minWidth: 110, minHeight: 48 }
        }
        variant="outlined"
      >
        {children}
      </Button>
    );
  };

  useEffect(() => {
    setDifficulty(formData.courseLevel);
    setDurationTime(formData.courseRuntime);
    setCurriculum(formData.courseLevelContent);
  },[]);


  return (
    <form id="step_two_4_form">
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                커리큘럼
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">커리큘럼을 자유롭게 작성해주세요</p>
            </div>
            <div className="numCheck difSelect">
              <Typography>난이도</Typography>
              <Stack direction="row" spacing={2}>
                <MyButton
                  key={1}
                  value={difficulty}
                  onClick={() => setDifficulty("입문")}
                  selected={difficulty === "입문"}
                >
                  입문
                </MyButton>
                <MyButton
                  key={2}
                  value={difficulty}
                  onClick={() => setDifficulty("중급")}
                  selected={difficulty === "중급"}
                >
                  중급
                </MyButton>
                <MyButton
                  key={3}
                  value={difficulty}
                  onClick={() => setDifficulty("고급")}
                  selected={difficulty === "고급"}
                >
                  고급
                </MyButton>
              </Stack>
              {/*<p className="inputWar">*40자 이상 작성해주세요.</p>*/}
            </div>
            <div className="numCheck difSelect">
              <Typography>소요시간</Typography>
              <input className="runtimeInput"
                        type='number'
                        onChange={(e) => setDurationTime(e.target.value)}
                        placeholder="소요 시간을 입력 해주세요"
                        value={durationTime}
                    ></input> 
            </div>
            <div className="numCheck culi">
              <Typography>커리큘럼</Typography>
              <textarea className="culiInput"
                        multiline
                        placeholder={'커리큘럼을 자유롭게 작성해 주세요\n최대 600자'}
                        onChange={(e) => setCurriculum(e.target.value)}
                        value={curriculum}
                    ></textarea> 
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_4;
