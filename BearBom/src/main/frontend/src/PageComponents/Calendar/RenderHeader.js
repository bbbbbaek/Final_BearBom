import "../../css/components-schedule.scss";

const RenderHeader = ({ currentMonth }) => {
  return (
    <div className="header row">
      {currentMonth.toLocaleString("ko", { month: "long" })}
    </div>
  );
};

export default RenderHeader;
