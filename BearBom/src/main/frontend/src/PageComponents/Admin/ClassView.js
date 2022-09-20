import React, { useEffect, useState } from "react";
import "../../css/classview.css";
import classData from "./classData";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ClassView = () => {
  const [data, setData] = useState(classData);
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
          <td className="salesTd">이미지</td>
          <td className="salesTd">번호</td>
          <td className="salesTd">클래스명</td>
          <td className="salesTd">강사명</td>
          <td className="salesTd">설명</td>
          <td className="salesTd">가격</td>
          <td className="salesTd">url</td>
          <td className="salesTd">수정</td>
          <td className="salesTd">삭제</td>
          <td className="salesTd">메일</td>
        </tr>

        {pageData.map((a, i) => {
          return (
            <tr>
              <td className="salesTd">
                {<video src={a.thumbnail} width="50px" height="50px" />}
              </td>
              <td className="salesTd">{a.id}</td>
              <td className="salesTd">{a.title}</td>
              <td className="salesTd">{a.artist}</td>
              <td className="salesTd">{a.desc}</td>
              <td className="salesTd">{a.price}</td>
              <td className="salesTd">{a.pieUrl}</td>
              <td className="salesTd">수정</td>
              <td
                className="salesTd"
                onClick={() => {
                  alert("정말 삭제하시겠습니까?");
                }}
              >
                삭제
              </td>
              <td className="salesTd">메일</td>
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

export default ClassView;
