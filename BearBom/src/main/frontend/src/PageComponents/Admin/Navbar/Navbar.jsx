import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import adminProfileImage from "../../../images/adminProfileImage.png";

const Navbar = () => {
  return (
    <>
      <div className="admin_navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="검색" />
            <SearchOutlinedIcon id="searchIcon" />
          </div>
          <div className="items">
            <div className="item">
              <DarkModeOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="notif">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="notif">2</div>
            </div>
            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <img src={adminProfileImage} alt="pp" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
