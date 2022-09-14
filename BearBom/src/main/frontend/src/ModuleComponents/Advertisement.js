import React from "react";
import "../css/advertisement.css";
import logo from "../images/logo.png";
import onepic from "../images/onepic.jpg";

const Advertisement = () => {
  return (
    <>
      <div
        className="ads-wrapper"
        // style={{ backgroundImage: `url(${onepic})` }}
      >
        <img
          src={onepic}
          alt="pic"
          className="ads-pic"
          onClick={() => {
            console.log("link to ads page");
          }}
        />
      </div>
    </>
  );
};

export default Advertisement;
