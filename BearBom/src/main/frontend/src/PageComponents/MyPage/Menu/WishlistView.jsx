import React, { useState } from "react";
import Table from "../../../ModuleComponents/Table/Table";

const WishlistView = () => {
  const [tableItems, setTableItems] = useState();

  return (
    <>
      <Table tableItems={tableItems} />
    </>
  );
};

export default WishlistView;
