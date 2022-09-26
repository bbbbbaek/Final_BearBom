import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./admin.scss";
import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";

const Admin = () => {
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    const userRole = localStorage.getItem("USER_ROLE");
    console.log(accessToken);
    if (
      accessToken === null ||
      accessToken === "" ||
      typeof accessToken === "undefined"
    ) {
      alert("관리자 페이지입니다.");
      navigate("/login");
    }

    if (
      userRole === "ROLE_USER" &&
      (accessToken !== null ||
        accessToken !== "" ||
        typeof accessToken !== "undefined")
    ) {
      alert("관리자 계정 필요");
      navigate("/");
    }
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/MypageQuickView"
      )
      .then((res) => {
        setFetchedData(res.data);
        console.log(fetchedData);
      });
  }, []);

  return (
    <>
      {fetchedData ? (
        <div>
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
              <div className="content">
                <Outlet context={{ fetchedData }} />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : null}
    </>
  );
};

export default Admin;
