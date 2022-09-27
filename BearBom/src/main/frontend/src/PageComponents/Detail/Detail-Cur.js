function Cur({ course }) {
  return (
    <>
      <h5>
        <b>커리큘럼</b>
      </h5>
      <div className="cur-box1">
        <div className="cur-box-step">
          {/* <span>STEP.1</span>
          <p>그리기</p> */}
          {course.courseLevelContent}
        </div>

        {/* <div className="cur-box-img">
          <img className="cur-img" src={require("../../img/blogo1.png")}></img>
        </div> */}
      </div>
      {/* <div className="cur-box1">
        <div className="cur-box-step">
          <span>STEP.2</span>
          <p>그리기</p>
        </div>

        <div className="cur-box-img">
          <img
            className="cur-img"
            src={require("../../img/class001.webp")}
          ></img>
        </div>
      </div>
      <div className="cur-box1">
        <div className="cur-box-step">
          <span>STEP.3</span>
          <p>그리기</p>
        </div>

        <div className="cur-box-img">
          <img
            className="cur-img"
            src={require("../../img/class002.webp")}
          ></img>
        </div>
      </div> */}
    </>
  );
}

export default Cur;
