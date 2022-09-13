import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/inquiry.css";
import axios from "axios";

const Inquiry = () => {
  const navigate = useNavigate();
  const [inquiryInfo, setInquiryInfo] = useState([]);
  const email = useRef();
  const sort = useRef();
  const title = useRef();
  const content = useRef();

  const onSubmit = () => {
    inquiryInfo.push(
      email.current.value,
      sort.current.value,
      title.current.value,
      content.current.value
    );
    console.log(inquiryInfo);
  };

  const onSubmit2 = () => {
    axios({
      // url: "/helpdesk.do",
      method: "post",
      data: {
        email: email.current.value,
        sort: sort.current.value,
        title: title.current.value,
        content: content.current.value,
      },
      baseURL: "http://localhost:8080/",
      //withCredentials: true,
    }).then(console.log("success"));
  };
  return (
    <>
      <div className="inquiry-main">
        <div className="inquiry-container">
          <form action="/action_page.php" method="post">
            <label for="email">이메일</label>
            <input
              className="inquiry-input"
              type="text"
              id="email"
              name="inquiry-email"
              placeholder="답변 받으실 이메일 주소를 입력해주세요"
              ref={email}
            />

            <label for="sort">문의종류</label>
            <select
              id="sort"
              name="inquiry-sort"
              className="inquiry-input"
              ref={sort}
            >
              <option value="user">로그인/회원가입</option>
              <option value="payment">결제</option>
              <option value="course-registration">강좌 개설</option>
            </select>

            <label for="title">제목</label>
            <input
              className="inquiry-input"
              id="title"
              type="text"
              name="inquiry-title"
              placeholder="제목을 입력해주세요."
              ref={title}
            />
            <label for="content">내용</label>
            <textarea
              id="content"
              name="inquiry-content"
              cols="50"
              rows="10"
              ref={content}
            ></textarea>

            <input
              className="inquiry-submit"
              // type="submit"
              value="제출"
              onClick={() => {
                // setInquiryInfo([]);
                onSubmit2();
                // navigate("/helpdesk");
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
