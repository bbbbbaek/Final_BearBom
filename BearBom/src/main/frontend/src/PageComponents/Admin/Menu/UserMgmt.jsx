import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { inquiryItems, userMgmtItems } from "../../../customHooks/createItems";

const UserMgmt = () => {
  let tableInfo = userMgmtItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios.get(API_BASE_URL + "/api/admin/getUserList").then((res) => {
      setFetchedData(res.data);
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>고객 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default UserMgmt;
