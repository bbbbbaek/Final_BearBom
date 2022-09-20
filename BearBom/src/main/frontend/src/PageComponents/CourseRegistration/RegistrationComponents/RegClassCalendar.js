import { DateRange } from "react-date-range";
import { Component } from "react";
import ko from "date-fns/locale/ko";
import { useState } from "react";
import { useEffect } from "react";

const RegClassCalendar = ({ saveFormData }) => {
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
      courseStDate: state.startDate,//.toString(),
      courseEndDate: state.endDate,//.toString(),
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
    console.log(ranges); // native Date object
    setState({
      startDate: ranges["selection"].startDate,
      endDate: ranges["selection"].endDate,
      key: ranges["selection"].key,
    });
  };

  return (
    <div className="regCalender">
      <DateRange
        locale={ko}
        editableDateInputs={true}
        onChange={onRangeChange}
        moveRangeOnFirstSelection={false}
        scroll={{ enabled: true }}
        ranges={[state]}
      />
      <br />
      <div>시작일 : {getFullYmdStr(state.startDate)}</div>
      <br />
      <div>종료일 : {getFullYmdStr(state.endDate)}</div>
    </div>
  );
};
export default RegClassCalendar;
