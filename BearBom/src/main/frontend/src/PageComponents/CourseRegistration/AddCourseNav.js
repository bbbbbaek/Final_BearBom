import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Tabs value={value}
      onChange={handleChange} centered
      TabIndicatorProps={{
        style: {
          height: 6,
          borderRadius:3,
          background: "lightgrey",
          //width: 40
          
          //color:"black"
        },
      }}
      disableRipple>
        <Tab label="인증 및 클래스 유형" sx={{ minWidth: { sm: 220 } }}/>
        {/*<Tab label="유형" sx={{ minWidth: { sm: 220 } }}/>*/}
        <Tab label="클래스 소개" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label="금액 및 일정" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label="클래스 위치" sx={{ minWidth: { sm: 220 } }}/>
      </Tabs>
  );
}
