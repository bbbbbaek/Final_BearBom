import {
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../../css/courseRegistration.css";

const StepTwo_5 = () => {
  const [LecturerInfo, setLecturerInfo] = useState("");



  return (
    <>
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
                        onChange={setLecturerInfo}
                    ></textarea> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo_5;
