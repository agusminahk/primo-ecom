import Carousel from 'react-multi-carousel';
import { Box, CardMedia, Card } from '@mui/material';
import React, { FC, useState } from 'react';

import { CardAsDots, LeftArrow, RightArrow, CustomDotMobile } from './CustomCarousel';
import { responsiveCarousels } from '../utils/responsiveCarousels';
import DialogProductDetail from './DialogProductDetail';
import { mouseDownCoords, clickOrDrag } from '../utils/dragAndClick';
import { promotionPrice, imagesFunction } from '../utils/productFunctions';
import { ProductImage } from '../common/interfaces';

interface ProductDetailCarouselProps {
  imageClicked: ProductImage;
  allImages: ProductImage[];
  setColorSelected: any;
}

const ProductDetailCarousel: FC<ProductDetailCarouselProps> = ({ imageClicked, allImages, setColorSelected }) => {
  const [open, setOpen] = useState<boolean>(false);
  const image = allImages.find((image: any) => imageClicked.url === image.url) ?? allImages[0];

  const imagesLittle = imagesFunction({ image, size: 'small', setColor: setColorSelected });
  const imagesLarge = imagesFunction({ image, size: 'large', setColor: setColorSelected });

  const mobileCarouselProps = {
    additionalTransfrom: 0,
    responsive: responsiveCarousels.responsive1,
    pauseOnHover: false,
    autoPlay: false,
    customTransition: `all 0.4s ease-in-out`,
    infinite: true,
    showDots: true,
    draggable: true,
    arrows: false,
    ssr: true,
    rewindWithAnimation: false,
    minimumTouchDrag: 2,
    partialVisible: true,
    swipeable: true,
    customDot: <CustomDotMobile />,
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
    customLeftArrow: <LeftArrow />,
    customRightArrow: <RightArrow />,
    customDot: <CardAsDots images={imagesLittle} />,
  };

  const style = {
    desktopCarouselBox: {
      width: { xl: '33%', lg: '45%' },
      display: { xl: 'block', lg: 'block', md: 'none', sm: 'none', xs: 'none' },
    },
    desktopChildBox: {
      cursor: 'zoom-in',
      paddingBottom: '27%',
      userSelect: 'none',
      userDrag: 'none',
    },
    cardMediaDesktop: {
      pointerEvents: 'none',
      userSelect: 'none',
      userDrag: 'none',
    },

    cardDesktopAndMobile: {
      borderRadius: '0',
      boxShadow: '0 0 0 0',
    },

    mobileCarouselBox: {
      width: '100%',
      display: { xl: 'none', lg: 'none', md: 'block', sm: 'block', xs: 'block' },
    },
    mobileChildBox: {
      userSelect: 'none',
      userDrag: 'none',
    },
    cardMediaMobile: {
      justifyContent: 'center',
      pointerEvents: 'none',
      userSelect: 'none',
      height: '98vw',
      width: '100%',
    },
  };

  return (
    <>
      {/* desktop carousel */}
      <Box sx={style.desktopCarouselBox}>
        <Carousel {...desktopCarouselProps}>
          {imagesLarge.map((image, i) => {
            return (
              <Box
                id="img_carousel"
                component="div"
                key={i}
                onMouseDown={e => mouseDownCoords(e)}
                onMouseUp={e => clickOrDrag(e, setOpen)}
                sx={style.desktopChildBox}>
                <Card sx={style.cardDesktopAndMobile}>
                  <CardMedia alt="shirt" component="img" image={`${image}`} sx={style.cardMediaDesktop} />
                </Card>
              </Box>
            );
          })}
        </Carousel>
      </Box>
      {/* mobile carousel */}
      <Box sx={style.mobileCarouselBox}>
        <Carousel {...mobileCarouselProps}>
          {imagesLarge.map((image, i) => {
            return (
              <Box
                component="div"
                key={i}
                sx={style.mobileChildBox}
                onMouseDown={e => mouseDownCoords(e)}
                onMouseUp={e => clickOrDrag(e, setOpen)}>
                <Card sx={style.cardDesktopAndMobile}>
                  <CardMedia component="img" image={`${image}`} sx={style.cardMediaMobile} />
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
