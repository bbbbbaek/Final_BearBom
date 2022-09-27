import HoverRating from "./ReviewFeedback";
import React, { useState, useEffect } from "react";

function Review({ review }) {
  //모달 창 띄우기
  const dayday1 = new Date(review.courserRegdate);
  const dayday2 = new Date(new Date());
  const dayday3 = (dayday2 - dayday1) / (60 * 60 * 24 * 1000);
  let result;
  if (dayday3 >= 1) {
    result = parseInt(dayday3);
  }
  function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
  }
  var result1 = dayday3 >= 1 ? `${(result = parseInt(dayday3))}일전` : "방금";
  console.log(review.user.userPhotoNewNm);
  return (
    <>
      <div className="review-box">
        <div className="review-container">
          <img
            className="img2"
            src={`http://localhost:8080/upload/${review.user.userPhotoNewNm}`}
            alt=""
          ></img>
          <span className="review-nickname">{review.user.userNickName}</span>

          <div className="review-rating">
            <div>
              <HoverRating courserRate={review.courserRate} />
            </div>

            <div className="review-date">{result1}</div>
          </div>
        </div>

        <div>
          <span>{review.courserContent}</span>
        </div>
      </div>
    </>
  );
}

export default Review;
