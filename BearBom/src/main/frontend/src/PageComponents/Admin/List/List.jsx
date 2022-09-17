import React from "react";
import "./list.scss";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const List = () => {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          Data Table
        </div>
      </div>
    </>
  );
};

export default List;
