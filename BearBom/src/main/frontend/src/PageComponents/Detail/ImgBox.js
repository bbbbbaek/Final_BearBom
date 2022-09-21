import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";
import Box from "./Box";
import "../../css/thumb.css";

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
  // const play = (userChoice) => {
  //   setUserSelect(choice[userChoice]);
  // };

  const [userSelect, setUserSelect] = useState();
  const play = (a) => {
    setUserSelect({
      name: a,
      img: `http://localhost:8080/upload/${course.courseThumbnailNm}`,
    });
    console.log(setUserSelect);
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
    if (course.length !== 0)
      setUserSelect({
        name: `img1`,
        img: `http://localhost:8080/upload/${course.courseThumbnailNm}`,
      });
    console.log(course.courseThumbnailNm);
  }, [course]);

  return (
    <div className="main-thumb-box">
      <div className="main-thumb">
        <Box item={userSelect} />
      </div>
      <Carousel responsive={responsive}>
        <div className="btn-thumb-box">
          {/* {course.map((a, index) => ( */}
          <input
            className="btn-thumb1"
            onClick={() => {
              play("img1");
              // play(a, index);
              console.log("ㅁㅁㅁㅁㅁㅁ");
            }}
            type="image"
            src={`http://localhost:8080/upload/${course.courseThumbnailNm}`}
            alt="1번째 사진"
          ></input>
          {/* ))} */}
        </div>
      </Carousel>
    </div>
  );
}
export default ImgBox;
