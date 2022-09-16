import React from "react";
import "./sidebar.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Admin = () => {
  return (
    <>
      <div className="admin_sidebar">
        <div className="top">
          <span className="logo">BearBom Admin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">Main</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <li>
              <AcUnitIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <li>
              <AcUnitIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">Useful</p>
            <li>
              <AcUnitIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <li>
              <AcUnitIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </>
  );
};

export default Admin;
