import React, { useEffect, useRef, useState } from "react";
import "./table.scss";
// fetchedData는 서버에 연결된 상태로만 불러올 수 있기 때문에, 연결이 되지 않은 상태에서는
// 아래의 salesData를 임시 데이터로 사용
import dummyData from "../../PageComponents/Admin/dummyData";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import excelDownload from "../../images/excelDownload.png";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../app-config";
import { onRequest } from "../UsefulFunctions/ApiService";
import noImageAvailable from "../../images/noImageAvailable.png";

// TableMenuItems 객체로 생성한 tableItems state를 사용하여 각 컴포넌트에 알맞은 데이터를 출력할 수 있도록 설계
const Table = ({ tableInfo, fetchedData }) => {
  const userRole = localStorage.getItem("USER_ROLE");
  const [sortType, setSortType] = useState("Idx");

  const returnValueOfKey = (Key) => {
    const test = Object.keys(fetchedData[0]).map((element) => {
      return element.includes(Key);
    });
    const number = test.indexOf(true);
    const text = [Object.keys(fetchedData[0])[number]];
    const string = text.toString();
    return string;
  };

  const sortedData = [...fetchedData].sort(
    (a, b) => b[returnValueOfKey(sortType)] - a[returnValueOfKey(sortType)]
  );

  const [rawData] = useState(sortedData);
  // data의 초깃값을 salesData로 설정하게 되면, rawData와 참조값이 같게 되면서 splice메소드 사용하여 data 변경 시, rawData의 값도 변경되는 문제 있음
  // --> 배열 복사를 통해 참조값이 다르도록 설정
  // const [data, setData] = useState([...salesData]);
  const [data, setData] = useState([...sortedData]);

  const [currentPageData, setCurrentPageData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const filterInputRef = useRef();
  const filterSelectRef = useRef();

  const navigate = useNavigate();

  // --------------------------- 페이징 처리 관련 함수 ---------------------------

  // 1. 필터 내용에 따라 data를 변경하는 함수
  const filteringData = (value, option) => {
    // setData를 이용해 변경하면 useEffect가 호출되므로 배열 메소드를 이용해 변경
    // data 초기화
    data.splice(0, data.length);
    // concat 메소드는 새로운 배열을 반환하므로, newData 변수에 저장

    const newData = data.concat(rawData);
    if (value === "") {
      let copy = [...rawData];
      setData(copy);
    } else if (option === "all") {
      let copy = newData.filter((a) => {
        let array = [];
        return a.userId === value;
      });
    } else {
      let copy = newData.filter((a) => {
        return a[option] === value;
      });
      setData(copy);
    }
  };

  // 2. data가 바뀔 때마다, currentPageData 변경하고, paging 함수 실행
  useEffect(() => {
    setCurrentPageData(data.slice(0, 10));
    paging();
  }, [data]);

  // 3. data의 개수에 따라 페이지 수 변경하는 함수
  const paging = () => {
    // Math.floor 범위가 /10 하기 이전까지로만 지정돼서 안됐던 경험 있음
    let count = Math.floor(
      data.findLastIndex((a) => {
        return a[returnValueOfKey(sortType)] >= 0;
      }) / 10
    );
    setPageCount(count + 1);
  };

  // 4. 클릭한 페이지에 따라 currentPageData를 변경해주는 함수
  const changeCurrentPageData = (pageNum) => {
    setCurrentPageData(data.slice(10 * pageNum - 10, 10 * pageNum));
  };

  // --------------------------- 페이징 처리 관련 함수 끝 ---------------------------

  // 테이블 바디 클릭 시, 상세 페이지로 이동하는 함수
  const moveToBoard = (element, type) => {
    let id = element[returnValueOfKey("Idx")];
    let path = window.location.pathname;
    switch (path) {
      case "/helpdesk/notice":
        navigate(`${id}`);
        break;
      case "/mypage/wishlist":
        navigate(`/course/${id}`);
        break;
      case "/mypage/course/user":
        navigate(`/course/${id}`);
        break;
      case "/mypage/course/lecturer":
        navigate(`/course/${id}`);
        break;
      case "/mypage/inquiry/view":
        navigate(`${id}`);
        break;
      case "/admin/sales":
        break;
      case "/admin/orders":
        break;
      case "/admin/users":
        break;
      case "/admin/courses":
        navigate(`/course/${id}`);
        break;
      case "/admin/notice":
        navigate(`${id}`);
        break;
      case "/admin/faq":
        navigate(`${id}`);
        break;
      case "/admin/inquiry":
        navigate(`${id}`);
        break;
      default:
        break;
    }
  };

  // 강좌 등록 - 관리자 승인 버튼 클릭 함수
  const onClickApprove = (index) => {
    // let selectedArray = fetchedData.filter((a) => {
    //   return a.courseIdx === index;
    // });
    alert("강좌 등록이 승인되었습니다.");
    onRequest("/api/admin/updateCourseStatus", "post", { courseIdx: index });
  };

  // 강좌 등록 - 관리자 삭제 버튼 클릭 함수
  const onClickDelete = (index) => {
    if (window.confirm("해당 내용을 삭제하시겠습니까?")) {
      onRequest("/api/admin/deleteCourseStatus", "post", { courseIdx: index });
    }
  };

  // 유저 관리 - 관리자 유저 강퇴 버튼 클릭 함수
  const onClickKickOut = (index) => {
    if (window.confirm("해당 유저를 베어봄에서 탈퇴 시키시겠습니까?")) {
      onRequest("/api/admin/deleteUserInfo", "post", { userId: index });
    }
  };

  // 글쓰기 버튼 클릭 함수
  const onClickWrite = () => {
    navigate("write");
  };

  //--------------------------- 테이블 만드는 부분 ---------------------------

  // 테이블에 클래스 추가해주는 함수
  const insertClass = (index) => {
    return "column " + tableInfo[index].prop;
  };

  // 테이블 헤드 반환하는 함수 (가로)
  const insertTH = (tableInfo) => {
    let tableItem = [];
    for (let i = 0; i < tableInfo.length; i++) {
      tableItem.push(<td className={insertClass(i)}>{tableInfo[i].title}</td>);
    }
    return tableItem;
  };

  // 테이블 바디 반환하는 함수 (가로)
  // 다양한 조건을 줌으로써 데이터 형태에 맞게 출력 가능
  const insertTD = (tableInfo, element) => {
    let tableItem = [];
    for (let i = 0; i < tableInfo.length; i++) {
      // date 형식
      if (tableInfo[i].cell.includes("Regdate")) {
        tableItem.push(
          <td
            className={insertClass(i)}
            onClick={() => {
              moveToBoard(element);
            }}
          >
            {Intl.DateTimeFormat("kr").format(
              new Date(element[tableInfo[i].cell])
            )}
          </td>
        );
        // 관리자 상태 확인 버튼
      } else if (tableInfo[i].title === "상태") {
        tableItem.push(
          <td className={insertClass(i)}>
            {element[tableInfo[i].cell] === "Y" ? (
              <div className="approved">승인완료</div>
            ) : element[tableInfo[i].cell] === "N" ? (
              <div className="deleted">삭제완료</div>
            ) : (
              <button
                className="pending"
                onClick={() => {
                  onClickApprove(element.courseIdx);
                }}
              >
                미승인
              </button>
            )}
          </td>
        );
        // 관리자 삭제 버튼
      } else if (tableInfo[i].title === "삭제") {
        tableItem.push(
          <td className={insertClass(i)}>
            {element[tableInfo[i - 1].cell] === "N" ? null : (
              <button
                id="delete"
                onClick={() => {
                  onClickDelete(element.courseIdx);
                }}
              >
                삭제
              </button>
            )}
          </td>
        );

        // 관리자 유저 추방 버튼
      } else if (tableInfo[i].title === "삭제") {
        tableItem.push(
          <td className={insertClass(i)}>
            <button
              id="delete"
              onClick={() => {
                onClickKickOut(element.userIdx);
              }}
            >
              추방
            </button>
          </td>
        );
        // 이미지 파일
      } else if (tableInfo[i].title === "이미지") {
        console.log(element[tableInfo[i].cell]);
        tableItem.push(
          <td className={insertClass(i)}>
            <img
              className="smallImage"
              src={
                // string에 아래의 확장자가 포함되면 이미지 파일로 읽어올 수 있도록 조건을 줌
                element[tableInfo[i].cell].includes(".png") ||
                element[tableInfo[i].cell].includes(".svg") ||
                element[tableInfo[i].cell].includes(".jpeg") ||
                element[tableInfo[i].cell].includes(".gif") ||
                element[tableInfo[i].cell].includes(".webp") ||
                element[tableInfo[i].cell].includes(".jpg")
                  ? `${API_BASE_URL}/upload/${element[tableInfo[i].cell]}`
                  : noImageAvailable
              }
              alt="img"
            />
          </td>
        );
        // 그 외 일반 string 데이터
      } else {
        tableItem.push(
          <td
            className={insertClass(i)}
            onClick={() => {
              moveToBoard(element);
            }}
          >
            {element[tableInfo[i].cell]}
          </td>
        );
      }
    }
    return tableItem;
  };

  //--------------------------- 테이블 만드는 부분 끝 ---------------------------

  return (
    <>
      {fetchedData ? (
        <div className="table_home">
          <div className="top1">
            {userRole === "ROLE_ADMIN" &&
            window.location.pathname !== "/admin/courses" ? (
              <button style={{ marginRight: "1rem" }} onClick={onClickWrite}>
                글쓰기
              </button>
            ) : null}

            <div className="search">
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setSortType(e.target.value);
                }}
                name="sort"
              >
                <option value="Idx">날짜</option>
                <option value="Title">구매자</option>
                {/* <option value="lecturerId">판매자</option>
                <option value="className">강의명</option> */}
              </select>
              <select name="duration" ref={filterSelectRef}>
                {/* 전체 필터로 검색 시, 구매자, 판매자, 강의명 모든 조건에서 검색할 수 있도록 처리해야 하나 아직 못함 */}
                <option value="all">전체</option>
                <option value="userId">구매자</option>
                <option value="lecturerId">판매자</option>
                <option value="className">강의명</option>
              </select>
              <input
                type="text"
                ref={filterInputRef}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  filteringData(
                    filterInputRef.current.value,
                    filterSelectRef.current.value
                  );
                }}
              >
                검색
              </button>
            </div>
            <CSVLink data={data}>
              <div style={{ textDecoration: "none" }}>
                <img src={excelDownload} alt="excel" />
              </div>
            </CSVLink>
          </div>
          <div className="center">
            <table>
              {/* 테이블 헤드 부분 (세로) */}
              <tr className="row_title">{insertTH(tableInfo)}</tr>

              {/* 테이블 바디 부분 (세로) */}
              {currentPageData.map((a, i) => {
                return (
                  <tr className="row_data" key={i}>
                    {/* 조건을 여기에 주면 안될 것 같음 */}
                    {
                      // checkIfThumbnailExists("Thumb")
                      //   ? insertTDT(tableInfo, a)
                      //   :
                      insertTD(tableInfo, a)
                      // checkingDataType(a)
                    }
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="bottom">
            <Stack spacing={1}>
              <Pagination
                boundaryCount={5}
                count={pageCount}
                color="primary"
                defaultPage={1}
                showFirstButton={true}
                showLastButton={true}
                // 2번째 인자가 current page를 받는 인자임
                onChange={(e, page) => {
                  changeCurrentPageData(page);
                }}
              />
            </Stack>
          </div>
        </div>
      ) : (
        <div>조회할 내역이 없습니다.</div>
      )}
    </>
  );
};

export default Table;
