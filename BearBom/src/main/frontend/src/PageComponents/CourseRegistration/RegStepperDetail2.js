import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { height } from '@mui/system';

const steps = [
  {
    label: '제목 및 카테고리',
  },
  {
    label: '이미지',
  },
  {
    label: '상세내용',
  },
  {
    label: '커리큘럼',
  },
  {
    label: '강사소개',
  },
  {
    label: '위치정보',
  },
];
export default function RegStepperDetail2({currentStep}) {
const [activeStep, setActiveStep] = useState(currentStep-1);

useEffect(() => {
    setActiveStep(currentStep-1);
}, [currentStep]);

  return (
    <div className='regStepDetail'>
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <div className='stepDeLabel'>{step.label}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </div>
  );
}
