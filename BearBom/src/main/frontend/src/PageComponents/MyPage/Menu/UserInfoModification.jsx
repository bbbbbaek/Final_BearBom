import React, { useEffect, useState } from "react";
import "./userinfomodification.scss";
import { takenClassItems } from "../../../customHooks/createItems";
import axios from "axios";
import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { onRequest } from "../../../ModuleComponents/UsefulFunctions/ApiService";

const UserInfoModification = ({}) => {
  let tableInfo = takenClassItems;
  // userData는 이미 Mypage 렌더링 시 받아오기 때문에,
  // useOutletContext를 사용하여 서버로부터 데이터를 다시 받지 않고 처음에 받은 데이터를 props 전송 받음
  const { userData, setUpdateUserInfo, updateUserInfo } = useOutletContext();

  const userPw = useRef();
  const userPwCheck = useRef();
  const userNm = useRef();
  const userNickName = useRef();
  const userTel = useRef();
  const userAddress = useRef();
  const userAddressDef = useRef();
  const userZipcode = useRef();
  const userEmail = useRef();

  const navigate = useNavigate();

  const onSubmit = async () => {
    await onRequest("/api/mypage/updateUserInfo", "post", {
      userPw: userPw.current.value,
      userNm: userNm.current.value,
      // userNickName: userNickName.current.value,
      userTel: userTel.current.value,
      userAddress: userAddress.current.value,
      // userAddressDef: userAddressDef.current.value,
      userZipcode: userZipcode.current.value,
      userEmail: userEmail.current.value,
    });
    alert("회원 정보 수정이 완료되었습니다.");
    setUpdateUserInfo(updateUserInfo + 1);
    navigate("/mypage");
  };

  const onClickLeave = () => {
    let exit = prompt("회원 탈퇴를 진행하려면, '탈퇴' 를 입력해주세요");
    if (exit === "탈퇴") onLeave();
  };

  const onCancel = () => {
    navigate("/mypage");
  };

  const onLeave = async () => {
    await onRequest("/api/mypage/deleteUserInfo", "post", {
      userYn: "N",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("회원 탈퇴 처리가 완료되었습니다.");
    navigate("/");
  };

  return (
    <>
      <div className="userinfomodification">
        <h5>
          <strong>기본 정보 수정</strong>
        </h5>
        <hr />
        {userData ? (
          <div className="content2">
            <ul>
              <li>
                <label htmlFor="userPw">비밀번호</label>
                <input type="text" id="userPw" ref={userPw} />
              </li>
              <li>
                <label htmlFor="userPwCheck">비밀번호 확인</label>
                <input type="text" id="userPwCheck" ref={userPwCheck} />
              </li>
              <li>
                <label htmlFor="userNm">이름</label>
                <input
                  type="text"
                  id="userNm"
                  defaultValue={userData.userNm}
                  ref={userNm}
                />
              </li>
              <li>
                <label htmlFor="userNickName">닉네임</label>
                <input
                  type="text"
                  id="userNickName"
                  defaultValue={userData.userNickName}
                  ref={userNickName}
                />
              </li>
              <li>
                <label htmlFor="userTel">연락처</label>
                <input
                  type="text"
                  id="userTel"
                  defaultValue={userData.userTel}
                  ref={userTel}
                />
              </li>
              <li>
                <label htmlFor="userAddress">주소</label>
                <input
                  type="text"
                  id="userAddress"
                  defaultValue={userData.userAddress}
                  ref={userAddress}
                />
              </li>
              <li>
                <label htmlFor="userAddressDef">상세주소</label>
                <input
                  type="text"
                  id="userAddressDef"
                  defaultValue={userData.userAddressDef}
                  ref={userAddressDef}
                />
              </li>
              <li>
                <label htmlFor="userZipcode">우편번호</label>
                <input
                  type="text"
                  id="userZipcode"
                  defaultValue={userData.userZipcode}
                  ref={userZipcode}
                />
              </li>
              <li>
                <label htmlFor="userEmail">이메일</label>
                <input
                  type="text"
                  id="userEmail"
                  defaultValue={userData.userEmail}
                  ref={userEmail}
                />
              </li>
            </ul>
            <div className="buttons">
              <button id="save" onClick={onSubmit}>
                저장
              </button>
              <button id="cancel" onClick={onCancel}>
                취소
              </button>
            </div>
            <div id="leave">
              <span>베어봄 회원 탈퇴를 원하시면 </span>
              <span id="here" onClick={onClickLeave}>
                여기
              </span>
              <span></span>를 클릭하세요.
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UserInfoModification;
