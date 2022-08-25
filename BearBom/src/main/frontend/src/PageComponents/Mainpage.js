import React, { useCallback, useEffect, useState } from "react";
import MiniCard from "./MiniCard";
import "../css/mainpage.css";
import "../css/mainpage.scss";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
// import Carousel from "react-bootstrap/Carousel";

import "react-multi-carousel/lib/styles.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../app-config";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Mainpage = (props) => {
  const [course, setCourse] = useState([]);

  const stateText = [
    {
      id: "pp-01",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-02",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-03",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-04",
      title: "mockyapp",
      artist: "Ahmed Amr",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
      price: 20,
      pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    },
    {
      id: "pp-05",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-06",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-07",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const initialArray = [
    `지금 베어봄과 함께
    일상을 취미로 채워보세요!`,
    `모든 일상이 즐겁기만 할 수는 없죠.
    그렇지만 우리는,`,
    `일상 틈틈이, 즐거운 일들을
    채워나갈 수 있어요!`,
  ]; // 원본 배열

  const [text, setText] = useState([]);

  useEffect(() => {
    let i = 0;
    setText(initialArray.filter((item, index) => index === i));
    setInterval(() => {
      i++;
      setText(initialArray.filter((item, index) => index === i));
      if (initialArray.length - 1 === i) {
        i = -1;
      }
    }, 3000);
    //데이터불러오는 axios
    //setCourse(response.data);
    axios({
      method: "get",
      url: API_BASE_URL + "/api/course/getCourseList",
    }).then((response) => {
      setCourse(response.data);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const [loading, setLoading] = useState(true);
  // const onClickClassRegist = useEffect(() => {}, []);

  const navigate = useNavigate();

  const onClickClassRegist = () => {
    navigate("/course/registration");
  };

  return (
    <>
      <div className="top-vod-banner-container">
        <video
          className="vod"
          id="mainBannerVideo"
          preload="metadata"
          poster="https://d1x9f5mf11b8gz.cloudfront.net/vod/20210831/main-poster.gif"
          controlsList="nodownload"
          autoPlay
          muted
          playsInline
          loop
        >
          <source
            src="https://d2g3bq8rd0lmrw.cloudfront.net/vod/20210907/pcmain.mp4"
            type="video/mp4"
          />
        </video>
        <div className="main-title-area">
          <div className="msg-wrapper">
            {/* <div className="anim-msg msg-1 visible">
              <img
                className="sub-msg"
                src="pc-main-title.png"
                width="100%"
                alt="대체이미지"
              />
            </div> */}

            <div className="anim-msg msg-3 visible">
              <p className="sub-msg visible">
                <strong>
                  {/* 지금 베어봄과 함께 */}
                  {/* <br /> */}
                  {/* 일상을 취미로 채워보세요! */}
                  {text}
                </strong>
              </p>
            </div>
          </div>
          <div className="chevronContainer">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </div>
      </div>
      <main id="wrapper" className="main-contents">
        <div className="list-box h-2-box-panel main-wrapper-child-1">
          <div>
            <h1>
              베어봄에서
              <br />
              당신의 취미를 찾아보세요
            </h1>
            <div class="appstore-btn-list-area"></div>
          </div>
          <div>
            <h1>
              솜씨를 뽐내주실 작가님,
              <br />
              여기 계시네요!
            </h1>
            <div class="class-open-page-move-area">
              {/* class="btn class-open-page-move-btn" */}
              <Button
                className="class-open-page-move-btn"
                variant="light"
                // onClickClassRegist={onClickClassRegist}
                onClick={onClickClassRegist}
              >
                {/* <Link
                  style={{ textDecoration: "none", color: "#ff5862" }}
                  to="/course/registration"
                >
                  클래스 오픈하기
                </Link> */}
                클래스 오픈하기
              </Button>
            </div>
          </div>
        </div>

        <div className="list-box favorite-class-area">
          <div className="list-header">
            <h2>베어봄이 검증한 이달의 인기클래스!</h2>
          </div>
          <div>
            <CarouselContainer>
              <div className="favorite-list">
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <Carousel responsive={responsive}>
                    {/* <div className="test001"> */}

                    {stateText.map((data) => (
                      // 여기서 {}말고 ()로 하면 return 안해도 됨
                      //   이게 props 넣는거

                      <MiniCard
                        id={data.id}
                        thumbnail={data.thumbnail}
                        title={data.title}
                        condition={true}
                        // 예시로 보여주기 위함
                      />
                    ))}
                    {/* </div> */}
                  </Carousel>
                </div>
              </div>
            </CarouselContainer>
          </div>
        </div>
        <div className="list-box new-class-area">
          <div className="list-header">
            <h2>오늘 오픈 했어요!</h2>
          </div>
          <div>
            <CarouselContainer>
              <div className="favorite-list">
                <div style={{ width: "100%", margin: "0 auto" }}>
                  <Carousel responsive={responsive}>
                    {/* <div className="test001"> */}

                    {stateText.map((data) => (
                      // 여기서 {}말고 ()로 하면 return 안해도 됨
                      //   이게 props 넣는거

                      <MiniCard
                        id={data.id}
                        thumbnail={data.thumbnail}
                        title={data.title}
                        condition={true}
                        // 예시로 보여주기 위함
                      />
                    ))}
                    {/* </div> */}
                  </Carousel>
                </div>
              </div>
            </CarouselContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Mainpage;

const CarouselContainer = styled.div``;
