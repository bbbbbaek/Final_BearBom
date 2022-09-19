import React, { useState } from "react";
import "./wishlistview.scss";
import Table from "../../../ModuleComponents/Table/Table";

const WishlistView = () => {
  const [tableItems, setTableItems] = useState();

  return (
    <>
      <div className="wishlistview">
        <h5>
          <strong>찜한 클래스 조회</strong>
        </h5>
        <hr />
        <Table tableItems={tableItems} />
      </div>
    </>
  );
};

export default WishlistView;
