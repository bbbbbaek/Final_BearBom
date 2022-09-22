import React, { useState, useEffect } from "react";
import "./mypage.scss";
import QuickView from "../Quickview/QuickView";
import Sidebar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { Outlet } from "react-router-dom";

const Mypage = () => {
  const [statusData, setStatusData] = useState();
  let URL1 =
    "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Course";
  let URL2 =
    "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Order";
  let URL3 =
    "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Inquiry";
  const [fetchedData, setFetchedData] = useState();
  // useEffect(() => {
  //   const promise1 = axios.get(URL1);
  //   const promise2 = axios.get(URL2);
  //   const promise3 = axios.get(URL3);
  //   Promise.all([promise1, promise2, promise3]).then((res) => {
  //     console.log(res);
  //     console.log(res[0].data);
  //     console.log(res[2].data);
  //     setFetchedData(res[2].data);
  //   });
  // }, []);

  // 유저 정보
  useEffect(() => {
    const promise1 = axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getUser",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });
    const promise2 = axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getMyPageCnt",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });

    Promise.all([promise1, promise2]).then((res) => {
      setFetchedData(res[0].data);
      setStatusData(res[1].data);
    });
  }, []);

  return (
    <>
      {fetchedData && statusData ? (
        <div className="mypage_home">
          <div className="banner"></div>
          <div className="body">
            <Sidebar />
            <div className="wrapper">
              <div className="quickview">
                <QuickView type="taking" statusData={statusData} />
                <QuickView type="taken" statusData={statusData} />
                <QuickView type="opened" statusData={statusData} />
                <QuickView type="liked" statusData={statusData} />
              </div>
              <div className="content">
                <Outlet context={{ fetchedData }} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Mypage;
