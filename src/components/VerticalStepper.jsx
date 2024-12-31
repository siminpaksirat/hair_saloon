import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Clock from './Clock';
import SelectChip from './SelectChip';
import EmailButton from './EmailButton';

const steps = [
  {
    label: 'Please select your desired services',
    description: 'Choose from the list of available services.',
  },
  {
    label: 'Select Date and Time',
    description: 'Pick a suitable date and time for your appointment.',
  },
  {
    label: 'Confirm your appointment',
    description: 'Please review and confirm your appointment.',
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [appointmentData, setAppointmentData] = useState({
    services: [],
    dateTime: null,
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const updateServices = (services) => {
    setAppointmentData((prev) => ({ ...prev, services }));
  };

  const updateDateTime = (dateTime) => {
    setAppointmentData((prev) => ({ ...prev, dateTime }));
  };

  return (
    <Box sx={{ maxWidth: 900 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                {index === 0 && <SelectChip onChange={updateServices} />}
                {index === 1 && <Clock onChange={updateDateTime} />}
                {index === 2 && (
                  <Box>
                    <Typography variant="h6">Services: {appointmentData.services.join(', ') || 'None selected'}</Typography>
                    <Typography variant="h6">Date and Time: {appointmentData.dateTime ? appointmentData.dateTime.toString() : 'Not selected'}</Typography>
                  </Box>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 2, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 2, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>You are all set!</Typography>
          <EmailButton/>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
