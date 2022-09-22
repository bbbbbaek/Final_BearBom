import React, { useContext, useEffect, useMemo, useState } from "react";
import "./notice.scss";
import Table from "../../../ModuleComponents/Table/Table";
import { Data, noticeItems } from "../../../customHooks/createItems";
import axios from "axios";

const Notice = () => {
  let tableInfo = noticeItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Notice"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);

  return (
    <>
      <div className="notice">
        <h5>
          <strong>공지사항</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default Notice;
