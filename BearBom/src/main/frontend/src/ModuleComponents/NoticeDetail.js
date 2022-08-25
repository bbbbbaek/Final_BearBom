import React, { useState } from "react";
import rows from "./noticeData";

const NoticeDetail = (props) => {
  const [notice, setNotice] = useState(rows);

  notice.map((a, i) => {
    if (props.index === i) {
      console.log(props.index);
      return (
        <>
          <tr className="noticeDetail-main">
            <td>
              <div>{notice[i].notice_idx}</div>
              <div>{notice[i].notice_title}</div>
              <div>{notice[i].notice_regDate}</div>
              <div>{notice[i].notice_cnt}</div>
              <div>{notice[i].notice_content}</div>
            </td>
          </tr>
        </>
      );
    }
  });
};

export default NoticeDetail;
