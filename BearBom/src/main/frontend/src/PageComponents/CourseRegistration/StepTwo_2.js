import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/courseRegistration.css";
import ThumbnailInput from "./RegistrationComponents/ThumbnailInput";
import FileInput from "./RegistrationComponents/FileInput"

const StepTwo_2 = ({saveFormData}) => {
  const [imageList, setImageList] = useState([]);
  const [formObj, setFormObj] = useState({});

  const changeImages = (file) => {
    if(typeof file !== "undefined") {
      const fileList = [...imageList];
      fileList.push(file);
      setImageList(fileList);
    }
  }

  useEffect(()=> {
    if(imageList.length !== 0)
      setFormObj({...formObj, imageList: imageList});
  }, [imageList]);

  useEffect(() => {
     saveFormData(formObj);
  }, [formObj]);

  return (
    <form id="step_two_2_form">
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
                <ThumbnailInput changeImages={changeImages} />
              </div>
              <p className="inputWar">*이미지 등록시 유의사항.</p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>추가 이미지 - 클래스에 대한 추가 이미지</p>
              </div>
              <div className="inputWrap inputHfix">
                <FileInput changeImages={changeImages} saveFormData={saveFormData}/>
              </div>
              <p className="inputWar">*최대 4장 까지 등록 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_2;
