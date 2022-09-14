import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <CardWrapper>
        <ImgContainer></ImgContainer>
        <TextContainer></TextContainer>
      </CardWrapper>
    </>
  );
};

export default Card;

const TextContainer = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  color: black;
  .first_row {
    font-weight: 600;
    font-size: 12px;
  }
  .second_row {
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 1rem;
  }
  .third_row {
    font-size: 11px;
    color: #a8a8a8;
  }
  .hollow {
    display: none;
  }
  .last_row {
    font-size: 14px;
  }
`;
// const CardWrapper = styled.a`
const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  video {
    width: 240px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 85%;
  height: 300px;
  padding: 2rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .tag {
    position: absolute;
    top: 5%;
    left: 5%;
    background-color: #6a82ec;
    border: 0.3px solid #6a82ec;
    padding: 3px 6px;
    color: white;
    border-radius: 7px;
    font-size: 10px;
    font-weight: 600;
  }

  .place {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
