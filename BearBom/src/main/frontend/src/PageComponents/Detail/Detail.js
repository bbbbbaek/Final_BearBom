import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import data from "../../ModuleComponents/data";
import "../../css/detail.css";
import { API_BASE_URL } from "../../app-config";
import axios from "axios";
import Thumb from "../Detail/Thumb";
import CourseNavbar from "./Navbar";
import Teacher from "./Teacher";
import CarouselFadeExample from "../Detail/Test.js";
import Cur from "./Detail-Cur";
import Time from "./Detail-Time";
import Location from "../Detail/Location";
import Notice from "./Detail-Notice";
import Apply from "../Detail/Apply";
import OpenModal from "./OpenModal";
import Review from "../Detail/Detail-Review";
import ImgBox from "./ImgBox";
import InputModal from "./InputModal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import BarChartIcon from "@mui/icons-material/BarChart";

const Detail = ({ scrollTop }) => {
  // 아래에 왜 초기값을 객체 형태로 주지 않으면 오류가 나는지 모르겠음

  const { id } = useParams();
  const [course, setCourse] = useState({});
  // const [woobin, setWoobin] = useState(false);
  const navigate = useNavigate();
  const [reviewInfo, setReviewInfo] = useState({ courseIdx: 1 });
  const [courseInfo, setCourseInfo] = useState({});
  const location = useLocation();
  const [reviewList, setReviewList] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [cnt, setCnt] = useState(0);
  const [averageRating, setaverageRating] = useState([]);
  const [sort, setSort] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  // const sortedData = [...reviewList].sort(
  //   (a, b) => a.courserIdx - b.courserIdx
  // );

  useEffect(() => {
    setSortedData([...reviewList].sort((a, b) => b.courserIdx - a.courserIdx));
    console.log(sortedData);
  }, [reviewList]);

  console.log(sortedData);

  const addReviewInfo = (e) => {
    const newReviewInfo = {
      ...reviewInfo,
      [e.target.name]: e.target.value,
    };

    setReviewInfo(newReviewInfo);
  };

  const onWriteReview = () => {
    console.log({
      ...reviewInfo,
      courseIdx: id,
    });

    axios({
      method: "post",
      url: API_BASE_URL + "/api/course/writeReview",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: reviewInfo,
    }).then((response) => {
      console.log(response);
      setReviewList(response.data.reviewList);
      setaverageRating(response.data.averageRating);
      setReviewData(response.data.reviewList.slice(0, 4));
      setCnt(0);
      // window.location.href = "/course/:id";
    });
  };

  let listUrl = "http://localhost:8080/api/course/getReviewList";

  const userId = localStorage.getItem("USER_ID");
  console.log(userId);
  const list = () => {
    setReviewInfo((prev) => ({ ...prev, courseIdx: id }));
    axios({
      url: listUrl,
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      // params: {userId: userId}
      data: { courseIdx: id },
    })
      .then((response) => {
        console.log(response.data);
        setReviewList(response.data.reviewList);
        setaverageRating(response.data.averageRating);
        setReviewData(response.data.reviewList.slice(0, 4));
        console.log(reviewData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    let get_local = localStorage.getItem("data");
    setCourseInfo(location.state.courseInfo);
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
  }, [courseInfo]);

  //리뷰 더보기
  useEffect(() => {
    console.log(reviewList);
    console.log(reviewList.slice(4 * cnt, 4 * (cnt + 1)));
    let copy = reviewData.concat(sortedData.slice(4 * cnt, 4 * (cnt + 1)));
    // let copy = [...reviewData];
    console.log(copy);
    setReviewData(copy);
  }, [cnt]);

  useEffect(() => {
    console.log(reviewList);
  }, [reviewList, cnt]);

  // const style = { onclick=
  //   overflow: user.active ? "none" : "hidden",
  // };

  ///////////////////////////////////

  useEffect(() => {
    setReviewInfo((prev) => ({ ...prev, courseIdx: id }));
    //데이터불러오는 axios
    //setCourse(response.data);
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
            <h4>{course.courseNm}</h4>
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

            <CourseNavbar />
            {/* <hr id="teacher" /> */}
            <section /* id="teacher" */ className="section-box">
              <h5 className="teacher">
                <b>강사소개</b>
              </h5>
              <Teacher averageRating={averageRating} />
            </section>
            <hr id="class" />
            <section className="section-box">
              <h5>
                <b>클래스소개</b>
              </h5>
              <div className="class-content">
                <CarouselFadeExample course={course} />
              </div>
            </section>
            <hr />
            <section id="cur" className="section-box">
              <Cur />
            </section>
            <hr />
            <section id="time" className="section-box">
              <Time course={course} />
            </section>
            <hr />
            <section id="loc" className="section-box">
              <Location courseAddress={course.courseAddress} />
            </section>
            <hr />
            <section id="notice" className="section-box">
              <Notice />
            </section>
            <hr />
            <section id="review" className="section-box">
              <div
                className="reviewList"
                // style={{ height: woobin ? "auto" : "300px" }}
              >
                <InputModal
                  addReviewInfo={addReviewInfo}
                  onWriteReview={onWriteReview}
                />
                <OpenModal
                  addReviewInfo={addReviewInfo}
                  onWriteReview={onWriteReview}
                />

                <div id="review-box-list">
                  {sortedData !== []
                    ? sortedData.map((review) => <Review review={review} />)
                    : null}
                  <button
                    className="more-btn"
                    onClick={() => {
                      // console.log(woobin);

                      // setWoobin(!woobin);
                      setCnt(cnt + 1);
                      // console.log(reviewData);
                      // console.log(cnt);
                      // axios
                      //   .get("http://localhost:8080/api/course/getReviewList.json")
                      //   .then((response) => {
                      //     let copy = [...reviewList, ...response.data.data];
                      //     setReviewList(copy);
                      //   })
                      //   .catch(() => {
                      //     console.log("실패함");
                      //   });
                    }}
                  >
                    더보기
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="main-cal">
            <div>
              <Apply courseIdx={id} course={course} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
