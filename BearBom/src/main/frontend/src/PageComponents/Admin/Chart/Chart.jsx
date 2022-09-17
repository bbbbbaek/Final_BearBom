import React from "react";
import "./chart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRef } from "react";

const Chart = () => {
  const optionRef = useRef("");

  const data = [
    { name: "1월", Total: 1200 },
    { name: "2월", Total: 800 },
    { name: "3월", Total: 1100 },
    { name: "4월", Total: 1300 },
    { name: "5월", Total: 1500 },
    { name: "6월", Total: 1200 },
    { name: "7월", Total: 1200 },
    { name: "8월", Total: 1200 },
  ];
  switch (optionRef.current.value) {
    case "6months":
      data.slice(0, 3);
      console.log("hello");
      break;
    case "12months":
      data.slice(0, 6);
      console.log("merong");

      break;
    case "36months":
      data.slice(0, 36);
      break;
    default:
      break;
  }
  return (
    <>
      <div className="chart">
        <div className="top">
          <div className="title">최근 6개월 매출 추이</div>
          <div className="top_right">
            <select name="hello" id="" ref={optionRef}>
              <option value="6months">6개월</option>
              <option value="12months">1년</option>
              <option value="36months">3년</option>
            </select>
            <MoreVertIcon />
          </div>
        </div>
        <div className="content"></div>
        <ResponsiveContainer width="100%" aspect={3 / 1}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e1e2e3" />
            <XAxis dataKey="name" stroke="gray" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              /> */}
            <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
