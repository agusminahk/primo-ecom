import Carousel from 'react-multi-carousel';
import { Box } from '@mui/material';
import React, { FC } from 'react';

import ProductCard from '../components/ProductCard';
import { CustomDot } from './CustomCarousel';
import falseRequest from '../static/clothesNewExample.json';
import { responsiveCarousels } from '../utils/responsiveCarousels';

const styles = {
  firstBoxStyle: {
    mb: '1%',
    position: 'relative',
    display: 'block',
  },
  childBox: {
    userSelect: 'none',
    userDrag: 'none',
  },
};

const carouselProps = {
  additionalTransfrom: 0,
  responsive: responsiveCarousels.responsive2,
  pauseOnHover: true,
  autoPlay: false,
  infinite: true,
  showDots: false,
  draggable: true,
  arrows: true,
  minimumTouchDrag: 1,
  customDot: <CustomDot />,
};

interface CarouselProps {
  productId: string;
}

const CarouselRecommended: FC<CarouselProps> = ({ productId }) => {
  return (
    <Box component="div" sx={styles.firstBoxStyle}>
      <Carousel {...carouselProps}>
        {falseRequest.clothes.map((piece, i) => {
          return (
            <Box sx={styles.childBox} key={i}>
              <ProductCard product={piece} />
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselRecommended;
