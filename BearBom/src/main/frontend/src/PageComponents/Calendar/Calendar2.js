import { useEffect, useRef } from "react";
import uuid from "react-uuid";
import { format, addMonths, startOfWeek, addDays } from "date-fns";
import "../../css/components-schedule.scss";
import RenderHeader from "./RenderHeader";
import RenderDays from "./RenderDays";
import RenderCells from "./RenderCells";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const currentDate = new Date();
  const selectedDate = new Date();

  let currentMonth = new Date(format(currentDate, "yyyy"));
  let months = [];

  const monthRef = useRef();

  for (let i = 0; i < 12; i++) {
    months.push(
      <div
        className="calendar__item"
        key={uuid()}
        ref={
          format(currentMonth, "MM") === format(selectedDate, "MM")
            ? monthRef
            : null
        }
      >
        <RenderHeader currentMonth={currentMonth} />
        <RenderCells currentMonth={currentMonth} selectedDate={selectedDate} />
      </div>
    );
    currentMonth = addMonths(currentMonth, 1);
  }

  useEffect(() => {
    if (monthRef.current !== null) {
      monthRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  function scrollCurrentMonth() {
    if (monthRef.current !== null) {
      monthRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="schedule-calendar">
      <div className="text-today">
        <p className="text-current" onClick={scrollCurrentMonth}>
          {currentDate.toLocaleString({ ko }, { month: "long" })}
          {format(currentDate, " dd")}
        </p>
        <p className="text-year">{format(currentDate, " yyyy")}</p>
      </div>
      <RenderDays />
      <div className="calendar-list">{months}</div>
    </div>
  );
};

export default Calendar;
