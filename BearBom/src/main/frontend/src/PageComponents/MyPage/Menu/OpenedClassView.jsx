import React, { useState } from "react";
import "./openedclassview.scss";
import Table from "../../../ModuleComponents/Table/Table";

const OpenedClassView = () => {
  const [tableItems, setTableItems] = useState();

  return (
    <>
      <div className="openedclassview">
        <h5>
          <strong>개설 클래스 조회</strong>
        </h5>
        <hr />
        <Table tableItems={tableItems} />
      </div>
    </>
  );
};

export default OpenedClassView;
