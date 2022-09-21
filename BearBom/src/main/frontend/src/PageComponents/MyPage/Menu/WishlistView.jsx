import React, { useState } from "react";
import "./wishlistview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import { wishListItems } from "../../../customHooks/createItems";
import axios from "axios";
import { useEffect } from "react";

const WishlistView = () => {
  let tableInfo = wishListItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Kenny-Korea/json-repository/main/Course"
      )
      .then((res) => {
        setFetchedData(res.data);
      });
  }, []);
  return (
    <>
      <div className="wishlistview">
        <h5>
          <strong>찜한 클래스 조회</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default WishlistView;
