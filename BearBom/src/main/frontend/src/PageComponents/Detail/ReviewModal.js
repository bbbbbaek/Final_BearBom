import React from "react";
import "../../css/reviewModal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { modalOpen, open, setModalOpen, header, onWriteReview } = props;

  const handleClick = () => {
    onWriteReview();
    setModalOpen(!modalOpen);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button
              className="close"
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            >
              &times;
            </button>
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
