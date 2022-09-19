import Swal from "sweetalert2";
import SubmitRating from "./SubmitRating";
function InputModal({ addReviewInfo, onWriteReview }) {
  const Modal1 = () => {
    Swal.fire({
      title: "후기",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "등록하기",
      showLoaderOnConfirm: true,
    });
  };
  return (
    <>
      <button onClick={Modal1}>등록하기</button>
    </>
  );
}

export default InputModal;
