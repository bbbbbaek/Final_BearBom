import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../../css/course.css";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import MiniCard from "../MiniCard";
import "../../css/mainpage.css";
import "../../css/mainpage.scss";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

import { Link } from "react-router-dom";
import "../../css/btnDeco.scss";
import { API_BASE_URL } from "../../app-config";

function valuetext(priceSlider) {
  return `${priceSlider}원`;
}

// function valueDate(dateMdf) {
//   return new Date(dateMdf);
// }

let hour;
let minu;

function valueDate(time) {
  hour = Math.floor(time / 60);
  minu = Math.floor(time % 60);

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minu < 10) {
    minu = "0" + minu;
  }

  return `${hour}:${minu}`;
}

// 강좌 조회 페이지
const CourseSearch = () => {
  // CMMNCODE 정보
  const cmmnCode = [
    {
      id: "A01",
      nm: "핸드메이드",
      type: "A",
    },
    {
      id: "A02",
      nm: "쿠킹",
      type: "A",
    },
    {
      id: "A03",
      nm: "플라워",
      type: "A",
    },
    {
      id: "A04",
      nm: "드로잉",
      type: "A",
    },
    {
      id: "A05",
      nm: "음악",
      type: "A",
    },
    {
      id: "A06",
      nm: "요가",
      type: "A",
    },
    {
      id: "A07",
      nm: "필라테스",
      type: "A",
    },
    {
      id: "A08",
      nm: "레져",
      type: "A",
    },
    {
      id: "A09",
      nm: "뷰티",
      type: "A",
    },
    {
      id: "A10",
      nm: "반려동물",
      type: "A",
    },
    {
      id: "A11",
      nm: "체험",
      type: "A",
    },
    {
      id: "A12",
      nm: "자기계발",
      type: "A",
    },
    {
      id: "B01",
      nm: "서울",
      type: "B",
    },
    {
      id: "B02",
      nm: "경기",
      type: "B",
    },
    {
      id: "B03",
      nm: "부산",
      type: "B",
    },
    {
      id: "B04",
      nm: "인천",
      type: "B",
    },
    {
      id: "B05",
      nm: "대구",
      type: "B",
    },
    {
      id: "B06",
      nm: "울산",
      type: "B",
    },
    {
      id: "B07",
      nm: "광주",
      type: "B",
    },
    {
      id: "B08",
      nm: "대전",
      type: "B",
    },
    {
      id: "B09",
      nm: "경상남도",
      type: "B",
    },
    {
      id: "B10",
      nm: "경상북도",
      type: "B",
    },
    {
      id: "B11",
      nm: "전라남도",
      type: "B",
    },
    {
      id: "B12",
      nm: "전라북도",
      type: "B",
    },
    {
      id: "B13",
      nm: "충청남도",
      type: "B",
    },
    {
      id: "B14",
      nm: "충청북도",
      type: "B",
    },
    {
      id: "B15",
      nm: "강원도",
      type: "B",
    },
    {
      id: "B16",
      nm: "제주도",
      type: "B",
    },
    {
      id: "B17",
      nm: "세종",
      type: "B",
    },
  ];

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
    {
      id: "pp-08",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-09",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-10",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-11",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
    {
      id: "pp-12",
      title: "Kids-story",
      artist: "Thomas Buisson",
      desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
      thumbnail:
        "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
      price: 10,
      pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    },
  ];

  const onSubmitSearchHandler = (event) => {
    event.preventDefault();
  };

  //검색 값 저장
  const [courseNm, setCourseNm] = useState("");

  //검색 change 값
  const onChangeCourseNm = (e) => {
    const courseNmCurrent = e.target.value;
  };

  return (
    <>
      <br />
      <Container>
        <form noValidate id="searchSubmitForm" onSubmit={onSubmitSearchHandler}>
          <div className="searchForm">
            <div>
              <TextField
                type="text"
                placeholder="클래스 검색"
                name="courseNm"
                value={courseNm}
                onChange={onChangeCourseNm}
              />
              <img
                className="searchIcon2"
                src={require("../../images/search-icon3.png")}
                alt="돋보기"
              />
            </div>
          </div>
        </form>
      </Container>
      <br />
      <main id="wrapper" className="main-contents">
        <hr
          style={{
            width: "100%",
            alignSelf: "center",
            height: "1px",
          }}
        />
        <div className="list-box favorite-class-area">
          <div className="list-header">
            <h2>클래스 검색해서 베어봄!</h2>
          </div>
          <div className="searchContent">
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
          </div>
          <hr
            style={{
              width: "100%",
              alignSelf: "center",
              height: "1px",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default CourseSearch;
