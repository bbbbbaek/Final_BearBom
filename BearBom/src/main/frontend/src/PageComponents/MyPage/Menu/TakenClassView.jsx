import React, { useEffect, useState } from "react";
import "./takenclassview.scss";
import useFetch from "../../../customHooks/useFetch";
import Table from "../../../ModuleComponents/Table/Table";
import { Data, takenClassItems } from "../../../customHooks/createItems";
import axios from "axios";

const TakenClassView = () => {
  let tableInfo = takenClassItems;
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
      <div className="takenclassview">
        <h5>
          <strong>수강 클래스 조회</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default TakenClassView;
