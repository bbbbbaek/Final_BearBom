function Teacher({ averageRating, course, CurCnt }) {
  return (
    <>
      <div className="teacher-container">
        <div className="teacher-profile">
          {/* {reviewData[2].user.userNm} */}
          <img
            className="teacher-img"
            src={require("../../img/img2.jpeg")}
            alt="aa"
          ></img>
        </div>
        <div className="teacher-content">
          너무 유익합니다. 너무 유익합니다. 너무 유익합니다.
        </div>
        <div className="course-cur-cnt">누적 수강생</div>
        <div className="teacher-num">{CurCnt}</div>
        <div>평균 평점</div>
        <div className="teacher-num">{averageRating}</div>
      </div>
      {/* <div id="nana">
        <div id="box1">1</div>
        <div id="box2">2</div>
        <div id="box3">3</div>
      </div> */}
    </>
  );
}
export default Teacher;
