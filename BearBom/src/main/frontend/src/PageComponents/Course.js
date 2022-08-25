import { useState, React, useEffect } from "react";
import "../css/course.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import data from "../ModuleComponents/data";

// 강좌 조회 페이지
const Course = () => {
  let [course, setCourse] = useState(data);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/course_example"
      )
      .then((result) => {
        let copy = [...course, ...result.data];
        setCourse(copy);
        console.log(copy);
      })
      .catch(console.log("failed to load data"));
  }, []);

  return (
    <>
      <div className="course-main">
        {course.map((a, i) => {
          return (
            <>
              <div className="testDiv" key={i}>
                <h4
                  onClick={() => {
                    navigate("/course/" + a.course_idx);
                  }}
                >
                  {a.course_nm}
                </h4>
                <hr />
                <p>강의번호: {a.course_idx}</p>
                <p>카테고리: {a.course_type}</p>
                <p>강의가격: {a.course_pri}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Course;
