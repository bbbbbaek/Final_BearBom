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
