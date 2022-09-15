import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import Table from "../ModuleComponents/Table";
import { TableMenuItems } from "../ModuleComponents/TableMenuItems";

const Notice = () => {
  const [tableItems, setTableItems] = useState(
    new TableMenuItems(
      "공지사항",
      "클래스명",
      "매출",
      "매출이익",
      "수량",
      "구매자",
      "판매자",
      "구매일자"
    )
  );
  let ba = useFetch("/api/helpdesk/getNoticeList");
  let fetchedData = ba.data;

  return (
    <>
      <Table tableItems={tableItems} fetchedData={fetchedData} />
    </>
  );
};

export default Notice;
