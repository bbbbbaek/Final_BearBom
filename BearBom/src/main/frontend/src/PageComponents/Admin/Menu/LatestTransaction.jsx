import React, { useEffect, useState } from "react";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import { recentTransactionItems } from "../../../customHooks/createItems";
import axios from "axios";

const LatestTransaction = () => {
  let tableInfo = recentTransactionItems;
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
      <div className="listTitle" style={{ width: "100%" }}>
        <h5>
          <strong>최근 결제 내역</strong>
        </h5>
        <br />
        {fetchedData ? (
          <SimpleTable tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default LatestTransaction;
