import React from 'react';
import Typography from '@mui/material/Typography';

export default function Success() {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ py: 4, color: 'white' }}>
        Thank you!
      </Typography>
      <Typography component="p" align="center" sx={{ color: 'white' }}>
        You will get an email with further instructions
      </Typography>
    </>
  );
}
