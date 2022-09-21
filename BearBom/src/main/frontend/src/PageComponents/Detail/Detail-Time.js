import Calendar2 from "./Calendar";

function Time(course) {
  return (
    <>
      <h5>
        <b>시간표</b>
      </h5>
      <div className="time-cal">
        <Calendar2 width="width" course={course} />
      </div>
    </>
  );
}

export default Time;
