import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import "../../css/courseRegistration.css";
import ThumbnailInput from "./RegistrationComponents/ThumbnailInput";

const StepTwo_2 = () => {
  return (
    <>
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                이미지
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">
                클래스를 대표하는 썸네일 이미지를 등록해주세요
              </p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>대표 이미지 - 썸네일</p>
              </div>
              <div className="inputWrap inputHfix">
                <ThumbnailInput />
              </div>
              <p className="inputWar">*이미지 등록시 유의사항.</p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>추가 이미지 - 최대 4개까지 등록 가능함</p>
              </div>
              <div className="inputWrap inputHfix">
                <ThumbnailInput />
              </div>
              <p className="inputWar">*이미지 등록시 유의사항.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepTwo_2;
