import React, { useContext } from "react";
import "./board.scss";
import adminProfileImage from "../../images/adminProfileImage.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const Board = ({ type }) => {
  const userRole = localStorage.getItem("USER_ROLE");
  const navigate = useNavigate();
  const params = useParams();
  const [fetchedData, setFetchedData] = useState();
  const [writingMode, setWritingMode] = useState(false);
  // 각 페이지에 맞는 내용을 가져와야 하므로 switch-case 구문 사용하여 가져올 데이터 정의
  useEffect(() => {
    switch (type) {
      case "notice":
        axios.get(API_BASE_URL + "/api/helpdesk/getNoticeList").then((res) => {
          setFetchedData(res.data.data);
        });
        break;
      case "inquiry":
        axios
          .get(API_BASE_URL + "/api/mypage/getInquiryReference1")
          .then((res) => {
            console.log(res.data);
            setFetchedData(res.data.data);
          });
        break;
      case "admin_notice":
        axios.get(API_BASE_URL + "/api/helpdesk/getNoticeList").then((res) => {
          setFetchedData(res.data.data);
        });
        break;
      case "admin_faq":
        axios.get(API_BASE_URL + "/api/helpdesk/getFaqList").then((res) => {
          console.log(res.data.data);
          setFetchedData(res.data.data);
        });
        break;
      case "admin_inquiry":
        axios
          .get(API_BASE_URL + "/api/helpdesk/getInquiryInfoReferenceList")
          .then((res) => {
            console.log(res.data.data);
            setFetchedData(res.data.data);
          });
        break;
      default:
        break;
    }
  }, []);

  const onClickWrite = () => {
    setWritingMode(true);
  };

  // 파라미터 제외한 window.location.pathname 리턴하는 함수
  // 이전글, 다음글 넘어가기 위함 --> 목록으로 돌아가기에도 사용할 수 있음!!!
  const urlWithoutParam = () => {
    switch (type) {
      case "notice":
        return "/helpdesk/notice";
      case "inquiry":
        return "/mypage/inquiry/view";
      case "admin_notice":
        return "/admin/notice";
      case "admin_faq":
        return "/admin/faq";
      case "admin_inquiry":
        return "/admin/inquiry";
      default:
        break;
    }
  };

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

  // 현재 글 데이터
  const returnBoardData = () => {
    const [boardData] = fetchedData.filter((element) => {
      return element[Object.keys(element)[0]] === parseInt(params.id);
    });
    return boardData;
  };

  // 이전 글 데이터
  const returnPrevData = () => {
    const [prevData] = fetchedData.filter((element) => {
      return element[Object.keys(element)[0]] === parseInt(params.id) - 1;
    });
    return prevData;
  };

  // 다음 글 데이터
  const returnNextData = () => {
    const [nextData] = fetchedData.filter((element) => {
      return element[Object.keys(element)[0]] === parseInt(params.id) + 1;
    });
    return nextData;
  };

  // 목록으로 돌아가기
  const backToList = () => {
    navigate(urlWithoutParam());
  };

  // 이전 글로 이동
  const onMoveToPrevBoard = () => {
    if (returnPrevData()) {
      let id =
        parseInt(returnBoardData()[Object.keys(returnBoardData())[0]]) - 1;
      navigate(`${urlWithoutParam()}/${id}`);
    }
  };

  // 다음 글로 이동
  const onMoveToNextBoard = () => {
    if (returnNextData()) {
      let id =
        parseInt(returnBoardData()[Object.keys(returnBoardData())[0]]) + 1;
      navigate(`${urlWithoutParam()}/${id}`);
    }
  };

  return (
    <>
      {fetchedData ? (
        <div className="boardlist">
          <div className="top1">
            <div className="title">
              {writingMode ? (
                <input type="text" />
              ) : (
                returnBoardData()[onFindObjKey("Title")]
              )}
            </div>
            <div className="buttons">
              {userRole === "ROLE_ADMIN" && (
                <>
                  {type === "admin_inquiry" ? (
                    <button className="write" onClick={onClickWrite}>
                      답변
                    </button>
                  ) : null}

                  <button className="write" onClick={onClickWrite}>
                    수정
                  </button>
                </>
              )}
              <button className="back" onClick={backToList}>
                목록
              </button>
            </div>
          </div>
          <div className="others">
            <div className="writer">
              <img src={adminProfileImage} alt="pp" />
              <div className="name1">
                {returnBoardData()[onFindObjKey("user")]}
              </div>
            </div>
            <div className="etc">
              <div>등록일</div>
              <div>
                {returnBoardData()[onFindObjKey("Mdfdate")] ||
                  returnBoardData()[onFindObjKey("Regdate")]}
              </div>
              <div>조회수</div>
              <div>{returnBoardData().noticeMdfdate}</div>
            </div>
          </div>
          <hr />
          <div className="content1">
            {returnBoardData()[onFindObjKey("Content")]}
          </div>
          <div className="bottom">
            <div className="move" id="border" onClick={onMoveToNextBoard}>
              <div className="left">
                <KeyboardArrowUpIcon />
                &nbsp;&nbsp;다음글
              </div>
              <div className="right">
                {returnNextData() ? (
                  returnNextData()[onFindObjKey("Title")]
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
                {returnPrevData() ? (
                  returnPrevData()[onFindObjKey("Title")]
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
