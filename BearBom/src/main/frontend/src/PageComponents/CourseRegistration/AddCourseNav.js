import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from 'react';
import { useState } from 'react';




export default function CenteredTabs( {currentStep, setCurrentStep}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(currentStep==0){
      setValue(0)
    }else if(currentStep<=6){
      setValue(2)
    }else{
      setValue(4)
    }
 }, [currentStep]);

  return (
      <Tabs value={value} 
      centered
      TabIndicatorProps={{
        style: {
          height: 7,
          borderRadius:3,
          background: "lightgrey",
          marginBottom:3
          //width: 40
          
          //color:"black"
        },
      }}
      disableRipple>
        <Tab label="호스트 및 클래스 유형" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label=" > " sx={{ minWidth: { sm: 80 } }}/>
        <Tab label="클래스 소개 및 위치" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label=" > " sx={{ minWidth: { sm: 80 } }}/>
        <Tab label="금액 및 일정" sx={{ minWidth: { sm: 220 } }}/>
      </Tabs>
  );
}
