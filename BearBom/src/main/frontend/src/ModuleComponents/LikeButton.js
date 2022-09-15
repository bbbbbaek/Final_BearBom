import React, { useEffect } from "react";
import HeartImg from "../../src/assets/heart.png";
import EmptyHeartImg from "../../src/assets/empty-heart.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LikeButton = ({ like, onClick }) => {
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
