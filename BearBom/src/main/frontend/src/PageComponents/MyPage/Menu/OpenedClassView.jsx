import React, { useState } from "react";
import Table from "../../../ModuleComponents/Table/Table";

const OpenedClassView = () => {
  const [tableItems, setTableItems] = useState();

  return (
    <>
      <Table tableItems={tableItems} />
    </>
  );
};

export default OpenedClassView;
