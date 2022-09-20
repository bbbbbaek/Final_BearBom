import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inquiry.scss";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import useFetch from "../../../customHooks/useFetch";

const Inquiry = () => {
  const navigate = useNavigate();
  const [inquiryInfo, setInquiryInfo] = useState({ inquirySort: "user" });

  const onSubmit = () => {
    console.log(inquiryInfo);
    axios({
      url: API_BASE_URL + "/api/helpdesk/insertInquiry",
      method: "post",
      data: inquiryInfo,
    })
      .then(console.log("success"))
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    const updatedInquiryInfo = {
      ...inquiryInfo,
      [e.target.name]: e.target.value,
    };

    setInquiryInfo(updatedInquiryInfo);
  };

  return (
    <>
      <div className="helpdesk_inquiry">
        <h5>
          <strong>1:1문의</strong>
        </h5>
        <hr />
        <div className="body1">
          {/* <form action="/action_page.php" method="post"> */}
          <label for="email">이메일</label>
          <input
            className="input"
            type="text"
            id="email"
            name="inquiryEmail"
            placeholder="답변 받으실 이메일 주소를 입력해주세요"
            value={inquiryInfo.inquiryEmail}
            onChange={handleChange}
          />

          <label for="sort">문의종류</label>
          <select
            id="sort"
            name="inquirySort"
            className="input"
            value={inquiryInfo.inquirySort}
            onChange={handleChange}
          >
            <option value="user">로그인/회원가입</option>
            <option value="payment">결제</option>
            <option value="course-registration">강좌 개설</option>
          </select>

          <label for="title">제목</label>
          <input
            className="input"
            id="title"
            type="text"
            name="inquiryTitle"
            placeholder="제목을 입력해주세요."
            value={inquiryInfo.inquiryTitle}
            onChange={handleChange}
          />
          <label for="content">내용</label>
          <textarea
            id="textarea"
            name="inquiryContent"
            cols="50"
            rows="10"
            value={inquiryInfo.inquiryContent}
            onChange={handleChange}
          ></textarea>

          <input
            className="submit"
            type="button"
            value="제출"
            onClick={() => {
              alert("문의 등록이 완료되었습니다.");
              onSubmit();
            }}
          />
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Inquiry;
