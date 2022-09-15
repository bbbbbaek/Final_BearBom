import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "../css/course.css";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import MiniCard from "./MiniCard";
import "../css/mainpage.css";
import "../css/mainpage.scss";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { post } from "axios";
import { API_BASE_URL } from "../app-config";
import { Link } from "react-router-dom";
import "../css/btnDeco.scss";
import "../css/classview.css";
import classData from "../PageComponents/AdminPage/classData";
import Pagination from "@mui/material/Pagination";

function valuetext(priceSlider) {
  return `${priceSlider}원`;
}

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
const Course = (props) => {
  const [courseSearch, setCourseSearch] = useState("");
  const [locationSearch, setLocationSearch] = React.useState("");
  const [courseType, setCourseType] = React.useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseStTime, setCourseStTime] = useState("");
  const [courseEndTime, setCourseEndTime] = useState("");
  const [courseStCost, setCourseStCost] = useState("");
  const [courseEndCost, setCourseEndCost] = useState("");
  const [courseLevelName, setCourseLevelName] = useState("");

  const [searchInfo, setSearchInfo] = useState({});

  const addSearchInfo = (e) => {
    const newSearchInfo = {
      ...searchInfo,
      [e.target.name]: e.target.value,
    };

    setSearchInfo(newSearchInfo);
  };

  const onChangeSearchNm = (e) => {
    const courseSearchNm = e.target.value;
    setCourseSearch(courseSearchNm);
    addSearchInfo(e);
  };

  const onChangeLocation = (e) => {
    const locationChange = e.target.value;
    setLocationSearch(locationChange);
    addSearchInfo(e);
  };

  const onChangeType = (e) => {
    const typeChange = e.target.value;
    setCourseType(typeChange);
    addSearchInfo(e);
  };

  const onChangeLevel = (e) => {
    const levelChange = e.target.value;
    setCourseLevel(levelChange);
    addSearchInfo(e);
  };

  const onChangeStTime = (e) => {
    console.log(e.target.value);
    const stTimeChange = e.target.value;
    setCourseStTime(stTimeChange);
    addSearchInfo(e);
  };

  const onChangeEndTime = (e) => {
    const endTimeChange = e.target.value;
    setCourseEndTime(endTimeChange);
    addSearchInfo(e);
  };

  const onChangeStCost = (e) => {
    const costChange = e.target.value;
    setCourseStCost(costChange);
    addSearchInfo(e);
  };

  const onChangeEndCost = (e) => {
    const costChange = e.target.value;
    setCourseEndCost(costChange);
    addSearchInfo(e);
  };

  const onSubmitSearchHandler = (e) => {
    console.log({
      ...searchInfo,
      courseSearch: courseSearch,
      locationSearch: locationSearch,
      courseType: courseType,
      courseLevel: courseLevelName,
      courseStTime: courseStTime,
      courseEndTime: courseEndTime,
      courseStCost: courseStCost,
      courseEndCost: courseEndCost,
    });
    e.preventDefault();

    axios({
      method: "post",
      url: API_BASE_URL + "/api/course/searchCourse",
      data: {
        ...searchInfo,
        courseSearch: courseSearch,
        locationSearch: locationSearch,
        courseType: courseType,
        courseLevel: courseLevelName,
        courseStTime: courseStTime,
        courseEndTime: courseEndTime,
        courseStCost: courseStCost,
        courseEndCost: courseEndCost,
      },
    }).then((responseSearchData) => {
      console.log(responseSearchData);
      window.location.href = "/course";
    });
  };

  const [timeSlider, setTimeSlider] = useState([0, 1440]);

  const handleChange1 = (event, newValue) => {
    setTimeSlider(newValue);
  };

  useEffect(() => {
    setCourseStTime(valueDate(timeSlider[0]));
    setCourseEndTime(valueDate(timeSlider[1]));
  }, [timeSlider]);

  const [priceSlider, setPriceSlider] = useState([0, 1000000]);

  const handleChange2 = (event, newValue) => {
    setPriceSlider(newValue);
  };

  useEffect(() => {
    setCourseStCost(valuetext(priceSlider[0]).slice(0, -1));
    setCourseEndCost(valuetext(priceSlider[1]).slice(0, -1));
  }, [priceSlider]);

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

  // const stateTextPage = [
  //   {
  //     id: "pp-01",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-02",
  //     title: "mockyapp",
  //     artist: "Ahmed Amr",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
  //     price: 20,
  //     pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  //   },
  //   {
  //     id: "pp-03",
  //     title: "mockyapp",
  //     artist: "Ahmed Amr",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
  //     price: 20,
  //     pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  //   },
  //   {
  //     id: "pp-04",
  //     title: "mockyapp",
  //     artist: "Ahmed Amr",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
  //     price: 20,
  //     pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  //   },
  //   {
  //     id: "pp-05",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-06",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-07",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-08",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-09",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-10",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-11",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  //   {
  //     id: "pp-12",
  //     title: "Kids-story",
  //     artist: "Thomas Buisson",
  //     desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital produc",
  //     thumbnail:
  //       "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
  //     price: 10,
  //     pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  //   },
  // ];

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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  // const [locationSearch, setLocationSearch] = React.useState("");

  // const [courseType, setCourseType] = React.useState([]);

  const courseTypeChange = (e) => {
    setCourseType(() => {
      return e.target.value;
    });
  };

  // let dataCategory = ["오프라인", "온라인"];

  // let [courseOnOff, setCourseOnOff] = useState("");

  // const toggleActiveCategory = (e) => {
  //   setCourseOnOff((prev) => {
  //     return e.target.value;
  //   });
  // };

  // let dataWeek = ["평일", "토요일", "일요일"];

  // let [courseStDate, setCourseStDate] = useState("");

  // const toggleActiveWeek = (e) => {
  //   setCourseStDate((prev) => {
  //     return e.target.value;
  //   });
  // };

  const dataLevel = ["입문", "중급", "고급"];

  // const [courseLevel, setCourseLevel] = useState("");

  const toggleActiveLevel = (e) => {
    setCourseLevel((prev) => {
      return e.target.value;
    });
    setCourseLevelName(dataLevel[e.target.value]);
    addSearchInfo(e);
  };

  const [data, setData] = useState(stateText);
  const [pageData, setPageData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPageData(data.slice(0, 12));
  }, []);

  useEffect(() => {
    if (pageData.length !== 0) {
      console.log(pageData.length);
    }
  }, [pageData]);
  const pagingFunc = (pageNum) => {
    setPageData(data.slice(10 * pageNum - 10, 10 * pageNum));
  };

  return (
    <>
      <br />
      <Container>
        <form
          noValidate
          id="searchSubmitForm"
          name="searchSubmitForm"
          onSubmit={onSubmitSearchHandler}
        >
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
                      placeholder="클래스 검색."
                      aria-label="classSearch"
                      aria-describedby="btnGroupAddon"
                      name="courseSearch"
                      value={courseSearch}
                      onChange={onChangeSearchNm}
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
                      label="city"
                      name="locationSearch"
                      value={locationSearch}
                      onChange={onChangeLocation}
                    >
                      <MenuItem value="">
                        <em>지역검색</em>
                      </MenuItem>
                      <MenuItem value={"전체"}>전체</MenuItem>
                      <MenuItem value={"서울"}>서울</MenuItem>
                      <MenuItem value={"경기"}>경기</MenuItem>
                      <MenuItem value={"인천"}>인천</MenuItem>
                      <MenuItem value={"강원"}>강원</MenuItem>
                      <MenuItem value={"대구"}>대구</MenuItem>
                      <MenuItem value={"부산"}>부산</MenuItem>
                      <MenuItem value={"경상북도"}>경상북도</MenuItem>
                      <MenuItem value={"경상남도"}>경상남도</MenuItem>
                      <MenuItem value={"울산"}>울산</MenuItem>
                      <MenuItem value={"광주"}>광주</MenuItem>
                      <MenuItem value={"전라북도"}>전라북도</MenuItem>
                      <MenuItem value={"전라남도"}>전라남도</MenuItem>
                      <MenuItem value={"세종"}>세종</MenuItem>
                      <MenuItem value={"제주"}>제주</MenuItem>
                      <MenuItem value={"충청북도"}>충청북도</MenuItem>
                      <MenuItem value={"충청남도"}>충청남도</MenuItem>
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
                      label="categorySel"
                      name="courseType"
                      value={courseType}
                      onChange={onChangeType}
                    >
                      <MenuItem value="">
                        <em>카테고리검색</em>
                      </MenuItem>
                      <MenuItem value={"전체"}>전체</MenuItem>
                      <MenuItem value={"핸드메이드"}>핸드메이드</MenuItem>
                      <MenuItem value={"쿠킹"}>쿠킹</MenuItem>
                      <MenuItem value={"플라워·가드닝"}>플라워·가드닝</MenuItem>
                      <MenuItem value={"드로잉"}>드로잉</MenuItem>
                      <MenuItem value={"음악"}>음악</MenuItem>
                      <MenuItem value={"요가·필라테스"}>요가·필라테스</MenuItem>
                      <MenuItem value={"레져·스포츠"}>레져·스포츠</MenuItem>
                      <MenuItem value={"뷰티"}>뷰티</MenuItem>
                      <MenuItem value={"반려동물"}>반려동물</MenuItem>
                      <MenuItem value={"체험"}>체험</MenuItem>
                      <MenuItem value={"자기계발"}>자기계발</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Dropdown>
            </Col>
          </Row>
          <br />
          {/* <Row>
            <Col md={1} className="category-font">
              유형
            </Col>
            <Col className="class-category">
              <ButtonGroup name="btnGroup1">
                <div className="container">
                  {dataCategory.map((item, idx) => {
                    return (
                      <>
                        <button
                          value={idx}
                          className={
                            "btn" + (idx == courseOnOff ? " active" : "")
                          }
                          onClick={toggleActiveCategory}
                          id="btnDeco"
                          name="courseOnOff"
                          // onChange={handleValueChange}
                        >
                          {item}
                        </button>
                      </>
                    );
                  })}
                </div>
              </ButtonGroup>
            </Col>
          </Row> */}
          <br />
          <Row>
            {/* <Col md={1} className="category-font">
              요일
            </Col>
            <Col md={4} className="class-week">
              <ButtonGroup name="btnGroup2">
                <div className="container">
                  {dataWeek.map((item, idx) => {
                    return (
                      <>
                        <button
                          value={idx}
                          className={
                            "btn" + (idx == courseStDate ? " active" : "")
                          }
                          onClick={toggleActiveWeek}
                          id="btnDeco"
                          name="courseStDate"
                          // onChange={handleValueChange}
                        >
                          {item}
                        </button>
                      </>
                    );
                  })}
                </div>
              </ButtonGroup>
            </Col> */}

            <Col md={1} className="category-font">
              난이도
            </Col>
            <Col md={4} className="class-level">
              <div className="container">
                {dataLevel.map((item, idx) => {
                  return (
                    <>
                      <button
                        type="button"
                        value={idx}
                        className={
                          "btn" + (idx == courseLevel ? " active" : "")
                        }
                        onClick={toggleActiveLevel}
                        id="btnDeco"
                        name="courseLevel"
                        // onChange={onChangeLevel}
                      >
                        {item}
                      </button>
                    </>
                  );
                })}
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
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
                  name="courseStTime"
                  onChange={onChangeStTime}
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
                    min={0}
                    max={1440}
                    step="10"
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
                  name="courseEndTime"
                  onChange={onChangeEndTime}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
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
                  name="courseStost"
                  onChange={onChangeStCost}
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
                    step="1000"
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
                  name="courseEndCost"
                  onChange={onChangeEndCost}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button
                type="button"
                variant="outline-dark"
                size="lg"
                id="refreshBtn"
              >
                <img id="resetIcon" src={require("../images/reset-icon.png")} />
                초기화
              </Button>
            </Col>
            <Col xs lg="2">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                id="searchBtn"
                // onSubmit={onSubmitSearchHandler}
                // onClick={}
              >
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
        </form>
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
          <hr
            style={{
              width: "100%",
              alignSelf: "center",
              height: "1px",
            }}
          />
          <div className="searchContent">
            {pageData.map((minidata) => (
              <MiniCard
                id={minidata.id}
                thumbnail={minidata.thumbnail}
                title={minidata.title}
                condition={true}
              />
            ))}
          </div>
          <Stack spacing={2}>
            <Pagination
              boundaryCount={10}
              count={10}
              color="primary"
              showFirstButton={true}
              showLastButton={true}
              onChange={(e) => {
                pagingFunc(e.target.textContent);
              }}
            />
          </Stack>
        </div>
      </main>
    </>
  );
};

export default Course;

const CarouselContainer = styled.div``;
