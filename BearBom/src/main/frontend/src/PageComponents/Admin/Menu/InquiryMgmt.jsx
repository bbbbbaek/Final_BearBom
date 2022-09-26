import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { inquiryItems } from "../../../customHooks/createItems";

const InquiryMgmt = () => {
  let tableInfo = inquiryItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/admin/getInquiryInfoReferenceList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      setFetchedData(res.data);
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>고객문의 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default InquiryMgmt;
