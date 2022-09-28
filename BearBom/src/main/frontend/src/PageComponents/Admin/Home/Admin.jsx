import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./admin.scss";
import Navbar from "../Navbar/Navbar";
import Widget from "../Widget/Widget";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import { API_BASE_URL } from "../../../app-config";

const Admin = () => {
  const navigate = useNavigate();
  const [fetchedData, setFetchedData] = useState();
  const [widgetData, setWidgetData] = useState();

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
      (userRole === "ROLE_USER" || userRole === "ROLE_LECTURER") &&
      (accessToken !== null ||
        accessToken !== "" ||
        typeof accessToken !== "undefined")
    ) {
      alert("관리자 계정 필요");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    // 최근 거래내역 정보 - From 홍하영
    const promise1 = axios({
      method: "get",
      url: API_BASE_URL + "/api/order/allOrderList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });
    // 위젯 카운트 정보 - From 이종현
    const promise2 = axios({
      method: "get",
      url: API_BASE_URL + "/api/admin/getAdminCnt",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });

    Promise.all([promise1, promise2]).then((res) => {
      setFetchedData(res[0].data);
      setWidgetData(res[1].data);
      console.log(res[0].data);
      console.log(res[1].data);
    });
  }, []);

  return (
    <>
      {fetchedData && widgetData ? (
        <div>
          <div className="admin_home">
            <Sidebar />
            <div className="homeContainer">
              <Navbar />
              <div className="widgets">
                <Widget type="sales" widgetData={widgetData} />
                <Widget type="orders" widgetData={widgetData} />
                <Widget type="users" widgetData={widgetData} />
                <Widget type="courses" widgetData={widgetData} />
              </div>
              <div className="charts">
                <Featured widgetData={widgetData} />
                <Chart widgetData={widgetData} />
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
