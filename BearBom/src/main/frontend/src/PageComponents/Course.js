import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../css/course.css";
import {
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import MiniCard from "./MiniCard";
import "../css/mainpage.css";
import "../css/mainpage.scss";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { API_BASE_URL } from "../app-config";
import { Link } from "react-router-dom";

function valuetext(priceSlider) {
  return `${priceSlider}원`;
}

function valueDate(dateMdf) {
  return new Date(dateMdf);
}
// 강좌 조회 페이지
const Course = (props) => {
  const [timeSlider, setTimeSlider] = useState([0, 24]);

  const handleChange1 = (event, newValue) => {
    setTimeSlider(newValue);
  };

  const [priceSlider, setPriceSlider] = useState([0, 1000000]);

  const handleChange2 = (event, newValue) => {
    setPriceSlider(newValue);
  };

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
  // const onClickClassRegist = () => {
  //   history.push("/course/registration");
  // };

  let navigate = useNavigate();

  const [city, setCity] = React.useState("");

  const handleChange3 = (event) => {
    setCity(event.target.value);
  };

  const [categorySel, setCategorySel] = React.useState("");

  const handleChange4 = (event) => {
    setCategorySel(event.target.value);
  };

  // const [timeSlider, setTimeSlider] = React.useState(30);

  // const handleChange5 = (event, newValue) => {
  //   setTimeSlider(newValue);
  // };

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <div className="searchForm">
              <div>
                <InputGroup>
                  <InputGroup.Text id="btnGroupAddon">
                    <img
                      className="searchIcon2"
                      src={require("../images/search-icon3.png")}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="클래스 검색"
                    aria-label="classSearch"
                    aria-describedby="btnGroupAddon"
                  />
                </InputGroup>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} className="category-font">
            지역
          </Col>
          <Col>
            <Dropdown>
              <div>
                <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                  <InputLabel id="demo-select-small">지역</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={city}
                    label="city"
                    onChange={handleChange3}
                  >
                    <MenuItem value="">
                      <em>지역검색</em>
                    </MenuItem>
                    <MenuItem value={1}>전체</MenuItem>
                    <MenuItem value={2}>서울</MenuItem>
                    <MenuItem value={3}>경기</MenuItem>
                    <MenuItem value={4}>인천</MenuItem>
                    <MenuItem value={5}>강원</MenuItem>
                    <MenuItem value={6}>대구</MenuItem>
                    <MenuItem value={7}>부산</MenuItem>
                    <MenuItem value={8}>경상북도</MenuItem>
                    <MenuItem value={9}>경상남도</MenuItem>
                    <MenuItem value={10}>울산</MenuItem>
                    <MenuItem value={11}>광주</MenuItem>
                    <MenuItem value={12}>전라북도</MenuItem>
                    <MenuItem value={13}>전라남도</MenuItem>
                    <MenuItem value={14}>세종</MenuItem>
                    <MenuItem value={15}>제주</MenuItem>
                    <MenuItem value={16}>충청북도</MenuItem>
                    <MenuItem value={17}>충청남도</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Dropdown>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} className="category-font">
            카테고리
          </Col>
          <Col>
            <Dropdown>
              <div>
                <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                  <InputLabel id="demo-select-small">카테고리</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={categorySel}
                    label="categorySel"
                    onChange={handleChange4}
                  >
                    <MenuItem value="">
                      <em>카테고리검색</em>
                    </MenuItem>
                    <MenuItem value={1}>전체</MenuItem>
                    <MenuItem value={2}>핸드메이드</MenuItem>
                    <MenuItem value={3}>쿠킹</MenuItem>
                    <MenuItem value={4}>플라워·가드닝</MenuItem>
                    <MenuItem value={5}>드로잉</MenuItem>
                    <MenuItem value={6}>음악</MenuItem>
                    <MenuItem value={7}>요가·필라테스</MenuItem>
                    <MenuItem value={8}>레져·스포츠</MenuItem>
                    <MenuItem value={9}>뷰티</MenuItem>
                    <MenuItem value={10}>반려동물</MenuItem>
                    <MenuItem value={11}>체험</MenuItem>
                    <MenuItem value={12}>자기계발</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Dropdown>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} className="category-font">
            유형
          </Col>
          <Col className="class-category">
            <ButtonGroup name="btnGroup1">
              <Button
                variant="outline-dark"
                size="sm"
                className="btn-category1"
                name="btn1"
              >
                원데이
              </Button>
              <Button
                variant="outline-dark"
                size="sm"
                className="btn-category2"
                name="btn1"
              >
                정기
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} className="category-font">
            요일
          </Col>
          <Col md={4} className="class-week">
            <ButtonGroup name="btnGroup2">
              <Button variant="outline-dark" size="sm" name="btn2">
                평일
              </Button>
              <Button variant="outline-dark" size="sm" name="btn2">
                토요일
              </Button>
              <Button variant="outline-dark" size="sm" name="btn2">
                일요일
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={1} className="category-font">
            시간
          </Col>

          <Col md={5} className="time-slider">
            <div className="time-slider-input1">
              <input
                type="text"
                placeholder="00:00"
                value={valueDate(timeSlider[0])}
                aria-invalid="false"
                inputMode="numeric"
                className="css-1x5jdmq"
              ></input>
            </div>
            <div className="time-slider-bar">
              <Box id="slider-top1">
                <Slider
                  getAriaLabel={() => "time range"}
                  value={timeSlider}
                  onChange={handleChange1}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  className="time-slider1"
                  max={24}
                />
              </Box>
            </div>
            <div className="time-slider-input2">
              <input
                type="text"
                placeholder="24:00"
                value={valueDate(timeSlider[1])}
                aria-invalid="false"
                inputMode="numeric"
                className="css-1x5jdmq"
              ></input>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={1} className="category-font">
            난이도
          </Col>
          <Col md={4} className="class-level">
            <Button variant="outline-dark" size="sm">
              입문
            </Button>
            <Button variant="outline-dark" size="sm">
              중급
            </Button>
            <Button variant="outline-dark" size="sm">
              고급
            </Button>
          </Col>
          <Col md={1} className="category-font">
            금액
          </Col>
          <Col md={5} className="price-slider">
            <div className="price-slider-input1">
              <input
                type="text"
                placeholder="0원"
                value={valuetext(priceSlider[0])}
                aria-invalid="false"
                inputMode="numeric"
                className="css-1x5jdmq"
              ></input>
            </div>
            <div className="price-slider-bar">
              <Box id="slider-top2">
                <Slider
                  getAriaLabel={() => "price range"}
                  value={priceSlider}
                  onChange={handleChange2}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  className="price-slider1"
                  max={1000000}
                />
              </Box>
            </div>
            <div className="price-slider-input2">
              <input
                type="text"
                placeholder="1,000,000원"
                value={valuetext(priceSlider[1])}
                aria-invalid="false"
                inputMode="numeric"
                className="css-1x5jdmq"
              ></input>
            </div>
          </Col>
        </Row>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Button variant="outline-dark" size="lg" className="refreshBtn">
              <img
                className="resetIcon"
                src={require("../images/reset-icon.png")}
              />
              초기화
            </Button>
          </Col>
          <Col xs lg="2">
            <Button variant="secondary" size="lg" className="searchBtn">
              검색하기
            </Button>
          </Col>
        </Row>
        <br />
        <hr
          style={{
            width: "100%",
            alignSelf: "center",
            height: "1px",
          }}
        />
      </Container>
      <br />
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
              >
                <Link
                  style={{ textDecoration: "none", color: "#ff5862" }}
                  to="/course/registration"
                >
                  클래스 오픈하기
                </Link>
              </Button>
            </div>
          </div>
        </div>
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

          {/* <div className="searchPaging"> */}
          {/* <Pagination id="pagePart">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination> */}
          {/* </div> */}
        </div>
      </main>
    </>
  );
};

export default Course;

const CarouselContainer = styled.div``;
