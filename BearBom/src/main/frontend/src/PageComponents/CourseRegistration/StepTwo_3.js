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
import Editor from "./RegistrationComponents/Editor";


const StepTwo_3 = ({saveFormData}) => {
  const [contents, setContents] = useState();
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
 }, [formObj]);

 useEffect(() => {
  setFormObj({...formObj, "contents": contents})
 }, [contents]);

  // const [desc, setDesc] = useState('');
  // function onEditorChange(value) {
  //     setDesc(value)
  // }

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <form id="step_two_3_form">
      <div className="content content1">
        <div className="contentName">Step.2 클래스 소개</div>
        <div className="contentWrap">
          <div className="contentDetail">
            <div className="nameWrap">
              <h5 className="detailName">
                상세내용
                <div className="nameUnderbar"></div>
              </h5>
            </div>
            <div className="detailEx">
              <p className="datilNameInfo">
                상세내용을 작성해주세요
              </p>
            </div>
            <div className="numCheck">
              <div className="datailLabel">
                <p>클래스 상세내용</p>
              </div>
              <div className="inputWrap inputHfix">
                <div>
                  {/*<Editor value={desc} onChange={onEditorChange} />*/}
                  에디터 추가중
                  <textarea value={contents} onChange={handleContents}></textarea>
                </div>
              </div>
              <p className="inputWar">*5줄 이상 작성해 주세요.</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default StepTwo_3;
