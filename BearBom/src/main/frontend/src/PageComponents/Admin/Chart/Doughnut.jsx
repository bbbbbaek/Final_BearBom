import { fontWeight, margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import "../../../css/doughnut.css";

const Doughnut = ({ rawSales }) => {
  const salesTarget = parseInt(localStorage.getItem("sales_target"));
  console.log(salesTarget);
  // salesTarget - sales
  console.log(rawSales);
  console.log(salesTarget);
  const [data, setData] = useState([rawSales, salesTarget - rawSales]);
  const [array, setArray] = useState([]);
  useEffect(() => {
    let sum = data.reduce((a, b) => {
      return a + b;
    });
    let test = data.map((a) => {
      return a / sum;
    });
    setArray(test);
    console.log(array);
  }, []);

  const graphInputData = () => {
    return [
      ...array.map((a, i) => {
        return 2 * Math.PI * 90 * array[i] + " ";
      }),
    ];
  };
  return (
    <>
      {/* https://tecoble.techcourse.co.kr/post/2021-11-10-making-donut-chart-react/ 사이트에서 도넛 만들기 참조*/}

      <div>
        <div
          className="doughnut-wrapper"
          style={{
            width: "150px",
            height: "150px",
            margin: "10px",
            position: "relative",
          }}
        >
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#ddddda"
              strokeWidth="20"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#2caad2"
              strokeWidth="20"
              animation="2s ease"
              strokeDasharray={
                // 2 * Math.PI * 90 * 0.25
                graphInputData()
              }
              // strokeDasharray={`${2 * Math.PI * 90 * array[0]} ${
              //   2 * Math.PI * 90 * array[1]
              // }`}
              strokeDashoffset={2 * Math.PI * 90 * 0.25}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              top: "52px",
              left: "45px",
              fontWeight: "600",
              fontSize: "2rem",
            }}
          >
            {(rawSales / salesTarget) * 100}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Doughnut;
