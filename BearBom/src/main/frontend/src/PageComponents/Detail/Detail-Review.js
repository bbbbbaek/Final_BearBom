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
      <div className="review-box">
        <img className="img2" src={require("../../img/blogo1.png")}></img>
        <span className="review-nickname">{review.user.userNickName}</span>

        <span>{review.courserRegdate}</span>
        <div className="review-rating">
          <HoverRating courserRate={review.courserRate} />
        </div>
        <div>
          <span>{review.courserContent}</span>
        </div>
      </div>
      {/* <div className="review-box">
        <img className="u0" src={require("../../img/blogo1.png")}></img>

        <div className="u1">{review.user.userNickName}</div>
        <div className="u2">
          <HoverRating courserRate={review.courserRate} />
        </div>
        <div className="u3">{review.courserRegdate}</div>
        <div className="u4">{review.courserContent}</div>
      </div> */}
    </>
  );
}

export default Review;
