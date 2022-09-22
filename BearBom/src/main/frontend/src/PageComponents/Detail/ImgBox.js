import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Box from "./Box";
import "../../css/thumb.css";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";
import { useParams } from "react-router-dom";

// const choice = {
//   img1: {
//     name: "img1",
//     img: process.env.PUBLIC_URL + require("../../img/class001.webp"),
//   },
//   img2: {
//     name: "img2",
//     img: process.env.PUBLIC_URL + require("../../img/img2.jpeg"),
//   },
//   img3: {
//     name: "img3",
//     img: process.env.PUBLIC_URL + require("../../img/class002.webp"),
//   },
//   img4: {
//     name: "img4",
//     img: process.env.PUBLIC_URL + require("../../img/class003.webp"),
//   },
// };

function ImgBox({ course }) {
  const { id } = useParams();
  const [courseFile, setCourseFile] = useState([]);
  const [userSelect, setUserSelect] = useState();
  // const play = (a, index) => {
  //   setUserSelect({
  //     name: a,
  //     img: `http://localhost:8080/upload/${course.courseThumbnailNm}`,
  //   });
  //   console.log(setUserSelect);
  // };

  const play = (a, index) => {
    console.log(a);
    console.log(index);
    const nameNum = index + 1;
    console.log(nameNum);
    setUserSelect({
      name: `img${nameNum}`,
      img: `http://localhost:8080/upload/${a.img}`,
    });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

  useEffect(() => {
    if (courseFile.length !== 0) {
      console.log(courseFile);
      setUserSelect({
        name: `img1`,
        img: `http://localhost:8080/upload/${courseFile[0].img}`,
      });
    }
    //console.log(courseFile.courseFileNewNm);
  }, [courseFile]);

  useEffect(() => {
    // setCourseFile((prev) => ({ ...prev, courseIdx: id }));
    //데이터불러오는 axios
    //setCourse(response.data);
    axios({
      method: "get",
      url: API_BASE_URL + "/api/course/getCourseFile",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      params: { courseIdx: id },
    }).then((response) => {
      console.log(response.data);
      response.data.getCourseFile.map((file, index) => {
        // const tempFile = [
        //   ...courseFile,
        //   {
        //     name: `img${index + 1}`,
        //     img: `http://localhost:8080/upload/${file.courseFileNewNm}`,
        //   },
        // ];
        setCourseFile((prev) => [
          ...prev,
          {
            name: `img${index + 1}`,
            img: file.courseFileNewNm,
          },
        ]);
      });
      console.log(courseFile);
    });
  }, []);

  return (
    <div className="main-thumb-box">
      <div className="main-thumb">
        <Box item={userSelect} />
      </div>
      <Carousel responsive={responsive}>
        {courseFile &&
          courseFile.map((a, index) => (
            <div className="btn-thumb-box">
              <input
                className="btn-thumb1"
                onClick={() => play(a, index)}
                type="image"
                src={`http://localhost:8080/upload/${a.img}`}
                alt="1번째 사진"
              ></input>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
export default ImgBox;
