import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/inquiry.css";

const Inquiry = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="inquiry-main">
        <div className="inquiry-container">
          <form action="/action_page.php" method="post">
            <label for="email">이메일</label>
            <input
              type="text"
              id="email"
              name="inquiry-email"
              placeholder="답변 받으실 이메일 주소를 입력해주세요"
            />

            <label for="sort">문의종류</label>
            <select id="sort" name="inquiry-sort">
              <option value="user">로그인/회원가입</option>
              <option value="payment">결제</option>
              <option value="course-registration">강좌 개설</option>
            </select>

            <label for="title">제목</label>
            <input
              id="title"
              type="text"
              name="inquiry-title"
              placeholder="제목을 입력해주세요."
            />
            <label for="content">내용</label>
            <textarea
              id="content"
              name="inquiry-content"
              cols="50"
              rows="10"
            ></textarea>

            <input
              type="submit"
              value="제출"
              onClick={() => {
                navigate("/helpdesk");
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
