import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../css/detail.css";
import { API_BASE_URL } from "../../app-config";
import axios from "axios";
import Apply from "../Detail/Apply";
import OpenModal from "./OpenModal";
import Review from "../Detail/Detail-Review";
import ImgBox from "./ImgBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BarChartIcon from "@mui/icons-material/BarChart";
import DetailTabs from "./DetailTabs";

const Detail = () => {
  const { id } = useParams(); //id를 통해 강의id로 이동
  const [course, setCourse] = useState({}); //강의 데이터를 담을 State
  const [reviewInfo, setReviewInfo] = useState({ courseIdx: 1 }); //리뷰정보 전체를 담은 State
  const [courseInfo, setCourseInfo] = useState({}); //강의 데이터를 담은 State
  const [reviewList, setReviewList] = useState([]); //리뷰정보를 담은 State
  const [reviewData, setReviewData] = useState([]); //리뷰정보를 4개씩 담은 State
  const [cnt, setCnt] = useState(0); //리뷰정보를 4개씩 받아오기 위한 카운트 State
  const [averageRating, setaverageRating] = useState([]); //평균평점을 담은 State
  const location = useLocation(); //URL을
  const [CurCnt, setCurCnt] = useState(0);
  const [teacherInfo, setTeacherInfo] = useState();
  // const userId = localStorage.getItem("USER_ID"); //유저 아이디를
  // const navigate = useNavigate(); //결제를 위한 navigate

  //리뷰정보 불러오기
  const list = () => {
    axios({
      url: API_BASE_URL + "/api/course/getReviewList",
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: { courseIdx: id },
    })
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };

  //리뷰 더보기 4개씩 나누기
  useEffect(() => {
    let copy = reviewData.concat(reviewList.slice(4 * cnt, 4 * (cnt + 1)));

    setReviewData(copy);
  }, [cnt]);

  //리뷰등록 담을 State
  const addReviewInfo = (e) => {
    const newReviewInfo = {
      ...reviewInfo,
      [e.target.name]: e.target.value,
    };
    setReviewInfo({ ...newReviewInfo, courseIdx: id });
  };

  //리뷰작성 데이터 DB에 저장하는 axios
  const onWriteReview = () => {
    axios({
      method: "post",
      url: API_BASE_URL + "/api/course/writeReview",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: reviewInfo,
    }).then((response) => {
      setReviewList(response.data.reviewList);
      setaverageRating(response.data.averageRating);
      setReviewData(response.data.reviewList.slice(0, 4));
      setCnt(0);
    });
  };

  //찜하기 기능(로그인 예외 처리)
  React.useEffect(() => {
    let get_local = localStorage.getItem("data");

    if (location.state) setCourseInfo(location.state.courseInfo);
    else setCourseInfo((prev) => ({ ...prev, ...course }));

    if (get_local == null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }

    let duplicateFlag = false;
    if (JSON.stringify(courseInfo) !== "{}") {
      list();
      for (let i = 0; i < get_local.length; i++) {
        if (courseInfo.courseIdx === get_local[i].courseIdx) {
          duplicateFlag = true;
          break;
        }
      }
      if (!duplicateFlag) {
        get_local.push(courseInfo);
      }

      if (get_local.length > 5) {
        get_local.splice(0, 1);
      }

      localStorage.setItem("data", JSON.stringify(get_local));
    }
  }, [course]);

  //강의 데이터를 불러오는 axios
  useEffect(() => {
    setReviewInfo((prev) => ({ ...prev, courseIdx: id }));

    axios({
      method: "get",
      url: API_BASE_URL + "/api/course/getCourse",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      params: { courseIdx: id },
    }).then((response) => {
      console.log(response.data);
      setCourse(response.data.getCourse);
      setCurCnt(response.data.getCourseCurCnt);
      setaverageRating(response.data.averageRating);
      setReviewList(response.data.reviewList);
      setReviewData(response.data.reviewList.slice(0, 4));
      setTeacherInfo(response.data.userInfo);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="info">
          <div className="main-info">
            <div className="main-img-box">
              <ImgBox course={course} />
            </div>
            <h4 className="courseNm">{course.courseNm}</h4>
            <div className="course-short-info">
              <div>
                <BarChartIcon color="action" />
                {course.courseLevel}
              </div>
              <div>
                <AccessTimeIcon sx={{ fontSize: 30 }} color="action" />
                {course.courseRuntime}시간
              </div>
              <div>
                <FmdGoodIcon color="action" />
                {course.courseAddress}
                {course.courseAddressEx}
              </div>
              <div>
                <SupervisorAccountIcon sx={{ fontSize: 30 }} color="action" />
                {course.courseMin} ~ {course.courseMax}인
              </div>
            </div>
            <DetailTabs
              id="Detail-Tabs"
              averageRating={averageRating}
              course={course}
              CurCnt={CurCnt}
            />
            <hr />
            <section id="review" className="section-box">
              <div className="reviewList">
                <OpenModal
                  addReviewInfo={addReviewInfo}
                  onWriteReview={onWriteReview}
                />

                <div id="review-box-list">
                  {reviewData !== []
                    ? reviewData.map((review) => <Review review={review} />)
                    : null}
                  <div className="btn-position">
                    <button
                      className="more-btn"
                      onClick={() => {
                        setCnt(cnt + 1);
                      }}
                    >
                      더보기
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="main-cal">
            <div>
              <Apply id="Apply" courseIdx={id} course={course} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
