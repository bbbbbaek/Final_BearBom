import React, { useState } from "react";
import "../css/calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <section>
      <sectiontitle>(필수) 프로젝트 기간</sectiontitle>
      <sectionInfo>프로젝트의 진행 기간을 선택해주세요.</sectionInfo>
      <div>
        <projectDateTitle>프로젝트 시작일: </projectDateTitle>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>
      <div>
        <projectDateTitle>프로젝트 종료일:</projectDateTitle>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          endDate={endDate}
          minDate={startDate}
        />
      </div>
    </section>
  );
}

export default Calendar;
