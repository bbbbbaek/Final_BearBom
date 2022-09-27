import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StepIcon } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const steps = [
  {
    label: '연락처 확인',
    description: ``,
  },
  {
    label: '클래스 유형',
    description:
      '',
  },
];

export default function RegStepperDetail1({currentStep}) {

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical">
        <div className='regStepper'>
        {steps.map((step, index) => (
            <StepLabel  icon={<StepIcon/>}>
              <ArrowRightIcon color='primary'/>{step.label}
            </StepLabel>
        ))}
        </div>
      </Stepper>
    </Box>
  );
}
