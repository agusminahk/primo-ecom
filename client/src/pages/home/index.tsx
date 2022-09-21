import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';

import PromoCarousel from '../../components/PromoCarousel';

import React from 'react';

const home: NextPage = () => {
  return <PromoCarousel />;
};

export default home;

{
  /* <Box sx={{ backgroundColor: 'red', height: '10vh', display: 'flex', justifyContent: 'center' }}>
<Typography variant="h2">SR HOME</Typography>
</Box> */
}
