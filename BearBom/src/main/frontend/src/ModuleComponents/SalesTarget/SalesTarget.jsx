import React, { useState } from "react";
import { useRef } from "react";

const SalesTarget = () => {
  const [currentTarget, setCurrentTarget] = useState(
    localStorage.getItem("Sales_Target")
  );
  const targetRef = useRef();
  // const prevTarget = localStorage.getItem("Sales_Target")
  const onSaveTarget = () => {
    const value = targetRef.current.value;
    localStorage.setItem("Sales_Target", value);
  };
  return (
    <>
      <div className="salestarget">
        <label htmlFor="target_input">Target</label>
        <input id="target_input" type="text" ref={targetRef} />
        <button onClick={onSaveTarget}>저장</button>
      </div>
    </>
  );
};

export default SalesTarget;
