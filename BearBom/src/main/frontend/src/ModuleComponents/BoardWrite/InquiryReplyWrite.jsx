import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { onRequest } from "../UsefulFunctions/ApiService";
import "./boardwrite.scss";

const InquiryReplyWrite = () => {
  const navigate = useNavigate();
  const guideTitle = useRef();
  const guideContent = useRef();
  const userNm = useRef();

  const onSubmit = () => {
    axios({
      url: API_BASE_URL + "/api/admin/insertFaq",
      method: "post",
      data: {
        guideTitle: guideTitle.current.value,
        guideContent: guideContent.current.value,
      },

      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then(
        alert("글 작성이 완료되었습니다."),
        console.log("success"),
        navigate("/admin/faq")
      )
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="boardwrite">
        <h5>
          <strong>신규 FAQ 작성</strong>
        </h5>
        <hr />
        <div className="body2">
          <label for="title">제목</label>
          <input
            className="input"
            id="title"
            type="text"
            name="inquiryTitle"
            placeholder="제목을 입력해주세요."
            ref={guideTitle}
          />
          <label for="content">내용</label>
          <textarea
            id="textarea"
            name="inquiryContent"
            cols="50"
            rows="10"
            ref={guideContent}
          ></textarea>

          <input
            className="submit"
            type="button"
            value="등록하기"
            onClick={onSubmit}
          />
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default InquiryReplyWrite;
