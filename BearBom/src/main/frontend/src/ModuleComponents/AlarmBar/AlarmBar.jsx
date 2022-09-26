import React from "react";
import "./alarmbar.scss";

const AlarmBar = (type) => {
  let itemlist = [1, 2];
  switch (type) {
    case "cart":
      console.log("cart");
      break;
    case "push":
      console.log("push");
      break;
    default:
      break;
  }
  return (
    <>
      <div className="alarmbar">
        {itemlist ? (
          <div className="lists">
            {itemlist.map((a, i) => {
              return (
                <div className="list">
                  <img src="" alt="p" />
                  <span>{a}</span>
                </div>
              );
            })}
          </div>
        ) : (
          "조회할 내역이 없습니다."
        )}
      </div>
    </>
  );
};

export default AlarmBar;
