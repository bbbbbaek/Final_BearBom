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
  const [timeSlider, setTimeSlider] = useState([0, 1440]);

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
      url: API_BASE_URL + "/api/course",
    }).then((response) => {
      setCourse(response.data);
    });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const [locationSearch, setLocationSearch] = React.useState("");

  const [courseType, setCourseType] = React.useState([]);

  const courseTypeChange = (e) => {
    setCourseType(() => {
      return e.target.value;
    });
  };

  let dataCategory = ["오프라인", "온라인"];

  let [courseOnOff, setCourseOnOff] = useState("");

  const toggleActiveCategory = (e) => {
    setCourseOnOff((prev) => {
      return e.target.value;
    });
  };

  let dataWeek = ["평일", "토요일", "일요일"];

  let [courseStDate, setCourseStDate] = useState("");

  const toggleActiveWeek = (e) => {
    setCourseStDate((prev) => {
      return e.target.value;
    });
  };

  let dataLevel = ["입문", "중급", "고급"];

  let [courseLevel, setCourseLevel] = useState("");

  const toggleActiveLevel = (e) => {
    setCourseLevel((prev) => {
      return e.target.value;
    });
  };

  const [courseSearch, setCourseSearch] = useState("");
  const [courseStTime, setCourseStTime] = useState("");
  const [courseEndTime, setCourseEndTime] = useState("");
  const [courseCostMin, setCourseCostMin] = useState("");
  const [courseCostMax, setCourseCostMax] = useState("");

  // searchData(props) {
  //   super(props);
  //   this.state = {
  //     courseSearch = '',
  //     locationSearch = '',
  //     courseType = '',
  //     courseOnOff = '',
  //     courseDate = '',
  //     courseStTime = '',
  //     courseEndTime = '',
  //     courseLevel = '',
  //     courseCostMin = '',
  //     courseCostMax = ''
  //   };
  // };

  // addFormData = () => {
  //   const url = '/api/course';
  //   const formData = new FormData();
  //   formData.append('courseSearch', this.state.courseSearch);
  //   formData.append('locationSearch', this.state.locationSearch);
  //   formData.append('courseType', this.state.courseType);
  //   formData.append('courseOnOff', this.state.courseOnOff);
  //   formData.append('courseDate', this.state.courseDate);
  //   formData.append('courseStTime', this.state.courseStTime);
  //   formData.append('courseEndTime', this.state.courseEndTime);
  //   formData.append('courseLevel', this.state.courseLevel);
  //   formData.append('courseCostMin', this.state.courseCostMin);
  //   formData.append('courseCostMax', this.state.courseCostMax);

  //   return post(url, formData);
  // }

  const onSubmitSearchHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: API_BASE_URL + "/api/course",
      data: { ...searchInfo },
    }).then((responseSearchData) => {
      console.log(responseSearchData);
      window.location.href = "/course";
    });
  };

  const [searchInfo, setSearchInfo] = useState({});

  const addSearchInfo = (e) => {
    const newSearchInfo = {
      ...searchInfo,
      [e.target.name]: e.target.value,
    };

    setSearchInfo(newSearchInfo);
  };

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   //   setLoading(true);
  //   //   const responsePage = await axios.get(
  //   //     "https://jsonplaceholder.typicode.com/posts"
  //   //     // API_BASE_URL + "/api/course/getCourseList"
  //   //   );
  //   //   setPosts(responsePage.data);
  //   //   setLoading(false);
  //   // };
  //   // fetchData();
  //   axios({
  //     method: "get",
  //     url: API_BASE_URL + "/api/course/getCourseList",
  //   }).then((response) => {
  //     setPosts(response.data);
  //   });
  // }, []);

  const [data, setData] = useState(stateText);
  const [pageData, setPageData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPageData(data.slice(0, 10));
  }, []);
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
                      placeholder="클래스 검색"
                      aria-label="classSearch"
                      aria-describedby="btnGroupAddon"
                      name="courseSearch"
                      value={courseSearch}
                      // onChange={handleValueChange}
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
                      // onChange={handleValueChange}
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
                      label="categorySel"
                      name="courseType"
                      value={courseType}
                      // onChange={handleValueChange}
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
              <div className="container">
                {dataLevel.map((item, idx) => {
                  return (
                    <>
                      <button
                        value={idx}
                        className={
                          "btn" + (idx == courseLevel ? " active" : "")
                        }
                        onClick={toggleActiveLevel}
                        id="btnDeco"
                        name="courseLevel"
                        // onChange={handleValueChange}
                      >
                        {item}
                      </button>
                    </>
                  );
                })}
              </div>
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
                  name="courseCost"
                  // onChange={handleValueChange}
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
                  name="courseCost"
                  // onChange={handleValueChange}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button
                type="submit"
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
          {pageData.map(() => {
            return (
              <div className="searchContent">
                {data.slice(offset, offset + limit).map((minidata) => (
                  <MiniCard
                    id={minidata.id}
                    thumbnail={minidata.thumbnail}
                    title={minidata.title}
                    condition={true}
                  />
                ))}
              </div>
            );
          })}
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
