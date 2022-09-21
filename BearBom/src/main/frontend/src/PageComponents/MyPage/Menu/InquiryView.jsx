import React, { useState, useEffect } from "react";
import "./inquiryview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { Data } from "../../../customHooks/createItems";

const InquiryView = () => {
  // index, title, content, regdate, userId, replyYN
  let tableInfo = [
    new Data("title", "long", "noticeIdx"),
    new Data("content", "long", "noticeNm"),
    new Data("rgdate", "short", "noticeContent"),
    new Data("mdfdate", "long", "noticeRegdate"),
    new Data("seller", "long", "noticeMdfdate"),
    new Data("dop", "short", "noticeUseYn"),
  ];

  let fetch = useFetch("/api/admin/getInquiryInfoReferenceList", {
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
  });
  let fetchedData = null;
  fetchedData = fetch.data.data;
  console.log(fetchedData);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>문의 내역 조회</strong>
        </h5>
        <hr />
        {/* {fetchedData !== undefined ? ( */}
        <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        {/* ) : null} */}
      </div>
    </>
  );
};

export default InquiryView;
