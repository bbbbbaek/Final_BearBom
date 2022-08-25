import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../ModuleComponents/data";
import "../css/detail.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HoverRating from "./ReviewFeedback";
import AutoHeightTextarea from "./AutoHeightTextarea";
import Rating from "@mui/material/Rating";
import Location from "./location";
import Calendar from "./Calendar/Calendar2.js";
import Calendar3 from "./Calendar/Calendar";
import CarouselFadeExample from "../PageComponents/test";
import ImageThumb from "./ImageThumb";

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

  const calRef = useRef(null);

  useEffect(() => {}, []);

  // a.id: data의 id속성
  // id: useParam으로 불러온 url의 숫자값
  let item = course.find((a) => (a.course_idx = id));
  console.log(item);

  useEffect(() => {
    if (scrollTop > 1000) {
      calRef.current.style.opacity = 0;
    } else {
      calRef.current.style.opacity = 1;
    }
  }, [scrollTop]);

  return (
    <>
      <div className="main-container">
        <div className="img">
          <div className="main-img">
            <img className="img1" src="/img/img2.jpeg" />
          </div>
          <div className="sub-total-img">
            <div className="sub-img1">
              <img className="img1" src="/img/img2.jpeg" />
            </div>
            <div className="sub-img2">
              <img className="img1" src="/img/img2.jpeg" />
            </div>
            <div className="sub-img3">
              <img className="img1" src="/img/img2.jpeg" />
            </div>
            <div className="sub-img4">
              <img className="img1" src="/img/img2.jpeg" />
            </div>
          </div>
        </div>

        <div className="info">
          <div className="main-info">
            <h4>Title</h4>
            <Navbar>
              <Nav className="justify-content-start">
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
              <div className="teacher-info">
                <div>
                  <img className="teacher-img" src="/img/psy.jpeg"></img>
                </div>
                <span>김광민 강사님</span>
                <div>
                  <div>
                    <span className="teacher-sales">
                      누적 수강생
                      <br />
                      124명
                    </span>
                  </div>
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
              <div className="teacher-content">
                <p>안녕하세여 김광민입니다~~~~~~~~ 감사합니다~~~~~~</p>
              </div>
              <div className="teacher-clear"></div>
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
              <h5>
                <b>커리큘럼</b>
              </h5>
              <div className="cur-box1">
                <div className="cur-box-step">
                  <span>STEP.1</span>
                  <p>그리기</p>
                </div>

                <div className="cur-box-img">
                  <img className="cur-img" src="/img/img2.jpeg"></img>
                </div>
              </div>
              <div className="cur-box1">
                <div className="cur-box-step">
                  <span>STEP.2</span>
                  <p>그리기</p>
                </div>

                <div className="cur-box-img">
                  <img className="cur-img" src="/img/img2.jpeg"></img>
                </div>
              </div>
              <div className="cur-box1">
                <div className="cur-box-step">
                  <span>STEP.3</span>
                  <p>그리기</p>
                </div>

                <div className="cur-box-img">
                  <img className="cur-img" src="/img/img2.jpeg"></img>
                </div>
              </div>
            </section>
            <hr />
            <section id="time" className="section-box">
              <h5>
                <b>시간표</b>
              </h5>
              <div className="time-cal">{/* <Calendar3 id="Cal" /> */}</div>
            </section>

            <hr />
            <section id="loc" className="section-box">
              <h5>
                <b>위치</b>
              </h5>
              <Location />
            </section>
            <hr />
            <section id="notice" className="section-box">
              <h5>
                <b>유의사항</b>
              </h5>
              <table className="notice-table">
                <tr>
                  <td>
                    <img className="notice-img" src="/logo192.png" />
                  </td>
                  <td>
                    강의 수강률이 50%를 넘어가게 되면 환불이 불가하니
                    참고해주세요
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="notice-img" src="/logo192.png" />
                  </td>
                  <td>
                    강의 수강률이 50%를 넘어가도 환불이 불가하니 참고하세요
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="notice-img" src="/logo192.png" />
                  </td>
                  <td>기타 문의 사항이 있으시면 문의를 남겨주세요</td>
                </tr>
              </table>
            </section>
            <hr />
            <section id="review" className="section-box">
              <h5>
                <b>후기</b>
              </h5>
              <div className="review-box">
                <img className="img2" src="/img/psy.jpeg"></img>
                <span className="review-nickname">nickname</span>
                <div className="review-rating">
                  <HoverRating />
                </div>
                <div className="review-textarea">
                  <AutoHeightTextarea />
                </div>
              </div>
              <div className="review-box">
                <img className="img2" src="/img/psy.jpeg"></img>
                <span className="review-nickname">nickname</span>
                <div className="review-rating">
                  <HoverRating />
                </div>
                <div className="review-textarea">
                  <AutoHeightTextarea />
                </div>
              </div>
              <div className="review-box">
                <img className="img2" src="/img/psy.jpeg"></img>
                <span className="review-nickname">nickname</span>
                <div className="review-rating">
                  <HoverRating />
                </div>
                <div className="review-textarea">
                  <AutoHeightTextarea />
                </div>
              </div>
            </section>
          </div>
          <div className="main-cal">
            <div className="calendar-box" ref={calRef}>
              <div className="calendar-title">
                <h4>나만의 싸인 만들기 클래스</h4>
              </div>
              <div className="main-cal-cal">
                <Calendar3 id="Cal" />
              </div>

              <div className="calendar-button-box">
                <button className="calendar-button1">찜하기</button>
                <button className="calendar-button2">공유하기</button>
              </div>
              <div className="calendar-regist-box"></div>
              <div className="calendar-regist">
                <span className="calendar-text">신청하기</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="detail-main">
        <h4>{item.course_nm}</h4>
        <p>강의번호: {item.course_idx}</p>
        <p>강의유형: {item.course_type}</p>
        <p>강의가격: {item.course_pri}</p>
      </div> */}
    </>
  );
};

export default Detail;
