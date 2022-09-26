import React from "react";
import "./modal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Modal = ({ modal, setModal }) => {
  const onSaveChange = () => {
    // 엑시오스 요청
    setModal(false);
  };
  const onCancelChange = () => {
    setModal(false);
  };
  return (
    <>
      <div className="modal">
        <div className="inside">
          <div className="top">
            <CloseOutlinedIcon onClick={onCancelChange} />
          </div>
          <div className="center">등록하시겠습니까?</div>
          <div className="bottom">
            <button id="submit" onClick={onSaveChange}>
              등록
            </button>
            <button id="cancel" onClick={onCancelChange}>
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
