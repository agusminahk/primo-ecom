import { Box, Typography, IconButton } from '@mui/material';
import Slider from 'react-slick';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import React, { FC } from 'react';

import PromoCard from '../common/PromoCard';

const settings = {
  adaptiveHeight: true,
  swipe: false,
  accessibility: true,
  arrows: true,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: (
    <IconButton>
      <ArrowForwardIcon sx={{ color: 'black' }} />
    </IconButton>
  ),
  prevArrow: (
    <IconButton>
      <ArrowBackIcon sx={{ color: 'black' }} />
    </IconButton>
  ),
};

const PromoCarousel: FC = () => {
  return (
    <Box sx={{ m: '3vw', minHeight: '0px', minWidth: '0px' }}>
      <Box>
        <Slider {...settings}>
          <PromoCard />
          <PromoCard />
          <PromoCard />
          <PromoCard />
          <PromoCard />
        </Slider>
      </Box>
    </Box>
  );
};

export default PromoCarousel;
