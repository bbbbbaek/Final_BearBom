import React, { useEffect, useState } from "react";
import "./openedclassview.scss";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { openedClassItems } from "../../../customHooks/createItems";
import axios from "axios";

const OpenedClassView = () => {
  let tableInfo = openedClassItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Course"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);

  return (
    <>
      <div className="openedclassview">
        <h5>
          <strong>개설 클래스 조회</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default OpenedClassView;
