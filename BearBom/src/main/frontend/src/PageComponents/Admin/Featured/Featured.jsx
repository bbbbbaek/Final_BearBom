import React, { useRef } from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Doughnut from "../Chart/Doughnut";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useFetch from "../../../customHooks/useFetch";

const Featured = ({ widgetData }) => {
  const rawSales = widgetData.totalSales[0].totalsales;
  const sales = rawSales.toLocaleString("ko-KR");
  const targetRef = useRef();
  // const target = targetRef.current.value;

  return (
    <>
      <div className="featured">
        <div className="top">
          매출 현황
          <MoreVertIcon />
        </div>
        <div className="content1">
          <div className="featuredChart">
            <Doughnut
              rawSales={rawSales}
              // target={target}
            />
          </div>
          <div className="description">
            <p className="title">오늘의 매출</p>
            <p className="amount">{sales}원</p>
            <div className="summary">
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
        <br />
        <p className="desc">최근 거래는 매출에 포함되지 않을 수 있습니다.</p>
      </div>
    </>
  );
};

export default Featured;
