import React, { useEffect, useState } from "react";
import "./takenclassview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import { takenClassItems } from "../../../customHooks/createItems";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import ResultNotFound from "../../../ModuleComponents/ResultNotFound/ResultNotFound";

const TakenClassView = () => {
  let tableInfo = takenClassItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/course/getTakenClassList",
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
      <div className="takenclassview">
        <h5>
          <strong>수강 클래스 조회</strong>
        </h5>
        <button
          onClick={() => {
            console.log(fetchedData);
          }}
        >
          click
        </button>
        <hr />
        {!fetchedData || fetchedData.length === 0 ? (
          <ResultNotFound />
        ) : (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        )}
      </div>
    </>
  );
};

export default TakenClassView;
