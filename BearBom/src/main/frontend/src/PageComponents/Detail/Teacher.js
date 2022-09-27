import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
function Teacher({ averageRating, CurCnt }) {
  return (
    <>
      <div className="teacher-container">
        <div className="teacher-profile">
          {/* {reviewData[2].user.userNm} */}
          {/* <img
            className="teacher-img"
            src={`http://localhost:8080/upload/${teacherInfo.userPhotoNewNm}`}
            alt="aa"
          ></img> */}
        </div>
        <div className="teacher-content">
          너무 유익합니다. 너무 유익합니다. 너무 유익합니다.
        </div>
        <div className="course-cur-cnt">강좌 수강생</div>
        <div className="teacher-num">{CurCnt}</div>
        <div>평균 평점</div>
        <div className="teacher-num">{averageRating}</div>
      </div>
    </>
  );
}
export default Teacher;
