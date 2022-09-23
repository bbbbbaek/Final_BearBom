import React, { useState } from "react";
import "./wishlistview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import { wishListItems } from "../../../customHooks/createItems";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../../../app-config";

const WishlistView = () => {
  let tableInfo = wishListItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios.get(API_BASE_URL + "/api/like/getLikeList").then((res) => {
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
