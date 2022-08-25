import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered
      TabIndicatorProps={{
        style: {
          height: 4,
        },
      }}
      disableRipple
      indicatorColor="secondary"
      textColor="secondary">
        <Tab label="호스트 인증" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label="유형" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label="소개" sx={{ minWidth: { sm: 220 } }}/>
        <Tab label="금액 및 일정" sx={{ minWidth: { sm: 220 } }}/>
      </Tabs>
    </Box>
  );
}
