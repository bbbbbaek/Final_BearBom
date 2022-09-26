import React, { useState, useEffect } from "react";
import "./inquiryview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { inquiryItems } from "../../../customHooks/createItems";

const InquiryView = () => {
  let tableInfo = inquiryItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getInquiryReference1",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res);
      console.log(Object.values(res.data)[0]);
      setFetchedData(Object.values(res.data)[0]);
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>문의 내역 조회</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default InquiryView;
