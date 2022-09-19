import React, { useState, useEffect } from "react";
import "./inquiryview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";

const InquiryView = () => {
  // const data = useFetch("/api/admin/getInquiryInfoReferenceList");

  const [tableItems, setTableItems] = useState([
    "문의 내역 조회",
    "클래스명",
    "매출",
    "매출이익",
    "수량",
    "구매자",
    "판매자",
    "구매일자",
  ]);
  const [tableData, setTableData] = useState(
    // new TableDataItems(
    [
      "inquiryIdx",
      "inquiryEmail",
      "inquirySort",
      "inquiryTitle",
      "inquiryContent",
      // "user",
    ]
    // )
  );
  let fetch = useFetch("/api/admin/getInquiryInfoReferenceList");
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
        <Table
          tableItems={tableItems}
          tableData={tableData}
          fetchedData={fetchedData}
        />
        {/* ) : null} */}
      </div>
    </>
  );
};

export default InquiryView;
