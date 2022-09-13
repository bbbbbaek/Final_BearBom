// import "../../css/test123.css";

// function Test123() {
//   return (
//     <div className="carousel">
//       <ul className="slides">
//         <input type="radio" name="radio-buttons" id="img-1" checked />
//         <li className="slide-container">
//           <div className="slide-image">
//             <img src={require("../../img/img2.jpeg")} />
//           </div>
//           <div className="carousel-controls">
//             <label for="img-3" className="prev-slide">
//               <span>&lsaquo;</span>
//             </label>
//             <label for="img-2" className="next-slide">
//               <span>&rsaquo;</span>
//             </label>
//           </div>
//         </li>
//         <input type="radio" name="radio-buttons" id="img-2" />
//         <li className="slide-container">
//           <div className="slide-image">
//             <img src={require("../../img/psy.jpeg")} />
//           </div>
//           <div className="carousel-controls">
//             <label for="img-1" className="prev-slide">
//               <span>&lsaquo;</span>
//             </label>
//             <label for="img-3" className="next-slide">
//               <span>&rsaquo;</span>
//             </label>
//           </div>
//         </li>
//         <input type="radio" name="radio-buttons" id="img-3" />
//         <li className="slide-container">
//           <div className="slide-image">
//             <img src={require("../../img/classInfo.png")} />
//           </div>
//           <div className="carousel-controls">
//             <label for="img-2" className="prev-slide">
//               <span>&lsaquo;</span>
//             </label>
//             <label for="img-1" className="next-slide">
//               <span>&rsaquo;</span>
//             </label>
//           </div>
//         </li>
//         <div className="carousel-dots">
//           <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
//           <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
//           <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Test123;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Box from "./Box";
import "../../css/thumb.css";

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

function Test123() {
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
  return (
    <div className="main-thumb-box">
      <div className="main-thumb">
        <Box item={userSelect} />
      </div>
      <Carousel responsive={responsive}>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb1"
            onClick={() => play("img1")}
            type="image"
            src={require("../../img/psy.jpeg")}
            alt="1번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb2"
            onClick={() => play("img2")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="2번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb3"
            onClick={() => play("img3")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="3번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
        <div className="btn-thumb-box">
          <input
            className="btn-thumb4"
            onClick={() => play("img4")}
            type="image"
            src={require("../../img/img2.jpeg")}
            alt="4번째 사진"
          ></input>
        </div>
      </Carousel>
    </div>
  );
}
export default Test123;
