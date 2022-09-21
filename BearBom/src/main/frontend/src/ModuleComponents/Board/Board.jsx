import React, { useContext } from "react";
import "./board.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import dummyData from "../../PageComponents/Admin/dummyData";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Board = ({ tableInfo }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { fetchedData } = useOutletContext();

  // ***** fetchedData 받아와야 함 *****

  // DB 테이블마다 컬럼의 key값이 상이하고(.title 사용 불가) 순서가 상이하기(배열 인덱스값 사용 불가) 때문에,
  // Board 컴포넌트에서 어떤 key값을 출력해야할지 정하기 어려움
  // --> 아래의 함수로 어떠한 DB 테이블에서 값을 받아오더라도 공통된 string값인 Title, Regdate 를 이용하여 알맞은 값을 출력할 수 있도록 만듦
  const onFindObjKey = (parameter) => {
    const test = Object.keys(fetchedData[0]).map((element) => {
      return element.includes(parameter);
    });
    const number = test.indexOf(true);
    const text = [Object.keys(fetchedData[0])[number]];
    const string = text.toString();
    return string;
  };

  // 현재 board의 data
  const [boardData] = fetchedData.filter((element) => {
    return element[Object.keys(element)[0]] === parseInt(params.id);
  });

  // 이전 글 데이터
  const [prevData] = fetchedData.filter((element) => {
    return element[Object.keys(element)[0]] === parseInt(params.id) - 1;
  });

  // 다음 글 데이터
  const [nextData] = fetchedData.filter((element) => {
    return element[Object.keys(element)[0]] === parseInt(params.id) + 1;
  });

  // 목록으로 돌아가기
  const backToList = () => {
    navigate(-1);
  };

  // 이전 글로 이동
  const onMoveToPrevBoard = () => {
    if (prevData) {
      let id = parseInt(boardData[Object.keys(boardData)[0]]) - 1;
      navigate(`/helpdesk/notice/${id}`);
    }
  };

  // 다음 글로 이동
  const onMoveToNextBoard = () => {
    if (nextData) {
      let id = parseInt(boardData[Object.keys(boardData)[0]]) + 1;
      navigate(`/helpdesk/notice/${id}`);
    }
  };

  return (
    <>
      {fetchedData ? (
        <div className="boardlist">
          <div className="top1">
            <div className="title">{boardData[onFindObjKey("Title")]}</div>
            <button className="back" onClick={backToList}>
              목록
            </button>
          </div>
          <div className="others">
            <div className="writer">
              <img src={adminProfileImage} alt="pp" />
              <div className="name1">{boardData[onFindObjKey("user")]}</div>
            </div>
            <div className="etc">
              <div>등록일</div>
              <div>
                {boardData[onFindObjKey("Mdfdate")] ||
                  boardData[onFindObjKey("Regdate")]}
              </div>
              <div>조회수</div>
              <div>{boardData.noticeMdfdate}</div>
            </div>
          </div>
          <hr />
          <div className="content1">{boardData[onFindObjKey("Content")]}</div>
          <div className="bottom">
            <div className="move" id="border" onClick={onMoveToNextBoard}>
              <div className="left">
                <KeyboardArrowUpIcon />
                &nbsp;&nbsp;다음글
              </div>
              <div className="right">
                {nextData ? (
                  nextData[onFindObjKey("Title")]
                ) : (
                  <div>다음 글이 없습니다.</div>
                )}
              </div>
            </div>
            <div className="move" onClick={onMoveToPrevBoard}>
              <div className="left">
                <KeyboardArrowDownIcon />
                &nbsp;&nbsp;이전글
              </div>
              <div className="right">
                {prevData ? (
                  prevData[onFindObjKey("Title")]
                ) : (
                  <div>이전 글이 없습니다.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Board;
