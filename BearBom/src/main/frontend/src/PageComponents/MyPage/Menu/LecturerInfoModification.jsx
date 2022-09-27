import React, { useEffect } from "react";
import TextEditor from "../../../ModuleComponents/TextEditor/TextEditor";
import "./lecturerinfomodification.scss";
import axios from "axios";
import { useState } from "react";
import ProfilePicture from "../../../ModuleComponents/ProfilePicture/ProfilePicture";
import Modal from "../../../ModuleComponents/Modal/Modal";
import defaultProfilePicture from "../../../images/defaultProfilePicture.png";
import { API_BASE_URL } from "../../../app-config";
import ResultNotFound from "../../../ModuleComponents/ResultNotFound/ResultNotFound";
import { onRequest } from "../../../ModuleComponents/UsefulFunctions/ApiService";
import { useRef } from "react";

const LecturerInfoModification = () => {
  const [fetchedData, setFetchedData] = useState();

  const [boardData, setBoardData] = useState("");
  const [modal, setModal] = useState(false);

  const [nickName, setNickName] = useState();
  const [formData, setFormData] = useState({});
  const profileRef = useRef();

  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getLecturerInfo",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data);
      setFetchedData(res.data);
    });
  }, []);

  const onClickSave = () => {
    alert("강사 프로필 수정이 완료되었습니다.");
    onRequest("/api/mypage/updateLecturerInfo", "post", {
      lecturerInfo: profileRef,
    });
  };
  console.log(profileRef);

  return (
    <>
      {/* {modal && <Modal modal={modal} setModal={setModal} />} */}
      {fetchedData ? (
        <div className="lecturerinfomdf">
          <h5>
            <strong>강사 프로필 수정</strong>
          </h5>
          <hr />
          <div className="body3">
            <div className="left">
              <img id="picture" src={defaultProfilePicture} alt="pp" />
              <span>aa</span>
              <button
                onClick={
                  onClickSave
                  // setModal(!modal);
                }
              >
                등록하기
              </button>
            </div>
            <div></div>
            <div className="right">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                ref={profileRef}
                defaultValue={fetchedData.lecturerInfo}
              ></textarea>
              {/* <TextEditor boardData={boardData} setBoardData={setBoardData} /> */}
            </div>
          </div>
        </div>
      ) : (
        <ResultNotFound />
      )}
    </>
  );
};

export default LecturerInfoModification;
