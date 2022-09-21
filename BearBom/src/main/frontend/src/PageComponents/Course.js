import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import MiniCard from "./MiniCard";
import CardSearch from "./CardSearch";
import "../css/mainpage.css";
import "../css/mainpage.scss";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { API_BASE_URL } from "../app-config";
import { Link } from "react-router-dom";
import "../css/btnDeco.scss";
import "../css/classview.css";

import classData from "../PageComponents/Admin/classData";
import Pagination from "../ModuleComponents/Pagination";

// import Pagination from "@mui/material/Pagination";
// import Pagination from "../ModuleComponents/Pagination";

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
  const [courseLevel, setCourseLevel] = useState(4);
  const [courseStTime, setCourseStTime] = useState("");
  const [courseEndTime, setCourseEndTime] = useState("");
  const [courseStCost, setCourseStCost] = useState("");
  const [courseEndCost, setCourseEndCost] = useState("");
  const [courseLevelName, setCourseLevelName] = useState("");
  const [locationCode, setLocationCode] = useState([]);
  const [categoryCode, setCategoryCode] = useState([]);

  const [searchInfo, setSearchInfo] = useState({});

  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/course/getCommonCodeList",
      method: "get",
    })
      .then((response) => {
        console.log(response.data);
        setLocationCode(response.data.locationCodeList);
        setCategoryCode(response.data.categoryCodeList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const onClickReset = (e) => {
    setCourseSearch("");
    setLocationSearch("");
    setCourseType("");
    setCourseLevel(4);
    setCourseStTime("");
    setCourseEndTime("");
    setCourseStCost("");
    setCourseEndCost("");
    setCourseLevelName("");
    setTimeSlider([0, 1440]);
    setPriceSlider([0, 1000000]);
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
        courseLocation: locationSearch,
        courseCategory: courseType,
        courseLevel: courseLevelName,
        courseStTime: courseStTime,
        courseEndTime: courseEndTime,
        courseStCost: courseStCost,
        courseEndCost: courseEndCost,
      },
    }).then((response) => {
      console.log(response);
      setData(response.data.getSearchProducts);
    });
  };

  // const onSubmitSearchHandler = async (e) => {
  //   navigate("/course/search/" + courseSearch);
  // };

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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let navigate = useNavigate();

  const courseTypeChange = (e) => {
    setCourseType(() => {
      return e.target.value;
    });
  };

  const dataLevel = ["입문", "중급", "고급"];

  const toggleActiveLevel = (e) => {
    setCourseLevel((prev) => {
      return e.target.value;
    });
    setCourseLevelName(dataLevel[e.target.value]);
    addSearchInfo(e);
  };

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    (async () => {
      await axios({
        method: "get",
        url: API_BASE_URL + "/api/course/getCourseList",
      }).then((response) => {
        console.log(response.data);
        setData(response.data.getCourseList);
      });
    })();
  }, []);

  return (
    <>
      <br />
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
                        alt="test"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="클래스 검색"
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
                      name="courseLocation"
                      value={locationSearch}
                      onChange={onChangeLocation}
                    >
                      <MenuItem value="">
                        <em>지역검색</em>
                      </MenuItem>
                      <MenuItem value={"all"}>전체</MenuItem>
                      {locationCode.map((code) => (
                        <MenuItem value={code.cmmnCodeIdx}>
                          {code.cmmnCodeNm}
                        </MenuItem>
                      ))}
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
                      name="courseCategory"
                      value={courseType}
                      onChange={onChangeType}
                    >
                      <MenuItem value="">
                        <em>카테고리검색</em>
                      </MenuItem>
                      <MenuItem value={"all"}>전체</MenuItem>
                      {categoryCode.map((code) => (
                        <MenuItem value={code.cmmnCodeIdx}>
                          {code.cmmnCodeNm}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Dropdown>
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
                onClick={onClickReset}
              >
                초기화
                <img
                  id="resetIcon"
                  src={require("../images/reset-icon.png")}
                  alt="초기화"
                />
              </Button>
            </Col>
            <Col xs lg="2">
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                id="searchBtn"
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
          <label>
            페이지 당 표시할 게시물 수:&nbsp;
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <div className="searchContent">
            {data.slice(offset, offset + limit).map((data, i) => (
              <div key={i}>
                <CardSearch data={data} />
              </div>
            ))}
          </div>
          <Stack spacing={2}>
            <Pagination
              total={data.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </Stack>
        </div>
      </main>
    </>
  );
};

export default Course;
