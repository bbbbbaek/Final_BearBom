import React, { useState } from "react";
import "./takenclassview.scss";
import Table from "../../../ModuleComponents/Table/Table";

const TakenClassView = () => {
  const [tableItems, setTableItems] = useState([
    "수강 내역 조회",
    "클래스명",
    "매출",
    "매출이익",
    "수량",
    "구매자",
    "판매자",
    "구매일자",
  ]);

  return (
    <>
      <div className="takenclassview">
        <h5>
          <strong>수강 클래스 조회</strong>
        </h5>
        <hr />
        <Table tableItems={tableItems} />
      </div>
    </>
  );
};

export default TakenClassView;
