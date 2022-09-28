import "../../css/detail.css";
function ClassContents({ course }) {
  return (
    <>
      <h5>
        <b>클래스소개</b>
      </h5>
      <div className="cur-box1">
        <textarea
          className="detail-text-area"
          readOnly
          style={{ resize: "none" }}
        >
          {course.courseContents}
        </textarea>
      </div>
    </>
  );
}

export default ClassContents;
