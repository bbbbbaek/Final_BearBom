import { DateRange } from "react-date-range";
import { Component } from "react";
import ko from "date-fns/locale/ko";
import { useState } from "react";
import { useEffect } from "react";
import { now } from "moment/moment";

const RegClassCalendar = ({ formData, saveFormData }) => {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
  }, [formObj]);

  useEffect(() => {
    setFormObj({
      ...formObj,
      courseStDate: state.startDate, //.toString(),
      courseEndDate: state.endDate, //.toString(),
    });
  }, [state]);

  //let momentDate = moment(date).format();

  // const getYmd10 = (d) => {
  //   return (
  //     d.getFullYear() +
  //     "-" +
  //     (d.getMonth() + 1 > 9
  //       ? (d.getMonth() + 1).toString()
  //       : "0" + (d.getMonth() + 1)) +
  //     "-" +
  //     (d.getDate() > 9 ? d.getDate().toString() : "0" + d.getDate().toString())
  //   );
  // };
  const getFullYmdStr = (d) => {
    return (
      d.getFullYear() +
      "년 " +
      (d.getMonth() + 1) +
      "월 " +
      d.getDate() +
      "일 " +
      "일월화수목금토".charAt(d.getUTCDay()) +
      "요일"
    );
  };

  const onRangeChange = (ranges) => {
    console.log(new Date()); // native Date object
    if (ranges["selection"].startDate < new Date()) {
      alert("지난 날짜는 선택할 수 없습니다.");
    } else if (ranges["selection"].startDate > ranges["selection"].endDate) {
      alert("종료일은 시작일 이후로 지정해주세요.");
    } else {
      setState({
        startDate: ranges["selection"].startDate,
        endDate: ranges["selection"].endDate,
        key: ranges["selection"].key,
      });
    }
  };

  useEffect(() => {
    if (formData.courseStDate && formData.courseEndDate) {
      setState({
        startDate: new Date(formData.courseStDate),
        endDate: new Date(formData.courseEndDate),
        key: "selection",
      });
    }
  }, []);

  return (
    <div className="regCalender">
      <div className="regCalCalender">
        <DateRange
          locale={ko}
          editableDateInputs={true}
          onChange={onRangeChange}
          moveRangeOnFirstSelection={false}
          scroll={{ enabled: true }}
          ranges={[state]}
        />
      </div>
      <div className="regCalToString">
        <div>
          시작일
          <br />
          {getFullYmdStr(state.startDate)}
        </div>
        <div>
          <br />
        </div>
        {state.startDate !== state.endDate && (
          <div>
            종료일
            <br />
            {getFullYmdStr(state.endDate)}
          </div>
        )}
        {/* <input readOnly={true} value={getFullYmdStr(state.startDate)}></input>
        <input readOnly={true} value={getFullYmdStr(state.endDate)}></input> */}
      </div>
    </div>
  );
};
export default RegClassCalendar;
