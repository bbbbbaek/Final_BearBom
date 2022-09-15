import {
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/courseRegistration.css";

const StepTwo_5 = ({saveFormData}) => {
  const [lecturerInfo, setLecturerInfo] = useState("");
  const [formObj, setFormObj] = useState({});

  const userId = localStorage.getItem("USER_ID") //로컬스토리지 가져오는것

  useEffect(() => {
    saveFormData(formObj);
 }, [formObj]);

 useEffect(() => {
  setFormObj({...formObj, "lecturerInfo": lecturerInfo, "userId" : userId})
 }, [lecturerInfo]);


  return (
    <form id="step_two_5_form">
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                강사소개
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">강사님을 소개해주세요.</p>
            </div>
            <div className="numCheck lec">
              <textarea className="lecInput"
                        multiline
                        placeholder={'소개글을 작성해 주세요\n최소 40자 이상'}
                        onChange={(e) => setLecturerInfo(e.target.value)}
                    ></textarea> 
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_5;
