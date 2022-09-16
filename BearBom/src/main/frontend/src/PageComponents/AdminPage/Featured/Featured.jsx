import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Doughnut from "../Chart/Doughnut";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertIcon />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <Doughnut />
          </div>
          <p className="title">금일 매출</p>
          <p className="amount">$420</p>
          <p className="desc">
            이전 거래를 처리 중입니다. 최근 거래는 매출에 포함되지 않을 수
            있습니다.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">지난 주</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">지난 달</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
