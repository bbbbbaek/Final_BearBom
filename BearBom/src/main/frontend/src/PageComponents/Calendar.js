import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

registerLocale("ko", ko);

const Calendar2 = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  if (endDate) {
    console.log("시작일 :" + startDate + "종료일 :" + endDate);
  }
  registerLocale("ko", ko);

  return (
    <>
      <div className={`react-datepicker__month-container ${props.width}`}>
        <DatePicker
          locale="ko"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
          selectsRange
          selectsDisabledDaysInRange
          inline
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
    </>
  );
};

export default Calendar2;

// import React, { useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
// import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
// import { DateRangePickerDay as MuiDateRangePickerDay } from "@mui/x-date-pickers-pro/DateRangePickerDay";
// import { ko } from "date-fns/locale";

// const DateRangePickerDay = styled(MuiDateRangePickerDay)(
//   ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
//     ...(isHighlighting && {
//       borderRadius: 0,
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//       "&:hover, &:focus": {
//         backgroundColor: theme.palette.primary.dark,
//       },
//     }),
//     ...(isStartOfHighlighting && {
//       borderTopLeftRadius: "50%",
//       borderBottomLeftRadius: "50%",
//     }),
//     ...(isEndOfHighlighting && {
//       borderTopRightRadius: "50%",
//       borderBottomRightRadius: "50%",
//     }),
//   })
// );

// function Calendar5() {
//   const [value, setValue] = React.useState([null, null]);
//   useEffect(() => {
//     const $span = document.querySelectorAll(
//       ".MuiTypography-root MuiTypography-caption css-1w13o7u-MuiTypography-root"
//     );
//     console.log($span[0]);
//     // $span[0].textContent = "일";
//   }, []);

//   const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
//     return <DateRangePickerDay {...dateRangePickerDayProps} />;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDateRangePicker
//         displayStaticWrapperAs="desktop"
//         label="date range"
//         value={value}
//         locale={ko}
//         onChange={(newValue) => setValue(newValue)}
//         renderDay={renderWeekPickerDay}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </React.Fragment>
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
// export default Calendar5;
// import React, { useState } from "react";
// import "../css/calendar.css";
// // import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function Calendar() {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   return (
//     <section>
//       <sectiontitle>(필수) 프로젝트 기간</sectiontitle>
//       <sectionInfo>프로젝트의 진행 기간을 선택해주세요.</sectionInfo>
//       <div>
//         <projectDateTitle>프로젝트 시작일: </projectDateTitle>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           selectsStart
//           startDate={startDate}
//           endDate={endDate}
//         />
//       </div>
//       <div>
//         <projectDateTitle>프로젝트 종료일:</projectDateTitle>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           selectsEnd
//           endDate={endDate}
//           minDate={startDate}
//         />
//       </div>
//     </section>
//   );
// }

// import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function Calendar() {
//   const [value, setValue] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }

// import { DateRange } from "react-date-range";
// import { Component } from "react";
// class Calendar1 {
//   constructor(props) {
//     this.state = {
//       // 이 컴포넌트의 state 설정
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     };
//   }
//   onRangeChange = (ranges) => {
//     console.log(ranges); // native Date object
//     this.setState({
//       startDate: ranges["selection"].startDate,
//       endDate: ranges["selection"].endDate,
//       key: ranges["selection"].key,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <DateRange
//           editableDateInputs={true}
//           onChange={this.onRangeChange}
//           moveRangeOnFirstSelection={false}
//           ranges={[this.state]}
//         />
//         <br />
//         <div>Start Date : {this.state.startDate.toString()}</div>
//         <br />
//         <div>End Date : {this.state.endDate.toString()}</div>
//       </div>
//     );
//   }
// }
// export default Calendar1;

// import { DateRangePicker } from "react-date-range";

// function MyComponent() {
//   handleSelect(ranges) {
//     console.log(ranges);
//     // {
//     //   selection: {
//     //     startDate: [native Date Object],
//     //     endDate: [native Date Object],
//     //   }
//     // }
//   }
//   render() {
//     const selectionRange = {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     };
//     return (
//       <>
//       <DateRangePicker ranges={[selectionRange]} onChange={this.handleSelect} />
//       </> );
//   }
// }
// export default MyComponent;
