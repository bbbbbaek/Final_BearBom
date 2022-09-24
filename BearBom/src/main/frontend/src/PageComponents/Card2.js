import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeartImg from "../../src/assets/heart.png";
import EmptyHeartImg from "../../src/assets/empty-heart.png";
import LikeButton from "../ModuleComponents/LikeButton";
import "../css/card.scss";
import { API_BASE_URL } from "../app-config";
import axios from "axios";

const Card2 = ({ endday }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [dataa, setDataa] = useState();
  const courseCost = endday.courseCost;
  const courseCostChange = courseCost
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
        params: { userId: userId, courseIdx: endday.courseIdx },
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
    const test = (e) => {
      if (endday.rate === 0) {
        setTestt("신규");
        setFlag(false);
      } else {
        setTestt("평점 " + endday.rate);
        setFlag(true);
      }
    };
    fetchData();
    test();
  }, []);

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
      url: `${API_BASE_URL}/api/like/${endday.courseIdx}/insertLike`,
      //403 에러는 보안관련 에러
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: { courseIdx: endday.courseIdx, userId: userId },
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
  const [testt, setTestt] = useState("");
  const [flag, setFlag] = useState(false);
  return (
    <>
      <CardWrapper>
        <Link to={`/course/${endday.courseIdx}`} state={{ courseInfo: endday }}>
          <ImgContainer>
            <div className="tag">
              <div className={`message ${flag ? "success" : "error"}`}>
                {testt}
              </div>
            </div>

            {/* <div className="tag">{averageRating} 평점</div> */}

            <img
              className="img_test"
              src={`http://localhost:8080/upload/${endday.courseThumbnailNm}`}
              // style={{ width: "250px", height: "250px" }}
              alt="test"
            ></img>
          </ImgContainer>
        </Link>
        <div className="like">
          <LikeButton like={like} onClick={toggleLike}></LikeButton>
        </div>
        <TextContainer>
          <div className="first_row">
            {/* props로 데이터 넘겨서 넣어주기 일단 dummy */}
            {/* 원데이 */}
            {endday.courseNm}
          </div>
          {/* <div className="second_row">{title}</div> */}
          {/* <div className={condition ? "third_row" : "hollow"}> */}
          {/* 이쪽은 있을수도있고 없을수도있고 조건 처리 */}
          {/* {condition ? "true면 보임" : "false면 안보임"} */}
          {/* </div> */}
          <div className="last_row">{courseCostChange}원</div>
        </TextContainer>
      </CardWrapper>
    </>
  );
};

export default Card2;
const TextContainer = styled.div`
  margin-top: 0.5rem;
  margin-left: 5rem;
  color: black;

  .first_row {
    font-weight: 600;
    font-size: 15px;
  }
  .second_row {
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 1rem;
  }
  .third_row {
    font-size: 11px;
    color: #a8a8a8;
  }
  .hollow {
    display: none;
  }
  .last_row {
    font-size: 14px;
  }
`;
// const CardWrapper = styled.a`
const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
// .tag {
//   position: absolute;
//   top: 5%;
//   left: 5%;
//   background-color: #6a82ec;
//   border: 0.3px solid #6a82ec;
//   padding: 3px 6px;
//   color: white;
//   border-radius: 7px;
//   font-size: 10px;
//   font-weight: 600;
// }
const ImgContainer = styled.div`
  position: relative;
  width: 85%;
  height: 300px;
  padding: 2rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .tag {
    position: absolute;
    top: 5%;
    left: 5%;
    padding: 3px 3px;
    color: white;
  }
  .place {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
