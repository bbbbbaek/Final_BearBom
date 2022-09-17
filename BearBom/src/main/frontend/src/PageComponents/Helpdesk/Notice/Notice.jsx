import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { createItems, createData } from "../../../customHooks/create";

const Notice = () => {
  let item = createItems(
    "title",
    "content",
    "rgdate",
    "mdfdate",
    "seller",
    "dop"
  );
  let data = createData(
    "noticeIdx",
    "noticeNm",
    "noticeContent",
    "noticeRegdate",
    "noticeMdfdate"
  );

  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      {fetchedData !== undefined ? (
        <Table tableItems={item} tableData={data} fetchedData={fetchedData} />
      ) : null}
    </>
  );
};

export default Notice;
