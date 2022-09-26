import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import "../../css/apply.css";

const Calendar2 = (/* props */ { stDate, endDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());

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
      <div /* className={`react-datepicker__month-container ${props.width}`} */>
        <DatePicker
          locale="ko"
          dateFormat="YYYY년 MM월 DD일"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate1}
          minDate={new Date()}
          // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
          // selectsRange
          // selectsDisabledDaysInRange
          inline
          readOnly
        />
      </div>
    </>
  );
};

export default Calendar2;
