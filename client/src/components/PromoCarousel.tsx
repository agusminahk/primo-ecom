import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { CustomDot, LeftArrowProduct, RightArrowProduct } from '../common/CustomCarousel';
import React, { FC } from 'react';

import falseRequest from '../static/promoExample.json';
import PromoCard from '../common/PromoCard';
import { responsiveCarousels } from '../utils/responsiveCarousels';

const styles = {
  firstBoxStyle: {
    zIndex: '-50',
    mt: { xl: '-5%', lg: '-7%', md: '-8%', xs: '0%' },
    mx: '0vw',
    height: '0px',
    position: 'relative',
    display: 'block',
  },
};

const desktopCarouselProps = {
  additionalTransfrom: 0,
  responsive: responsiveCarousels.responsive1,
  pauseOnHover: true,
  autoPlay: true,
  autoPlaySpeed: 4500,
  customTransition: `all 0.4s ease-in-out`,
  infinite: true,
  showDots: true,
  draggable: true,
  arrows: true,
  ssr: true,
  rewindWithAnimation: false,
  minimumTouchDrag: 10,
  partialVisible: true,
  swipeable: true,
  customLeftArrow: <LeftArrowProduct />,
  customRightArrow: <RightArrowProduct />,
  customDot: <CustomDot />,
};

const PromoCarousel: FC = () => {
  return (
    <Box component="div" sx={styles.firstBoxStyle}>
      <Carousel {...desktopCarouselProps}>
        {falseRequest.images.map((image, i) => {
          return <PromoCard image={image} />;
        })}
      </Carousel>
    </Box>
  );
};

export default PromoCarousel;
