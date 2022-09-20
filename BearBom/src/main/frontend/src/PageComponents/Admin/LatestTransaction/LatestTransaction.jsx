import React from "react";
import "./latesttransaction.scss";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import useFetch from "../../../customHooks/useFetch";
import { Data } from "../../../customHooks/create";

const LatestTransaction = () => {
  let tableInfo = [
    new Data("title", "tableCell", "noticeIdx"),
    new Data("content", "tableCell", "noticeNm"),
    new Data("rgdate", "tableCell", "noticeContent"),
    new Data("mdfdate", "tableCell", "noticeRegdate"),
    new Data("seller", "tableCell", "noticeMdfdate"),
    new Data("dop", "tableCell", "noticeUseYn"),
  ];

  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      <div className="listTitle">최근 거래 내역</div>
      {/* {fetchedData !== undefined ? ( */}
      <SimpleTable tableInfo={tableInfo} fetchedData={fetchedData} />
      {/* ) : null} */}
    </>
  );
};

export default LatestTransaction;
