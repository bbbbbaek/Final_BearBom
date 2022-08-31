import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Saw = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    var arr = localStorage.getItem("data");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem("data", JSON.stringify(arr));
  }, []);

  var myArr = localStorage.getItem("data");
  return (
    <>
      <div className="lasted">
        <h3>최근본상품 목록</h3>
        {myArr.map((a, i) => {
          return (
            <div
              className="row"
              shoes={props.shoes[i]}
              i={i}
              key={i}
              onClick={() => {
                navigate.push("/saw/" + props.shoes[a].id);
              }}
            >
              <img
                src={
                  "https://codingapple1.github.io/shop/shoes" +
                  (props.shoes[a].id + 1) +
                  ".jpg"
                }
                width="100%"
                alt="이미지"
              />
              <h5>{props.shoes[a].title}</h5>
              <p>{props.shoes[a].price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Saw;
