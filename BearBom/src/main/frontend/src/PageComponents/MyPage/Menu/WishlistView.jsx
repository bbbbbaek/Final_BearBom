import React, { useState } from "react";
import "./wishlistview.scss";
import Table from "../../../ModuleComponents/Table/Table";
import useFetch from "../../../customHooks/useFetch";
import { wishListItems } from "../../../customHooks/createItems";
import axios from "axios";
import { useEffect } from "react";
import { API_BASE_URL } from "../../../app-config";
import ResultNotFound from "../../../ModuleComponents/ResultNotFound/ResultNotFound";

const WishlistView = () => {
  let tableInfo = wishListItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getWishList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data.wishList);
      setFetchedData(res.data.wishList);
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
        ) : (
          <ResultNotFound />
        )}
      </div>
    </>
  );
};

export default WishlistView;
