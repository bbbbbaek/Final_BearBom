import React, { useState } from "react";
import "../../css/quickview.css";
// import classData from "./classData";
import salesData from "./salesData";

const QuickView = () => {
  const [type_sales, setType_sales] = useState(salesData);
  // const [type_class, setType_class] = useState(classData);

  // 합계 구하는 함수
  const sumGenerator = (type) => {
    const array = type.map((a, i) => {
      return a.price * a.count;
    });
    return array.reduce((acc, cv, ci) => {
      return acc + cv;
    });
  };

  return (
    <>
      <div className="quickview-wrapper">
        <div className="quickview-item">
          월매출 {sumGenerator(type_sales)}원
        </div>
        <div className="quickview-slicer"></div>
        <div className="quickview-item">가입자 수 50,000명</div>
        <div className="quickview-slicer"></div>
        <div className="quickview-item">등록된 클래스 수 500개</div>
        <div className="quickview-slicer"></div>
        <div className="quickview-item">어제 방문자 수 2,000명</div>
      </div>
    </>
  );
};

export default QuickView;
