import React, { useState, useEffect } from "react";
import "./mypage.scss";
import QuickView from "../Quickview/QuickView";
import Sidebar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";

import Inquiry from "../../Helpdesk/Inquiry/Inquiry";
import RecentTransaction from "../Menu/RecentTransaction";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";

const Mypage = () => {
  // 테스트용
  const [getUser, setGetUser] = useState("");
  useEffect(() => {
    // setReviewInfo((prev) => ({ …prev }));
    //데이터불러오는 axios
    //setCourse(response.data);
    axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getUser",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      // params: { courseIdx: id },
      // test
      // test1
    }).then((response) => {
      console.log(response.data);
      setGetUser(response.data.getUser);
    });
  }, []);

  let state = useSelector((state) => state.tab);
  console.log(state);

  return (
    <>
      <div className="mypage_home">
        <div className="banner"></div>
        <button
          onClick={() => {
            reFetch();
          }}
        >
          fetch!
        </button>
        <div className="body">
          <Sidebar />
          <div className="wrapper">
            <div className="quickview">
              <QuickView type="taking" />
              <QuickView type="taken" />
              <QuickView type="molla" />
              <QuickView type="liked" />
            </div>
            <div className="content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
