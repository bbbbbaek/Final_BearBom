import React from "react";
import "./modal.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Modal = () => {

  
  return (
    <>
      <div className="modal">
        <div className="inside">
          <div className="top">
            <CloseOutlinedIcon />
          </div>
          <div className="center">등록하시겠습니까?</div>
          <div className="bottom">
            <button id="submit">등록</button>
            <button id="cancel">취소</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
