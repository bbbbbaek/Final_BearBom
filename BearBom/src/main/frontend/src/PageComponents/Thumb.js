import "../css/thumb.css";
import Box from "../PageComponents/Box";
import { useState } from "react";

const choice = {
  img1: {
    name: "img1",
    img: process.env.PUBLIC_URL + require("../img/psy.jpeg"),
  },
  img2: {
    name: "img2",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
  img3: {
    name: "img3",
    img: process.env.PUBLIC_URL + require("../img/img2.jpeg"),
  },
};

function Thumb() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  //   const judgement = (user, computer) => {
  //     if (user.name === computer.name) {
  //       return "tie";
  //     } else if (user.name === "scissors") {
  //       return computer.name === "paper" ? "win" : "lose";
  //     } else if (user.name === "rock") {
  //       return computer.name === "scissors" ? "win" : "lose";
  //     } else if (user.name === "paper") {
  //       return computer.name === "rock" ? "win" : "lose";
  //     }
  //   };

  //   const randomChoice = () => {
  //     let itemArray = Object.keys(choice);
  //     console.log("itemArray", itemArray);
  //     let randomNum = Math.floor(Math.random() * itemArray.length);
  //     console.log("randomNum", randomNum);
  //     let final = itemArray[randomNum];
  //     console.log("final", final);
  //     return choice[final];
  //   };

  return (
    <div>
      <div className="main">
        <Box item={userSelect} />
      </div>
      <div className="main">
        <input
          className="btn"
          onClick={() => play("img1")}
          type="image"
          src={require("../img/psy.jpeg")}
          alt="1번째 사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img2")}
          type="image"
          src={require("../img/img2.jpeg")}
          alt="2번째 사진"
        ></input>
        <input
          className="btn"
          onClick={() => play("img3")}
          type="image"
          src={require("../img/img2.jpeg")}
          alt="3번째 사진"
        ></input>
      </div>
    </div>
  );
}

export default Thumb;
