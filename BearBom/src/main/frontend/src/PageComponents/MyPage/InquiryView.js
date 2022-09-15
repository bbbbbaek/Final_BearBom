import React, { useState, useEffect } from "react";
import Table from "../../ModuleComponents/Table";
import { TableMenuItems } from "../../ModuleComponents/TableMenuItems";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const InquiryView = () => {
  const data = useFetch("/api/helpdesk/getFaqList");

  const [tableItems, setTableItems] = useState(
    new TableMenuItems(
      "문의 내역 조회",
      "클래스명",
      "매출",
      "매출이익",
      "수량",
      "구매자",
      "판매자",
      "구매일자"
    )
  );

  return (
    <>
      <button
        onClick={() => {
          // setTest(test + 1);
          console.log(data);
        }}
      >
        plz
      </button>
      <Table tableItems={tableItems} />
    </>
  );
};

export default InquiryView;
