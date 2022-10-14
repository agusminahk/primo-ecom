import { Box, Dialog } from '@mui/material';
import React, { FC } from 'react';
import ProductDetailZoom from '../common/ProductDetailZoom';
import { CardAsDots2 } from '../common/CustomCarousel';
import Carousel from 'react-multi-carousel';
import { responsiveCarousels } from '../utils/responsiveCarousels';

interface DialogProps {
  open: boolean;
  imagesLittle: string[];
  imagesLarge: string[];
  setOpen: (a: boolean) => void;
}

const DialogProductDetail: FC<DialogProps> = ({ open, setOpen, imagesLarge, imagesLittle }) => {
  const styles = {
    secondBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'block',
    },
    childrenBoxStyle: { userSelect: 'none', userDrag: 'none' },
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
      <Box sx={styles.secondBoxStyle}>
        <Carousel
          dotListClass="card_as_dots_2"
          additionalTransfrom={0}
          responsive={responsiveCarousels.responsive1}
          autoPlay={false}
          infinite={true}
          showDots={true}
          draggable={false}
          customTransition={`all 0s ease-in-out`}
          arrows={false}
          partialVisible={true}
          renderDotsOutside={true}
          customDot={<CardAsDots2 images={imagesLittle} />}>
          {imagesLarge.map((image, i) => {
            return (
              <Box component="div" key={i} sx={styles.childrenBoxStyle}>
                <ProductDetailZoom imageUrl={image} setOpen={setOpen} />
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Dialog>
  );
};
export default DialogProductDetail;
