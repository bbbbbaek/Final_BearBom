import Calendar2 from "./Calendar";
import Calendar3 from "./Calendar3";
import "../../css/apply.css";
import { useEffect, useState, useRef, useNavigate } from "react";
import LikeButton from "../../ModuleComponents/LikeButton";

function Apply() {
  const [height, setHeight] = useState();
  const handleHeight = () => {
    setHeight(window.pageYOffset);
  };

  const calRef = useRef(null);

  useEffect(() => {
    if (height > 1000) {
      calRef.current.style.opacity = 0;
      calRef.current.style.transition = "opacity 0.7s";
    } else {
      calRef.current.style.opacity = 1;
    }
    // console.log("test");
  }, [height]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleHeight);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleHeight); // addEventListener 함수를 삭제
    };
  });

  // const navigate = useNavigate();

  // const onClickBtn = () => {
  //   navigate(`https://kapi.kakao.com/v1/payment/ready`);
  // };

  return (
    <>
      <div className="calendar-box1" ref={calRef}>
        <h3>Title</h3>
        <div className="cal-box">
          <Calendar2 />
        </div>
        <div className="apply-cost">
          <span>예약 금액 1인</span>
          <span className="apply-cost-won">
            <b>/40,000 원</b>
          </span>
        </div>

        <div className="cal-btn-box">
          <button className="cal-wishList">
            <LikeButton></LikeButton>찜하기
          </button>

          <button
            type="button"
            className="cal-apply" /* onClick={onClickBtn} */
          >
            <a href="https://kapi.kakao.com/v1/payment/ready">신청하기 </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Apply;
