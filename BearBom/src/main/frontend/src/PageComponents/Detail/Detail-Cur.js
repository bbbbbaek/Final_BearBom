import "../../css/detail.css";

function Cur({ course }) {
  return (
    <>
      <h5>
        <b>커리큘럼</b>
      </h5>
      <div className="cur-box1">
        <textarea
          className="detail-text-area"
          readOnly
          style={{ resize: "none" }}
        >
          {course.courseLevelContent}
        </textarea>
      </div>
    </>
  );
}

export default Cur;
