import React from "react";
import "./advertisement.scss";
import logo from "../../images/logo.png";
import onepic from "../../images/onepic.jpg";

const Advertisement = () => {
  return (
    <>
      <div
        className="advertisement"
        // style={{ backgroundImage: `url(${onepic})` }}
      >
        <img
          src={onepic}
          alt="pic"
          className="picture"
          onClick={() => {
            console.log("link to ads page");
          }}
        />
      </div>
    </>
  );
};

export default Advertisement;
