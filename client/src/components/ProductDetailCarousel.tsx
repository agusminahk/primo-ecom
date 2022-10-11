import { CardAsDots, LeftArrow, RightArrow, CustomDotMobile } from './CustomCarousel';
import { responsiveCarousels } from '../utils/responsiveCarousels';
import DialogProductDetail from './DialogProductDetail';
import { mouseDownCoords, clickOrDrag } from '../utils/dragAndClick';

import Carousel from 'react-multi-carousel';
import { Box, CardMedia, Card } from '@mui/material';
import React, { FC, useState } from 'react';

const ProductDetailCarousel: FC<any> = ({ imageClicked, allImages }) => {
  const [open, setOpen]: any = useState(false);

  const image = allImages.find((image: any) => imageClicked === image) ?? allImages[0];

  const [base, next] = image.url.split('____1');

  const imagesLittle = [...new Array(5)].map((_, i) => `${base}____${i + 1}__210x260.jpg`);
  const imagesLarge = [...new Array(5)].map((_, i) => `${base}____${i + 1}__967x1200.jpg`);

  return (
    <>
      {/* desktop carousel */}
      <Box
        sx={{
          width: { xl: '33%', lg: '45%' },
          display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' },
        }}>
        <Carousel
          additionalTransfrom={0}
          responsive={responsiveCarousels.responsive1}
          pauseOnHover={true}
          autoPlay={true}
          autoPlaySpeed={4500}
          customTransition={`all 0.4s ease-in-out`}
          infinite={true}
          showDots={true}
          draggable={true}
          arrows={true}
          rewindWithAnimation={false}
          // ssr
          minimumTouchDrag={10}
          partialVisible={true}
          swipeable={true}
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
          customDot={<CardAsDots images={imagesLittle} />}>
          {imagesLarge.map((image, i) => {
            return (
              <Box
                id="img_carousel"
                component="div"
                key={i}
                onMouseDown={e => mouseDownCoords(e)}
                onMouseUp={e => clickOrDrag(e, open, setOpen)}
                sx={{ cursor: 'zoom-in', paddingBottom: '27%', userSelect: 'none', userDrag: 'none' }}>
                <Card sx={{ borderRadius: '0', boxShadow: '0 0 0 0' }}>
                  <CardMedia
                    alt="shirt"
                    component="img"
                    image={`${image}`}
                    sx={{ pointerEvents: 'none', userSelect: 'none', userDrag: 'none' }}
                  />
                </Card>
              </Box>
            );
          })}
        </Carousel>
      </Box>
      {/* mobile carousel */}
      <Box
        sx={{
          width: '100%',
          display: { xl: 'none', lg: 'none', md: 'block', sm: 'block', xs: 'block' },
        }}>
        <Carousel
          additionalTransfrom={0}
          responsive={responsiveCarousels.responsive1}
          pauseOnHover={true}
          autoPlay={false}
          infinite={true}
          showDots={true}
          draggable={true}
          customTransition={`all 0.2s ease-in-out`}
          arrows={false}
          //   ssr
          minimumTouchDrag={0}
          partialVisible={true}
          customDot={<CustomDotMobile />}>
          {imagesLarge.map((image, i) => {
            return (
              <Box
                component="div"
                key={i}
                sx={{ userSelect: 'none', userDrag: 'none' }}
                onMouseDown={e => mouseDownCoords(e)}
                onMouseUp={e => clickOrDrag(e, open, setOpen)}>
                <Card sx={{ borderRadius: '0', boxShadow: '0 0 0 0' }}>
                  <CardMedia
                    component="img"
                    image={`${image}`}
                    sx={{
                      justifyContent: 'center',
                      pointerEvents: 'none',
                      userSelect: 'none',
                      height: '98vw',
                      width: '100%',
                    }}
                  />
                </Card>
              </Box>
            );
          })}
        </Carousel>
      </Box>
      <DialogProductDetail open={open} setOpen={setOpen} imageUrl={image.url} />
    </>
  );
};

export default ProductDetailCarousel;
