import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { inquiryItems } from "../../../customHooks/createItems";

const OrderMgmt = () => {
  let tableInfo = inquiryItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Order"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>주문 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default OrderMgmt;
