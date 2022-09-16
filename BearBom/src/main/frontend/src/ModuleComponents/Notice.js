import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import Table from "../ModuleComponents/Table";
import {
  TableDataItems,
  TableMenuItems,
} from "../ModuleComponents/TableMenuItems";

const Notice = () => {
  const [tableItems, setTableItems] = useState(
    new TableMenuItems(
      "공지사항",
      "제목",
      "내용",
      "등록일",
      "수정일",
      "판매자",
      "구매일자"
    )
  );
  const [tableData, setTableData] = useState(
    // new TableDataItems(
    [
      "noticeIdx",
      "noticeNm",
      "noticeContent",
      "noticeRegdate",
      "noticeMdfdate",
      "user",
    ]
    // )
  );
  let fetch = useFetch("/api/helpdesk/getNoticeList");
  let fetchedData = null;
  fetchedData = fetch.data.data;
  console.log(fetchedData);

  return (
    <>
      {fetchedData !== undefined ? (
        <Table
          tableItems={tableItems}
          tableData={tableData}
          fetchedData={fetchedData}
        />
      ) : null}
    </>
  );
};

export default Notice;
