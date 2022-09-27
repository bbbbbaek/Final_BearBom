import React, { useRef } from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import adminProfileImage from "../../../images/adminProfileImage.png";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [saveTarget, setSaveTarget] = useState(0);
  const salesRef = useRef();
  const ordersRef = useRef();
  const usersRef = useRef();
  const coursesRef = useRef();

  const onClickSaveTarget = () => {
    if (window.confirm("타겟을 저장하시겠습니까?")) {
      localStorage.setItem("sales_target", salesRef.current.value);
      localStorage.setItem("orders_target", ordersRef.current.value);
      localStorage.setItem("users_target", usersRef.current.value);
      localStorage.setItem("courses_target", coursesRef.current.value);
      setSaveTarget(saveTarget + 1);
    }
  };

  let targetData = [
    localStorage.getItem("sales_target"),
    localStorage.getItem("orders_target"),
    localStorage.getItem("users_target"),
    localStorage.getItem("courses_target"),
  ];
  useEffect(() => {
    targetData = [];
    if (localStorage.getItem("sales_target")) {
      targetData.push(localStorage.getItem("sales_target"));
    }
    if (localStorage.getItem("orders_target")) {
      targetData.push(localStorage.getItem("orders_target"));
    }
    if (localStorage.getItem("users_target")) {
      targetData.push(localStorage.getItem("users_target"));
    }
    if (localStorage.getItem("courses_target")) {
      targetData.push(localStorage.getItem("courses_target"));
    }
  }, [saveTarget]);

  return (
    <>
      <div className="admin_navbar">
        <div className="wrapper">
          <div className="targetWrapper">
            타겟 설정
            <ul>
              <li>
                <label htmlFor="sales">매출</label>
                <input
                  type="number"
                  id="sales"
                  defaultValue={targetData[0] ? targetData[0] : 100}
                  ref={salesRef}
                />
              </li>
              <li>
                <label htmlFor="orders">주문</label>
                <input
                  type="number"
                  id="orders"
                  defaultValue={targetData[1] ? targetData[1] : 100}
                  ref={ordersRef}
                />
              </li>
              <li>
                <label htmlFor="users">회원</label>
                <input
                  type="number"
                  id="users"
                  defaultValue={targetData[2] ? targetData[2] : 100}
                  ref={usersRef}
                />
              </li>
              <li>
                <label htmlFor="courses">강좌</label>
                <input
                  type="number"
                  id="courses"
                  defaultValue={targetData[3] ? targetData[3] : 100}
                  ref={coursesRef}
                />
              </li>
            </ul>
            <button onClick={onClickSaveTarget}>저장</button>
          </div>
          <div className="search">
            <input type="text" placeholder="검색" />
            <SearchOutlinedIcon id="searchIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
