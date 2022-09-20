import React, { useEffect } from "react";
import HeartImg from "../../src/assets/heart.png";
import EmptyHeartImg from "../../src/assets/empty-heart.png";
import styled from "styled-components";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const LikeButton = ({ like, onClick }) => {
  const [open, setOpen] = React.useState(false);

  const successAlert = () => {
    // Swal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button.",
    //   icon: "success",
    // });

    Swal.fire({
      title: "찜목록에 추가되었습니다.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
         top
        no-repeat
      `,
    });
  };
  return (
    <>
      <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />
    </>
  );
};

export default LikeButton;

const Heart = styled.img`
  // css
  width: 20px;
`;
