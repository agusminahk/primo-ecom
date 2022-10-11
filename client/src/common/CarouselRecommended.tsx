import Carousel from 'react-multi-carousel';
import { CustomDot } from '../components/CustomCarousel';
import falseRequest from '../static/clothesNewExample.json';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';
import React, { FC } from 'react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2570 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 2570, min: 1629 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1629, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const styles = {
  firstBoxStyle: {
    mb: '1%',
    position: 'relative',
    display: 'block',
  },
};

const CarouselRecommended: FC<{ productId: string }> = ({ productId }) => {
  return (
    <Box component="div" sx={styles.firstBoxStyle}>
      <Carousel
        additionalTransfrom={0}
        responsive={responsive}
        pauseOnHover={true}
        autoPlay={false}
        infinite={true}
        showDots={false}
        draggable={true}
        arrows={true}
        minimumTouchDrag={1}
        customDot={<CustomDot />}>
        {falseRequest.clothes.map((piece, i) => {
          return (
            <Box
              sx={{
                userSelect: 'none',
                userDrag: 'none',
              }}
              key={i}>
              <ProductCard product={piece} />
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselRecommended;
