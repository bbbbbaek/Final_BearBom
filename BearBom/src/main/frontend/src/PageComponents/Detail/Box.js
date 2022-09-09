import React from "react";

const Box = (props) => {
  let result;

  return (
    <div id="main-box" className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img}></img>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
