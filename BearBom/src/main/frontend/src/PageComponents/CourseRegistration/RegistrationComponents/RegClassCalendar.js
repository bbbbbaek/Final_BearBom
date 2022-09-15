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
  setFormObj({...formObj, "courseStDate": state.startDate.toString(), "courseEndDate":state.endDate.toString()})
 }, [state]);

 //let momentDate = moment(date).format();

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
      <div>Start Date : {state.startDate.toString()}</div>
      <br />
      <div>End Date : {state.endDate.toString()}</div>
    </div>
  );
};
export default RegClassCalendar;
