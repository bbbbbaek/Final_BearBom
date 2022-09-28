import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { orderMgmtItems } from "../../../customHooks/createItems";

const OrderMgmt = () => {
  let tableInfo = orderMgmtItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/admin/getAdminOrderList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data.getAdminOrderList);
      setFetchedData(res.data.getAdminOrderList);
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
