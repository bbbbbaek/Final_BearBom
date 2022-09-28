function Teacher({ averageRating, CurCnt, teacherInfo }) {
  return (
    <>
      <div className="teacher-container">
        <div className="teacher-profile">
          {/* {reviewData[2].user.userNm} */}
          <img
            className="teacher-img"
            src={`http://localhost:8080/upload/${teacherInfo[0].userPhotoNewNm}`}
            alt="aa"
          ></img>
        </div>
        <div className="teacher-content">{teacherInfo[0].lecturerInfo}</div>
        <div className="course-cur-cnt">강좌 수강생</div>
        <div className="teacher-num">{CurCnt}</div>
        <div>평균 평점</div>
        <div className="teacher-num">{averageRating}</div>
      </div>
    </>
  );
}
export default Teacher;
