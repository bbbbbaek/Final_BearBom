import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../ModuleComponents/data";
import "../../css/detail.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Rating from "@mui/material/Rating";
import Location from "../Detail/Location";
import Calendar2 from "../Detail/Calendar";
import CarouselFadeExample from "../Detail/Test.js";
import Thumb from "../Detail/Thumb";
import Apply from "../Detail/Apply";
import Review from "../Detail/Detail-Review";
import Notice from "./Detail-Notice";
import Time from "./Detail-Time";
import Cur from "./Detail-Cur";
import { API_BASE_URL } from "../../app-config";
import axios from "axios";
// import MyComponent from "../PageComponents/Calendar";

const Detail = ({ scrollTop }) => {
  // 아래에 왜 초기값을 객체 형태로 주지 않으면 오류가 나는지 모르겠음
  const [course, setCourse] = useState(
    data
    // {
    //   course_idx: "0",
    //   course_nm: "happy lecture",
    // },
  );
  const { id } = useParams(data);

  useEffect(() => {}, []);

  // a.id: data의 id속성
  // id: useParam으로 불러온 url의 숫자값
  let item = course.find((a) => (a.course_idx = id));
  console.log(item);

  // const [reviewInfo, setReviewInfo] = useState({});

  // const addReviewInfo = (e) => {
  //   const newReviewInfo = {
  //     ...reviewInfo,
  //     [e.target.name]: e.target.value,
  //   };

  //   setReviewInfo(newReviewInfo);
  // };

  // const onSubmitHandler = (e) => {
  //   console.log({
  //     ...reviewInfo,
  //   });
  //   e.preventDefault();

  //   axios({
  //     method: "post",
  //     url: API_BASE_URL + "/api/course/getReviewList",
  //     // headers: {
  //     //   Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
  //     // },

  //     data: { ...reviewInfo },
  //   }).then((response) => {
  //     console.log(response);
  //     window.location.href = "/login";
  //   });

  return (
    <>
      <div className="main-container">
        <div className="info">
          <div className="main-info">
            <div className="main-img-box">
              <Thumb></Thumb>
            </div>
            <h4>Title</h4>
            <Navbar>
              <Nav id="nav-bar">
                <AnchorLink className="nav-list" href="#teacher">
                  강사소개
                </AnchorLink>
                <AnchorLink className="nav-list" href="#class">
                  클래스소개
                </AnchorLink>
                <AnchorLink className="nav-list" href="#cur">
                  커리큘럼
                </AnchorLink>
                <AnchorLink className="nav-list" href="#time">
                  시간표
                </AnchorLink>
                <AnchorLink className="nav-list" href="#loc">
                  위치
                </AnchorLink>
                <AnchorLink className="nav-list" href="#notice">
                  유의사항
                </AnchorLink>
                <AnchorLink className="nav-list" href="#review">
                  후기
                </AnchorLink>
              </Nav>
            </Navbar>
            <hr />
            <section id="teacher" className="section-box">
              <h5>
                <b>강사소개</b>
              </h5>

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
            </section>
            <hr />
            <section id="class" className="section-box">
              <h5>
                <b>클래스소개</b>
              </h5>
              <div className="class-content">
                <CarouselFadeExample />
              </div>
            </section>
            <hr />
            <section id="cur" className="section-box">
              <Cur />
            </section>
            <hr />
            <section id="time" className="section-box">
              <Time />
            </section>
            <hr />
            <section id="loc" className="section-box">
              <Location />
            </section>
            <hr />
            <section id="notice" className="section-box">
              <Notice />
            </section>
            <hr />
            <section id="review" className="section-box">
              <Review />
            </section>
          </div>
          <div className="main-cal">
            <div>
              <Apply />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
