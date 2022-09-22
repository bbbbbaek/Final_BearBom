// function PayWindow() {
//   return (
//     <>
//       <div>
//         <button>카카오페이</button>
//         <button>네이버페이</button>
//         <button>신용카드</button>
//         <button>무통장 입금</button>
//       </div>
//     </>
//   );
// }

// export default PayWindow;

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CardSelect from "./PayCardOption";
import InstallmentsSelect from "./PayInstallmentOption";
import "../../css/payWindow.css";

export default function PayWindow() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="신용카드" value="1" />
            <Tab label="무통장 입금" value="2" />
            <Tab label="카카오페이" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="card-select">
            카드종류
            <CardSelect />
          </div>
          <div className="installments-select">
            할부선택
            <InstallmentsSelect />
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">
          <button>1</button>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
