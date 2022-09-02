import React, { useEffect, useState } from "react";
import "../../css/salesview.css";
import salesData from "./salesData";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SalesView = () => {
  const [data, setData] = useState(salesData);
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    setPageData(data.slice(0, 10));
  }, []);

  const pagingFunc = (pageNum) => {
    setPageData(data.slice(10 * pageNum - 10, 10 * pageNum));
  };
  return (
    <>
      <h1>Sales View</h1>
      <hr />
      <div className="salesMenuBar">
        <select name="duration">
          <option value="3년">3년</option>
          <option value="1년">1년</option>
          <option value="6개월">6개월</option>
          <option value="3개월">3개월</option>
          <option value="1개월">1개월</option>
          <option value="1주일">1주일</option>
          <option value="1일">1일</option>
        </select>
        <CSVLink data={data}>Excel Download</CSVLink>
      </div>

      <table className="salesTable">
        <tr>
          <td className="salesTd">번호</td>
          <td className="salesTd">클래스명</td>
          <td className="salesTd">매출</td>
          <td className="salesTd">매출이익</td>
          <td className="salesTd">수량</td>
          <td className="salesTd">구매자</td>
          <td className="salesTd">판매자</td>
          <td className="salesTd">구매일자</td>
        </tr>

        {pageData.map((a, i) => {
          return (
            <tr>
              <td className="salesTd">{a.idx}</td>
              <td className="salesTd">{a.className}</td>
              <td className="salesTd">{a.price}</td>
              <td className="salesTd">{parseInt(a.price / 11)}</td>
              <td className="salesTd">{a.count}</td>
              <td className="salesTd">{a.userId}</td>
              <td className="salesTd">{a.lecturerId}</td>
              <td className="salesTd">
                {Date(a.dateOfPurchase, "yyyy-MM-dd")}
              </td>
            </tr>
          );
        })}
      </table>
      <Stack spacing={2}>
        <Pagination
          boundaryCount={10}
          count={10}
          color="primary"
          showFirstButton={true}
          showLastButton={true}
          onChange={(e) => {
            pagingFunc(e.target.textContent);
          }}
        />
      </Stack>
    </>
  );
};

export default SalesView;
