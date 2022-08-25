import Box from "../PageComponents/Box";
import { useState } from "react";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
  img4: {
    name: "img4",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
};

function ImageThumb() {
  const [userSelect, setUserSelect] = useState(choice.img1);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <div className="imgBox">
          <div style={{ textAlign: "center" }}>
            <Box item={userSelect} />
          </div>
          <div className="thumbImg">
            <input
              className="btn"
              onClick={() => play("img1")}
              type="image"
              src={require("../img/img2.jpeg")}
              alt="1번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img2")}
              type="image"
              src={require("../img/img2.jpeg")}
              alt="2번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img3")}
              type="image"
              src={require("../img/img2.jpeg")}
              alt="3번째사진"
            ></input>
            <input
              className="btn"
              onClick={() => play("img4")}
              type="image"
              src={require("../img/img2.jpeg")}
              alt="4번째사진"
            ></input>
          </div>
          <p>
            <hr className="line1"></hr>
          </p>
        </div>
      </div>
    </>
  );
}

export default ImageThumb;
