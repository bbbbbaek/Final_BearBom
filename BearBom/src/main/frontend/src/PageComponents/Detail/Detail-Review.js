import Modal from "./ReviewModal";
import HoverRating from "./ReviewFeedback";
import AutoHeightTextarea from "./AutoHeightTextarea";
import React, { useState, useEffect } from "react";
import InputModal from "./InputModal";
//import * as React from 'react';

function Review({ review }) {
  //모달 창 띄우기
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* {reviewList.data.map((u, index) => ( */}
      <div className="review-box">
        {/* key={u.courserIdx} */}
        <img className="img2" src={require("../../img/img2.jpeg")}></img>
        <span className="review-nickname">{review.user.userNickName}</span>
        <span>{review.courserIdx}</span>
        <div className="review-rating">
          <HoverRating courserRate={review.courserRate} />
        </div>
        <div>
          {/* <AutoHeightTextarea readOnly courserContent={review.courserContent} /> */}
          <span>{review.courserContent}</span>
        </div>
      </div>
      {/* // ))} */}
    </>
  );
}

export default Review;
