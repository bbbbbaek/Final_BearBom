import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./admin.scss";
import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import useFetch from "../../../customHooks/useFetch";
import SimpleTable from "../../../ModuleComponents/SimpleTable/SimpleTable";
import LatestTransaction from "../LatestTransaction/LatestTransaction";

const Admin = () => {
  let fetch = useFetch("/api/helpdesk/getNoticeList").data.data;
  let fetchedData = null;
  fetchedData = fetch;
  console.log(fetchedData);

  return (
    <>
      <div style={{ marginTop: "15px" }}>
        <div className="admin_home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="earning" />
              <Widget type="order" />
              <Widget type="user" />
              <Widget type="class" />
            </div>
            <div className="charts">
              <Featured />
              <Chart />
            </div>
            <div className="listContainer">
              <LatestTransaction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
