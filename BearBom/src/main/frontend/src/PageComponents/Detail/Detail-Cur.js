function Cur({ course }) {
  return (
    <>
      <h5>
        <b>커리큘럼</b>
      </h5>
      <div className="cur-box1">
        <div className="cur-box-step">{course.courseLevelContent}</div>
      </div>
    </>
  );
}

export default Cur;
