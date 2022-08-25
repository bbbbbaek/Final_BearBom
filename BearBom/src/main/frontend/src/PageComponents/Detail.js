import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../ModuleComponents/data";
import "../css/detail.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Calendar from "./Calendar.js";

const Detail = () => {
  // 아래에 왜 초기값을 객체 형태로 주지 않으면 오류가 나는지 모르겠음
  const [course, setCourse] = useState(
    data
    // {
    //   course_idx: "0",
    //   course_nm: "happy lecture",
    // },
  );

  const { id } = useParams(data);

  // a.id: data의 id속성
  // id: useParam으로 불러온 url의 숫자값
  let item = course.find((a) => (a.course_idx = id));
  console.log(item);
  return (
    <>
      <div className="main-container">
        <div className="img">
          <div className="main-img">
            <img className="img1" src="/img/psy.jpeg" />
          </div>
          <div className="sub-total-img">
            <div className="sub-img1">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img2">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img3">
              <img className="img1" src="/img/psy.jpeg" />
            </div>
            <div className="sub-img4">
              <img className="img1" src="/img/psy.jpeg" />
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
            <section id="teacher">
              <h5>
                <b>강사소개</b>
              </h5>
              <div>
                <img src="require(./)">김광민 강사님</img>
              </div>
              <p>안녕하세여 김광민입니다~~~~~~~~ 감사합니다~~~~~~</p>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <section id="class">
              <h5>
                <b>클래스소개</b>
              </h5>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <section id="cur">
              <h5>
                <b>커리큘럼</b>
              </h5>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="time">
              <h5>
                <b>시간표</b>
              </h5>
            </section>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <section id="loc">
              <h5>
                <b>위치</b>
              </h5>
            </section>

            <br />
            <br />
            <hr />
            <section id="notice">
              <h5>
                <b>유의사항</b>
              </h5>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <section id="review">
              <h5>
                <b>후기</b>
              </h5>
            </section>
          </div>
          <div className="main-cal">
            <div className="calendar-box">
              <div className="calendar-title">
                <h4>나만의 싸인 만들기 클래스</h4>
              </div>
              <Calendar className="sssss" />
              <div className="calendar-button-box">
                <button className="calendar-button1">찜하기</button>
                <button className="calendar-button2">공유하기</button>
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
