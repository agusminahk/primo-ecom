import { Box, Paper } from '@mui/material';
import { Container } from '@mui/system';
import React, { FC } from 'react';
import StepForm from './SteepForm';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const RegisterStepper: FC = () => {
  const inputs = useForm();

  return (
    <Box
      sx={{ width: '100%', height: '100vh', backgroundColor: 'primary.main', display: 'flex', alignItems: 'center' }}>
      <FormProvider {...inputs}>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, backgroundColor: 'primary.main' }}>
            <StepForm />
          </Paper>
        </Container>
      </FormProvider>
    </Box>
  );
};

export default RegisterStepper;
