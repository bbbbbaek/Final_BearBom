import React, { useContext, useState } from "react";
import "./notice.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import { Data } from "../../../customHooks/create";
import Board from "../../../ModuleComponents/Board/Board";

const Notice = () => {
  // index, title, content, rgdate, count, userId 필요
  let tableInfo = [
    // title - prop - cell
    new Data("title", "l10", "noticeIdx"),
    new Data("content", "l40", "noticeNm"),
    new Data("mdfdate", "l10", "noticeRegdate"),
    new Data("seller", "l10", "noticeMdfdate"),
    new Data("dop", "l10", "noticeUseYn"),
  ];

  const [toggle, setToggle] = useState(false);

  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      <div className="notice">
        <h5>
          <strong>공지사항</strong>
        </h5>
        <hr />
        {/* {fetchedData !== undefined ? ( */}
        {toggle ? (
          <Board />
        ) : (
          <Table
            tableInfo={tableInfo}
            fetchedData={fetchedData}
            toggle={toggle}
            setToggle={setToggle}
          />
        )}
        {/* ) : null} */}
      </div>
    </>
  );
};

export default Notice;
