import "../../css/detail.css";
function ClassContents({ course }) {
  return (
    <div>
      <span>{course.courseContents}</span>
    </div>
  );
}

export default ClassContents;
