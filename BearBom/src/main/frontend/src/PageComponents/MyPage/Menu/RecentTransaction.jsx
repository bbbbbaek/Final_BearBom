import React from "react";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import "./recenttransaction.scss";
import useFetch from "../../../customHooks/useFetch";
import { Data } from "../../../customHooks/create";

const RecentTransaction = () => {
  let tableInfo = [
    new Data("index", "tableCell", "noticeIdx"),
    new Data("title", "tableCell", "noticeNm"),
    new Data("content", "tableCell", "noticeContent"),
    new Data("regdate", "tableCell", "noticeRegdate"),
    new Data("mdfdate", "tableCell", "noticeMdfdate"),
    new Data("merong", "tableCell", "noticeUseYn"),
  ];

  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      <div className="recenttransaction">
        <h5>
          <strong>최근 활동 내역</strong>
        </h5>
        <br />
        {/* {fetchedData !== undefined ? ( */}
        <SimpleTable tableInfo={tableInfo} fetchedData={fetchedData} />
        {/* ) : null} */}
      </div>
    </>
  );
};

export default RecentTransaction;
