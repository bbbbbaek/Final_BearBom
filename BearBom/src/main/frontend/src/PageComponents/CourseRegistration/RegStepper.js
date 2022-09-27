import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RegStepperDetail1 from './RegStepperDetail1';
import RegStepperDetail3 from './RegStepperDetail3';
import RegStepperDetail2 from './RegStepperDetail2';
import { useState } from 'react';
import { useEffect } from 'react';



export default function RegStepper({currentStep}) {
  const [activeStep, setActiveStep] = useState();
  const steps = [
    {
      label: 'Step 1. 호스트 / 클래스 유형',
      description: '',
    },
    {
      label: 'Step 2. 클래스 소개 / 위치',
      description: <RegStepperDetail2 currentStep={currentStep}/>,
    },
    {
      label: 'Step 3. 클래스 비용 / 인원',
      description: <RegStepperDetail3 currentStep={currentStep}/>,
    },
  ];
  

  useEffect(() => {
    if(currentStep<=0){
      setActiveStep(0);
    }else if(currentStep<=6){
      setActiveStep(1);
    }else{
      setActiveStep(2);
    }
  }, [currentStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <b>{step.label}</b>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
