import Modal from "./ReviewModal";
import HoverRating from "./ReviewFeedback";
import AutoHeightTextarea from "./AutoHeightTextarea";
import { useState } from "react";

function OpenModal() {
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
    </>
  );
}

export default OpenModal;
