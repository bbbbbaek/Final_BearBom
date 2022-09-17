import React from "react";
import TextEditor from "../../../ModuleComponents/TextEditor";
import "./lecturerinfomodification.scss";
import axios from "axios";
import { useState } from "react";
import ProfilePicture from "../../../ModuleComponents/ProfilePicture";

const LecturerInfoModification = () => {
  const [boardData, setBoardData] = useState("");
  return (
    <>
      <h5>
        <strong>강사 프로필 수정</strong>
      </h5>
      <hr />
      <div className="lecturerinfomdf-wrapper">
        <div className="lecturerinfomdf-left">
          <ProfilePicture />
          <input type="text" placeholder="닉네임을 입력하세요" />
        </div>
        <div className="lecturerinfomdf-right">
          <TextEditor boardData={boardData} setBoardData={setBoardData} />
        </div>
      </div>
    </>
  );
};

export default LecturerInfoModification;
