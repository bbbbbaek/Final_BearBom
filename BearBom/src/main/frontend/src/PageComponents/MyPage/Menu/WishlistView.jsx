import React, { useState } from "react";
import "./wishlistview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import { Data } from "../../../customHooks/createItems";

const WishlistView = () => {
  // index, title, content, rgdate, count, userId 필요
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
      <div className="wishlistview">
        <h5>
          <strong>찜한 클래스 조회</strong>
        </h5>
        <hr />
        {/* {fetchedData !== undefined ? ( */}
        <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        {/* ) : null} */}
      </div>
    </>
  );
};

export default WishlistView;
