import Rating from "@mui/material/Rating";

function Teacher() {
  return (
    <>
      {" "}
      <div className="grid-box">
        <div className="grid">
          <div className="item1">
            <img
              className="teacher-img"
              src={require("../../img/img2.jpeg")}
            ></img>
          </div>
          <div className="teacher-student">
            누적 수강생
            <br />
            124명
          </div>
          <div>
            <div className="teacher-rating">
              <p>4.5</p>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="item2">안녕하세여 김광민입니다~~~~~~~~ </div>
      </div>
    </>
  );
}
export default Teacher;
