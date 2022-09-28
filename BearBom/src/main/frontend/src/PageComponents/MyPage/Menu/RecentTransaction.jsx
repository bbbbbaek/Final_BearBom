import React, { useEffect, useState } from "react";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import "./recenttransaction.scss";
import { recentTransactionItems } from "../../../customHooks/createItems";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";

const RecentTransaction = () => {
  let tableInfo = recentTransactionItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/order/getOrderList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data.getOrderedCourseList);
      setFetchedData(res.data.getOrderedCourseList);
    });
  }, []);

  return (
    <>
      <div className="recenttransaction">
        <h5>
          <strong>최근 주문 내역</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <SimpleTable
            tableInfo={tableInfo}
            fetchedData={fetchedData}
            filterType="courseUseYn"
          />
        ) : null}
      </div>
    </>
  );
};

export default RecentTransaction;
