import React, { useState } from "react";
import "./openedclassview.scss";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { Data } from "../../../customHooks/create";

const OpenedClassView = () => {
  const [tableItems, setTableItems] = useState();
  // index, title, content, regdate, userId, replyYN
  let tableInfo = [
    new Data("title", "long", "noticeIdx"),
    new Data("content", "long", "noticeNm"),
    new Data("rgdate", "short", "noticeContent"),
    new Data("mdfdate", "long", "noticeRegdate"),
    new Data("seller", "long", "noticeMdfdate"),
    new Data("dop", "short", "noticeUseYn"),
  ];

  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      <div className="openedclassview">
        <h5>
          <strong>개설 클래스 조회</strong>
        </h5>
        <hr />
        {/* {fetchedData !== undefined ? ( */}
        <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        {/* ) : null} */}{" "}
      </div>
    </>
  );
};

export default OpenedClassView;
