import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import "../../css/apply.css";

const Calendar = (/* props */ { stDate, endDate }) => {
  const [startDate, setStartDate] = useState(new Date()); //시작 날짜
  const [endDate1, setEndDate1] = useState(new Date()); //종료 날짜

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate1(end);
  };
  registerLocale("ko", ko);
  useEffect(() => {
    if (stDate && typeof stDate !== "undefined") {
      setStartDate(new Date(stDate));
      setEndDate1(new Date(endDate));
    }
  }, [stDate, endDate]);

  return (
    <>
      <div>
        <DatePicker
          locale="ko"
          dateFormat="YYYY년 MM월 DD일"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate1}
          minDate={new Date()}
          inline
          readOnly
        />
      </div>
    </>
  );
};

export default Calendar;
