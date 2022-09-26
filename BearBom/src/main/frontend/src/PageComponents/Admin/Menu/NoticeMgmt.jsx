import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import {
  inquiryItems,
  noticeItems,
  noticeMgmtItems,
} from "../../../customHooks/createItems";

const NoticeMgmt = () => {
  let tableInfo = noticeMgmtItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios.get(API_BASE_URL + "/api/helpdesk/getNoticeList").then((res) => {
      setFetchedData(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>공지사항 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default NoticeMgmt;
