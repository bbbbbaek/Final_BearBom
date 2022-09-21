import React, { useContext } from "react";
import "./board.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const Board = ({ tableInfo }) => {
  const navigate = useNavigate();
  const backToList = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="boardlist">
        <div className="top1">
          <div className="title">해외진출 성장스토리 공모전</div>
          <button className="back" onClick={backToList}>
            목록
          </button>
        </div>
        <div className="others">
          <div className="writer">
            <img src={adminProfileImage} alt="pp" />
            <div className="name1">kmkim4238</div>
          </div>
          <div className="etc">
            <div>등록일</div>
            <div>2022/03/21</div>
            <div>조회수</div>
            <div>1</div>
          </div>
        </div>
        <hr />
        <div className="content1">블라블라블라</div>
        <div className="bottom">
          <div className="move" id="border">
            <div className="left">
              <KeyboardArrowUpIcon />
              &nbsp;&nbsp;이전글
            </div>
            <div className="right">블라블라</div>
          </div>
          <div className="move">
            <div className="left">
              <KeyboardArrowDownIcon />
              &nbsp;&nbsp;다음글
            </div>
            <div className="right">블라블라</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
