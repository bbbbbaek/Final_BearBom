import React, { useEffect, useRef, useState } from "react";
import "../../../css/barsales.css";

const BarSales = () => {
  // 모든 데이터가 담긴 rawData state
  const [rawData, setRawData] = useState([
    20, 10, 15, 35, 25, 20, 45, 100, 250, 100, 20, 15, 10, 230, 200, 170, 140,
    280, 300, 250, 240, 220, 160, 120, 100, 50, 40, 240, 50, 120, 160, 140, 220,
    40, 240, 50, 120, 160, 140, 220,
  ]);

  // 실제 화면에 표출할 데이터를 담는 data state
  const [data, setData] = useState([]);

  // 화면에 표출할 데이터의 범위를 지정하는 range state
  const [range, setRange] = useState(24);

  // 초기 화면 차트에 내용을 표출하기 위해 useEffect 사용
  useEffect(() => {
    onChangeData();
  }, []);

  const maxNum = Math.max(...data);
  let HeightMultiplyCount = parseInt(300 / maxNum);
  let WidthMultiplyCount = parseInt(800 / range);

  console.log(range);

  const onChangeData = () => {
    setData(rawData.slice(0, range));
  };

  return (
    <>
      <div className="chart-container">
        {data.map((a, i) => {
          return (
            <div
              className="chart-item"
              style={{
                height: `${data[i] * HeightMultiplyCount}px`,
                width: `${WidthMultiplyCount}px`,
              }}
              key={i}
            ></div>
          );
        })}
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <label htmlFor="range">
          기간&nbsp;&nbsp;&nbsp;
          <input
            id="range"
            type="range"
            step="1"
            min="12"
            max="36"
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
              onChangeData();
            }}
          />
        </label>
        <div>{range}개월</div>
      </div>
    </>
  );
};

export default BarSales;
