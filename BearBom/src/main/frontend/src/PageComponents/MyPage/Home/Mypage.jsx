import React, { useState, useEffect } from "react";
import "./mypage.scss";
import QuickView from "../Quickview/QuickView";
import Sidebar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { Outlet } from "react-router-dom";

const Mypage = () => {
  // 아래 주석 내용은 무시하세요

  // let URL1 =
  //   "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Course";
  // let URL2 =
  //   "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Order";
  // let URL3 =
  //   "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Inquiry";
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
  const [updateUserInfo, setUpdateUserInfo] = useState(0);
  const [userData, setUserData] = useState(); // 로그인한 유저 정보
  const [widgetData, setWidgetData] = useState(); // Widget에 보일 클래스 개수 정보

  useEffect(() => {
    // 유저 정보 - From 백수현
    const promise1 = axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getUser",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });
    // 위젯 카운트 정보 - From 이종현
    const promise2 = axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getMyPageCnt",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });

    Promise.all([promise1, promise2]).then((res) => {
      setUserData(res[0].data);
      setWidgetData(res[1].data);
      console.log(res[0].data);
      console.log(res[1].data);
    });
  }, [updateUserInfo]);
  console.log(userData);

  return (
    <>
      {userData && widgetData ? (
        <div className="mypage_home">
          <div className="banner"></div>
          <div className="body">
            <Sidebar
              updateUserInfo={updateUserInfo}
              setUpdateUserInfo={setUpdateUserInfo}
              userData={userData}
            />
            <div className="wrapper">
              <div className="quickview">
                <QuickView type="taking" widgetData={widgetData} />
                <QuickView type="taken" widgetData={widgetData} />
                <QuickView type="opened" widgetData={widgetData} />
                <QuickView type="liked" widgetData={widgetData} />
              </div>
              <div className="content">
                <Outlet
                  context={{ userData, updateUserInfo, setUpdateUserInfo }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Mypage;
