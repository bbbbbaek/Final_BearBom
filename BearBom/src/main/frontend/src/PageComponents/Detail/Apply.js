import Calendar2 from "./Calendar";
import "../../css/apply.css";
import { useEffect, useState, useRef } from "react";
import LikeButton from "../../ModuleComponents/LikeButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import Swal from "sweetalert2";

function Apply({ courseIdx, course }) {
  const [height, setHeight] = useState();
  const handleHeight = () => {
    setHeight(window.pageYOffset);
  };
  const [like, setLike] = useState(false);
  const [courseCostChange, setCourseCostChange] = useState("");
  const calRef = useRef(null);

  //카카오페이 경로이동
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(`/payready`);
  };

  //금액 콤마 찍기
  // console.log(typeof course.courseCost);
  // console.log(course.courseCost);
  useEffect(() => {
    setCourseCostChange((prev) =>
      (course.courseCost + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  }, [course]);

  // console.log(courseCostChange);

  useEffect((e) => {
    const fetchData = async () => {
      // const res = await axios.get(`${API_BASE_URL}/api/like/getLikeList`);
      // console.log(res);
      // if (res.data.type === "liked") setLike(true);
      const userId = localStorage.getItem("USER_ID");
      const token = localStorage.getItem("ACCESS_TOKEN");
      if (!token) {
        return;
      }

      axios({
        method: "GET",
        url: API_BASE_URL + "/api/like/getLikeList",
        params: { userId: userId, courseIdx: courseIdx },
        //403 에러는 보안관련 에러
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data.likeState === "liked") {
            setLike(true);
          } else {
            setLike(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

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

  const toggleLike = async (e) => {
    // const res = await axios.post(`${API_BASE_URL}/api/like/{id}/insertLike`);
    const userId = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
      alert("찜하기를 위해 로그인해주세요 :)");
      navigate("/login");
      return;
    }
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/like/${course.courseIdx}/insertLike`,
      //403 에러는 보안관련 에러
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: { courseIdx: course.courseIdx, userId: userId },
    })
      .then((response) => {
        console.log(response);
        if (response.data.likeState === "like") {
          setLike(!like);
        } else {
          setLike(!like);
        }
      })
      .catch((error) => {
        console.log(error);
        //불필요한 alert
        // alert("로그인 해주세요 :)");
      });
    // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    // setLike(!like);
  };
  ///////////////////////////////////

  const successAlert = () => {
    // Swal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button.",
    //   icon: "success",
    // });

    Swal.fire({
      title: "찜목록에 추가되었습니다.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
         top
        no-repeat
      `,
    });
  };

  return (
    <>
      <div className="calendar-box1" ref={calRef}>
        <h3>Title</h3>
        <div className="cal-box">
          <Calendar2 />
        </div>
        <div className="apply-cost">
          <span>예약 금액 1인:</span>
          <span className="apply-cost-won">
            {/* <b>{courseCostChange}원</b> */}
            <b>
              {typeof courseCostChange !== "undefined"
                ? courseCostChange
                : (course.courseCost + "").replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )}
              원
            </b>
          </span>
        </div>

        <div className="cal-btn-box">
          <button className="cal-wishList" onClick={successAlert}>
            <LikeButton like={like} onClick={toggleLike}></LikeButton>찜하기
          </button>
          {/* <button>
            <LikeModal></LikeModal>
          </button> */}
          <button type="button" className="cal-apply" onClick={onClickBtn}>
            신청하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Apply;
