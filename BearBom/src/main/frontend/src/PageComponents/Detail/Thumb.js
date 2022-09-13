import "../../css/thumb.css";
import Box from "./Box";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + require("../../img/psy.jpeg"),
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + require("../../img/img2.jpeg"),
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + require("../../img/img2.jpeg"),
  },
  img4: {
    name: "img4",
    img: process.env.PUBLIC_URL + require("../../img/img2.jpeg"),
  },
};

function Thumb() {
  const [userSelect, setUserSelect] = useState(choice.img1);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

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
  const [test133, setTest133] = useState("");
  return (
    <>
      <div className="main-thumb-box">
        <div className="main-thumb">
          <Box item={userSelect} />
        </div>
        <div className="main-thumb">
          <input
            className="btn-thumb"
            onClick={() => {
              console.log(test133);
              play("img1");
            }}
            type="image"
            src={require("../../img/psy.jpeg")}
            alt="1번째 사진"
          ></input>
          <input
            className="btn-thumb"
            onClick={() => play("img2")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="2번째 사진"
          ></input>
          {/** test 입니다. */}
          <input
            className="btn-thumb"
            onClick={() => play("img3")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="3번째 사진"
          ></input>
          <input
            className="btn-thumb"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Thumb;
