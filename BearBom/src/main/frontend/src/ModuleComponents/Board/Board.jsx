import React, { useContext } from "react";
import "./board.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import dummyData from "../../PageComponents/Admin/dummyData";
import { useState } from "react";

const Board = ({ tableInfo }) => {
  const navigate = useNavigate();
  const params = useParams();

  // fetchedData 받아와야 함
  // 현재 board의 data
  const [boardData] = dummyData.filter((ele) => {
    return ele.noticeIdx === parseInt(params.id);
  });

  // 이전 글 데이터
  const [prevData] = dummyData.filter((ele) => {
    return ele.noticeIdx === parseInt(params.id) - 1;
  });

  // 다음 글 데이터
  const [nextData] = dummyData.filter((ele) => {
    return ele.noticeIdx === parseInt(params.id) + 1;
  });

  // 목록으로 돌아가기
  const backToList = () => {
    navigate("/helpdesk/notice");
  };

  // 이전 글로 이동
  const onMoveToPrevBoard = () => {
    if (prevData) {
      let id = parseInt(boardData.noticeIdx) - 1;
      navigate(`/helpdesk/notice/${id}`);
    }
  };

  // 다음 글로 이동
  const onMoveToNextBoard = () => {
    if (nextData) {
      let id = parseInt(boardData.noticeIdx) + 1;
      navigate(`/helpdesk/notice/${id}`);
    }
  };

  return (
    <>
      <div className="boardlist">
        <div className="top1">
          <div className="title">{boardData.noticeNm}</div>
          <button className="back" onClick={backToList}>
            목록
          </button>
        </div>
        <div className="others">
          <div className="writer">
            <img src={adminProfileImage} alt="pp" />
            <div className="name1">{boardData.noticeNm}</div>
          </div>
          <div className="etc">
            <div>등록일</div>
            <div>{boardData.noticeMdfdate || boardData.noticeRegdate}</div>
            <div>조회수</div>
            <div>{boardData.noticeMdfdate}</div>
          </div>
        </div>
        <hr />
        <div className="content1">{boardData.noticeContent}</div>
        <div className="bottom">
          <div className="move" id="border" onClick={onMoveToNextBoard}>
            <div className="left">
              <KeyboardArrowUpIcon />
              &nbsp;&nbsp;다음글
            </div>
            <div className="right">
              {nextData ? nextData.noticeNm : <div>다음 글이 없습니다.</div>}
            </div>
          </div>
          <div className="move" onClick={onMoveToPrevBoard}>
            <div className="left">
              <KeyboardArrowDownIcon />
              &nbsp;&nbsp;이전글
            </div>
            <div className="right">
              {prevData ? prevData.noticeNm : <div>이전 글이 없습니다.</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
