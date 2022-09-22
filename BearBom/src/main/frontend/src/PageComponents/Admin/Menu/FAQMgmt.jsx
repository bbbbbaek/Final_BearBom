import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { faqItems, inquiryItems } from "../../../customHooks/createItems";
import { useNavigate } from "react-router-dom";

const FAQMgmt = () => {
  let tableInfo = faqItems;
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        // "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/FAQ"
        API_BASE_URL + "/api/helpdesk/getFaqList"
      )
      .then((res) => {
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
        <button
          onClick={() => {
            navigate("board");
          }}
        >
          글쓰기
        </button>
        <hr />
        <button
          onClick={() => {
            console.log(fetchedData);
          }}
        >
          click
        </button>
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default FAQMgmt;
