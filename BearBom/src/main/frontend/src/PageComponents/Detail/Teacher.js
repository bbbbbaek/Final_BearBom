import Rating from "@mui/material/Rating";

// function Teacher() {
//   return (
//     <>

//       <div className="grid-box">
//         <div className="grid">
//           <div className="item1">
//             <img
//               className="teacher-img"
//               src={require("../../img/img2.jpeg")}
//             ></img>
//           </div>
{
  /* <div className="teacher-student">
            누적 수강생
            <br />
            124명
          </div>

          <div className="teacher-rating">
            <p>4.5</p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div> */
}
{
  /* <table className="info-table">
            <tr>
              <tb>누적 수강생</tb>
              <tb>124명</tb>
            </tr>
            <tr>
              <tb>평균 평점</tb>
              <tb>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={1}
                  readOnly
                />
              </tb>
            </tr>
          </table> */
}
{
  /* </div>
        <div className="item2">안녕하세여 김광민입니다~~~~~~~~ </div>
      </div>
    </>
  );
} */
}

function Teacher({ averageRating }) {
  return (
    <>
      <div className="teacher-container">
        <div className="teacher-profile">
          <img
            className="teacher-img"
            src={require("../../img/img2.jpeg")}
            alt="aa"
          ></img>
        </div>
        <div className="teacher-content">너무 유익합니다.</div>
        <div>누적 수강생</div>
        <div className="teacher-num">124명</div>
        <div>평균 평점</div>
        <div className="teacher-num">{averageRating}</div>
        <button
          onClick={() => {
            console.log(averageRating);
          }}
        ></button>
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
