import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstSteep';
import SecondStep from './SecondSteep';
import Confirm from './Confirm';
import Success from './Success';

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  // Step titles
  const labels = ['First Step', 'Second Step', 'Confirmation'];
  const handleNext = () => setActiveStep(activeStep + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep(activeStep - 1);

  const handleSteps = (step: number) => {
    switch (step) {
      case 0:
        return <FirstStep handleNext={handleNext} />;
      case 1:
        return <SecondStep handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <Confirm handleNext={handleNext} handleBack={handleBack} />;
      default:
        throw new Error('Unknown step');
    }
  };
  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Box sx={{ my: 5, color: 'primary.main' }}>
            <Typography variant="h2" align="center" sx={{ color: 'white' }}>
              Register
            </Typography>
            <Typography variant="subtitle2" align="center" sx={{ mt: 2, color: 'white' }}>
              enter your data
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3, color: 'white' }} alternativeLabel>
            {labels.map(label => (
              <Step
                key={label}
                sx={
                  {
                    // '& .MuiStepLabel-label': { color: '#fff' },
                  }
                }>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
};

export default StepForm;
