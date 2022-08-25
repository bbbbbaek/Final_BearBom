import React, { useState } from "react";
import rows from "./noticeData";
import NoticeDetail from "./NoticeDetail";

const Notice = () => {
  // const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  // const [selected, setSelected] = useState(false);

  rows.sort((a, b) => b.notice_idx - a.notice_idx);
  // 굳이 useEffect 사용할 필요 없이 함수로 해주면 됨 / useEffect 사용하면 처음 고객센터 접속 시 useEffect 실행되지 않는 문제점 있음
  // useEffect(() => {
  //   rows.sort((a, b) => b.notice_idx - a.notice_idx);
  // }, []);
  return (
    <>
      <div className="notice-main">
        <table>
          <thead>
            <tr>
              <td className="td-index">번호</td>
              <td className="td-title">제목</td>
              <td className="td-regDate">등록일</td>
              <td className="td-cnt">조회수</td>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => {
              return (
                <>
                  <tr
                    key={i}
                    onClick={() => {
                      setIndex(i);
                      // if (selected) {
                      //   setSelected(!selected);
                      //   e.target.parentElement.style.backgroundColor = "white";
                      //   setSelected(!selected);
                      // } else {
                      //   setSelected(!selected);
                      //   e.target.parentElement.style.backgroundColor = "beige";
                      //   setSelected(!selected);
                      // }
                    }}
                  >
                    <td className="td-index">{a.notice_idx}</td>
                    <td className="td-title">{a.notice_title}</td>
                    <td className="td-regDate">{a.notice_regDate}</td>
                    <td className="td-cnt">{a.notice_cnt}</td>
                  </tr>
                  <NoticeDetail index={index} />
                  {/* {modal === true ? <NoticeDetail /> : null} */}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Notice;
