import { Box, Typography, IconButton } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { CustomButtonGroupAsArrows, CustomDot } from './CustomCarousel';
import React, { FC, useState } from 'react';
import falseRequest from '../static/promoExample.json';

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

const styles = {
  firstBoxStyle: {
    zIndex: '-50',
    mt: '-5%',
    mx: '0vw',
    height: '0px',
    position: 'relative',
    display: 'block',
  },
};

const PromoCarousel: FC = () => {
  return (
    <Box component="div" sx={styles.firstBoxStyle}>
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
        customButtonGroup={<CustomButtonGroupAsArrows />}>
        {falseRequest.images.map((image, i) => {
          return <PromoCard image={image} />;
        })}
      </Carousel>
    </Box>
  );
};

export default PromoCarousel;
