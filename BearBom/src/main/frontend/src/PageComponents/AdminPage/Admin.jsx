import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "./admin.scss";
import Navbar from "./Navbar/Navbar";
import Widget from "./Widget/Widget";
import Featured from "./Featured/Featured";
import Chart from "./Chart/Chart";

const Admin = () => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
