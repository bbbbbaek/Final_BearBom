import React, { useEffect, useState } from "react";
import "./userinfomodification.scss";
import { takenClassItems } from "../../../customHooks/createItems";
import axios from "axios";
import { useRef } from "react";

const UserInfoModification = () => {
  let tableInfo = takenClassItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/User"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);

  const [test, setTest] = useState([]);
  const userId = useRef();
  const userPw = useRef();
  const userNm = useRef();
  const userNickName = useRef();
  const userTel = useRef();
  const userAddress = useRef();
  const useruserAddressDefPw = useRef();
  const userZipcode = useRef();
  const userEmail = useRef();
  const userYn = useRef();

  const onSubmit = () => {
    // 실제로는 axios 요청
    setTest([{ userId: userId.current.value, userPw: userPw.current.value }]);
  };
  class Items {
    constructor(label, input) {
      this.label = label;
      this.input = input;
    }
  }
  const items = [
    new Items("닉네임", "userNickName"),
    new Items("연락처", "userTel"),
    new Items("주소", "userAddress"),
    new Items("상세주소", "userAddressDef"),
    new Items("우편번호", "userZipcode"),
    new Items("이메일", "userEmail"),
    new Items("메롱", "userYn"),
  ];

  return (
    <>
      {fetchedData ? (
        <div className="userinfomodification">
          <h5>
            <strong>기본 정보 수정</strong>
          </h5>
          <hr />
          <div className="content2">
            <ul>
              <li>
                <label htmlFor="userId">이름</label>
                <input
                  type="text"
                  id="userId"
                  value={fetchedData[0].userId}
                  ref={userId}
                />
              </li>
              <li>
                <label htmlFor="userPw">비밀번호</label>
                <input
                  type="text"
                  id="userPw"
                  value={fetchedData[0].userPw}
                  ref={userPw}
                />
              </li>
              {items.map((a, i) => {
                return (
                  <li key={a.label}>
                    <label htmlFor={items[0].input}>{a.label}</label>
                    <input
                      type="text"
                      id={a.input}
                      value={a.input}
                      // ref={${a.input}}
                    />
                  </li>
                );
              })}
            </ul>
            <button onClick={onSubmit}>저장</button>
            <button
              onClick={() => {
                console.log(test);
                console.log(fetchedData[0][items.label]);
              }}
            >
              콘솔
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserInfoModification;
