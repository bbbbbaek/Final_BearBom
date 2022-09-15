import Calendar2 from "./Calendar";
import Calendar3 from "./Calendar3";
import "../../css/apply.css";
import { useEffect, useState, useRef } from "react";
import LikeButton from "../../ModuleComponents/LikeButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

function Apply({ courseIdx }) {
  const [height, setHeight] = useState();
  const handleHeight = () => {
    setHeight(window.pageYOffset);
  };
  const [like, setLike] = useState(false);
  const calRef = useRef(null);

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

  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(`/payready`);
  };

  const toggleLike = async (e) => {
    // const res = await axios.post(`${API_BASE_URL}/api/like/{courseIdx}/insertLike`);
    const userId = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
      alert("찜하기를 위해 로그인해주세요 :)");
      navigate("/login");
      return;
    }
    //`${API_BASE_URL}/api/like/${courseIdx}/insertLike`
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/like/1/insertLike`,
      //403 에러는 보안관련 에러
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: { userId: userId },
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
            <LikeButton onClick={toggleLike}></LikeButton>찜하기
          </button>

          <button type="button" className="cal-apply" onClick={onClickBtn}>
            신청하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Apply;
