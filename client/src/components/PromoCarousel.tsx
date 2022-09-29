import { Box, Typography, IconButton } from '@mui/material';
import Carousel from 'react-multi-carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomButtonGroupAsArrows, CustomDot, LeftArrow, RightArrow } from './CustomCarousel';
import React, { FC, useState } from 'react';

import PromoCard from '../common/PromoCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {};

const PromoCarousel: FC = () => {
  return (
    <Box
      component="div"
      sx={{
        zIndex: '-20',
        mx: '0vw',
        height: '100%',
      }}>
      <Carousel
        additionalTransfrom={0}
        responsive={responsive}
        pauseOnHover={true}
        autoPlay={true}
        autoPlaySpeed={5500}
        infinite={true}
        showDots={true}
        draggable={true}
        arrows={false}
        minimumTouchDrag={80}
        partialVisible
        renderButtonGroupOutside
        customDot={<CustomDot />}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        // customRightArrow={<RightArrow />}
        // customLeftArrow={<LeftArrow />}
      >
        {/* CustomLeftArrow={<CustomLeftArrow />} */}

        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </Carousel>
    </Box>
  );
};

export default PromoCarousel;
