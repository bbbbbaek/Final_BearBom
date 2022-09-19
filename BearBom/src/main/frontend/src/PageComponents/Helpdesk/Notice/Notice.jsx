import React, { useState } from "react";
import "./notice.scss";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { createItems, createData, Data } from "../../../customHooks/create";

const Notice = () => {
  let data = [
    new Data("title", null, "noticeIdx"),
    new Data("content", null, "noticeIdx"),
    new Data("rgdate", null, "noticeIdx"),
    new Data("mdfdate", null, "noticeIdx"),
    new Data("seller", null, "noticeIdx"),
    new Data("dop", null, "noticeIdx"),
  ];

  // let item = createItems(
  //   "title",
  //   "content",
  //   "rgdate",
  //   "mdfdate",
  //   "seller",
  //   "dop"
  // );
  // let data = createData(
  //   "noticeIdx",
  //   "noticeNm",
  //   "noticeContent",
  //   "noticeRegdate",
  //   "noticeMdfdate"
  // );

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
        <Table
          // tableItems={item}
          tableData={data}
          fetchedData={fetchedData}
        />
        {/* ) : null} */}
      </div>
    </>
  );
};

export default Notice;
