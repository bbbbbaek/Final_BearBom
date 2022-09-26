import React from "react";
import TextEditor from "../../../ModuleComponents/TextEditor/TextEditor";
import "./lecturerinfomodification.scss";
import axios from "axios";
import { useState } from "react";
import ProfilePicture from "../../../ModuleComponents/ProfilePicture/ProfilePicture";
import Modal from "../../../ModuleComponents/Modal/Modal";

const LecturerInfoModification = () => {
  const [boardData, setBoardData] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <div className="lecturerinfomdf">
        <h5>
          <strong>강사 프로필 수정</strong>
        </h5>
        <hr />
        <div className="body3">
          <div className="left">
            <ProfilePicture />
            <span>현재 이름</span>
            <input type="text" placeholder="변경할 닉네임을 입력하세요" />
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              등록하기
            </button>
          </div>
          <div className="right">
            <TextEditor boardData={boardData} setBoardData={setBoardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LecturerInfoModification;
