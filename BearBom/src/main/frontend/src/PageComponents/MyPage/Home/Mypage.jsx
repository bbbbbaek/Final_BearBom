import React, { useState, useEffect } from "react";
import "./mypage.scss";
import QuickView from "../Quickview/QuickView";
import Sidebar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { Outlet } from "react-router-dom";

const Mypage = () => {
  const [status, setStatus] = useState([]);
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
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/MypageQuickView"
      )
      .then((res) => {
        setFetchedData(res);
        console.log(fetchedData);
      });
  }, []);

  return (
    <>
      {fetchedData ? (
        <div className="mypage_home">
          <div className="banner"></div>
          <div className="body">
            <Sidebar />
            <div className="wrapper">
              <div className="quickview">
                <QuickView type="taking" fetchedData={fetchedData} />
                <QuickView type="taken" fetchedData={fetchedData} />
                <QuickView type="opened" fetchedData={fetchedData} />
                <QuickView type="liked" fetchedData={fetchedData} />
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
