import React, { useEffect, useState } from "react";
import "./openedclassview.scss";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { openedClassItems } from "../../../customHooks/createItems";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";

const OpenedClassView = () => {
  let tableInfo = openedClassItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/course/getMyOpenedClassList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then((res) => {
        console.log(...Object.values(res.data));
        setFetchedData(...Object.values(res.data));
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      <div className="openedclassview">
        <h5>
          <strong>개설 클래스 조회</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} imageYn="Y" />
        ) : null}
      </div>
    </>
  );
};

export default OpenedClassView;
