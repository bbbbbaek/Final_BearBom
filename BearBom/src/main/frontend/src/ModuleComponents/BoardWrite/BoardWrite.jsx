import axios from "axios";
import React, { useRef } from "react";
import { onRequest } from "../../ModuleComponents/UsefulFunctions/ApiService";
import "./boardwrite.scss";

const BoardWrite = () => {
  const guideTitle = useRef();
  const guideContent = useRef();
  const userNm = useRef();

  // const onSubmit = () => {
  //   onRequest("http://localhost:8080/api/admin/insertFaq", "post", {
  //     guideTitle: guideTitle,
  //     guideContent: guideContent,
  //   });
  // };

  const onSubmit = () => {
    axios({
      url: "http://localhost:8080/api/admin/insertFaq",
      method: "post",
      data: {
        guideTitle: guideTitle.current.value,
        guideContent: guideContent.current.value,
      },

      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then(console.log("success"))
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="boardwrite">
        <ul>
          <li>
            <label htmlFor="userId">제목</label>
            <input type="text" id="userId" ref={guideTitle} />
          </li>
          <li>
            <label htmlFor="userPw">내용</label>
            <input type="text" id="userPw" ref={guideContent} />
          </li>
        </ul>
        <button onClick={onSubmit}>전송</button>
      </div>
    </>
  );
};

export default BoardWrite;
