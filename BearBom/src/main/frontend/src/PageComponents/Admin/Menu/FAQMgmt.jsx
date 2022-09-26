import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { faqMgmtItems } from "../../../customHooks/createItems";
import { useNavigate } from "react-router-dom";

const FAQMgmt = () => {
  let tableInfo = faqMgmtItems;
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios.get(API_BASE_URL + "/api/helpdesk/getFaqList").then((res) => {
      setFetchedData(res.data.data);
      console.log("test");
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>FAQ 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default FAQMgmt;
