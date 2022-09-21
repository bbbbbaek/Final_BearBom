import React, { useState } from "react";
import "./mypage.scss";
import QuickView from "../Quickview/QuickView";
import Sidebar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import useFetch from "../../../customHooks/useFetch";

const Mypage = () => {
  const { data, loading, error, reFetch } = useFetch(
    "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/test.json",
    "get"
  );
  console.log(data);

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
