import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { courseMgmtItems } from "../../../customHooks/createItems";

const CourseMgmt = () => {
  let tableInfo = courseMgmtItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/admin/getAllCourseList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data.allCourseList);
      setFetchedData(res.data.allCourseList);
    });
  }, []);

  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>강좌 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default CourseMgmt;
