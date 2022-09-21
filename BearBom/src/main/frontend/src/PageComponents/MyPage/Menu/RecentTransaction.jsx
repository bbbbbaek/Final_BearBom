import React, { useEffect, useState } from "react";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import "./recenttransaction.scss";
import useFetch from "../../../customHooks/useFetch";
import { Data, recentTransactionItems } from "../../../customHooks/createItems";
import axios from "axios";

const RecentTransaction = () => {
  let tableInfo = recentTransactionItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Order"
      )
      .then((res) => {
        console.log(res.data);
        setFetchedData(res.data);
      });
  }, []);

  return (
    <>
      <div className="recenttransaction">
        <h5>
          <strong>최근 활동 내역</strong>
        </h5>
        <br />
        {fetchedData ? (
          <SimpleTable tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default RecentTransaction;
