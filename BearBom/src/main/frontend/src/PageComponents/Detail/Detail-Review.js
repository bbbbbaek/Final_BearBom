import Modal from "./ReviewModal";
import HoverRating from "./ReviewFeedback";
import AutoHeightTextarea from "./AutoHeightTextarea";
import { useState } from "react";

function Review() {
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
      <h5>
        <b>후기</b>
      </h5>

      <button className="reviewmodal-box" onClick={openModal}>
        등록하기
      </button>

      <Modal open={modalOpen} close={closeModal} header="후기">
        <div className="modal-position">
          <HoverRating />
        </div>
        <AutoHeightTextarea />
      </Modal>

      <div className="review-box">
        <img className="img2" src={require("../../img/img2.jpeg")}></img>
        <span className="review-nickname">nickname</span>
        <div className="review-rating">
          <HoverRating />
        </div>
        <div className="review-textarea">
          <AutoHeightTextarea />
        </div>
      </div>
      <div className="review-box">
        <img className="img2" src={require("../../img/img2.jpeg")}></img>
        <span className="review-nickname">nickname</span>
        <div className="review-rating">
          <HoverRating />
        </div>
        <div className="review-textarea">
          <AutoHeightTextarea />
        </div>
      </div>
      <div className="review-box">
        <img className="img2" src={require("../../img/img2.jpeg")}></img>
        <span className="review-nickname">nickname</span>
        <div className="review-rating">
          <HoverRating />
        </div>
        <div className="review-textarea">
          <AutoHeightTextarea />
        </div>
      </div>
    </>
  );
}

export default Review;
