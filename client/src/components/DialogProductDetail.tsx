import { Box, Dialog, IconButton } from '@mui/material';
import React, { FC } from 'react';
import ProductDetailZoom from '../common/ProductDetailZoom';
import { CardAsDots2 } from './CustomCarousel';
import Carousel from 'react-multi-carousel';
import { responsiveCarousels } from '../utils/responsiveCarousels';
interface DialogProps {
  open: boolean;
  imageUrl: string;
  setOpen: (a: boolean) => void;
}

const DialogProductDetail: FC<DialogProps> = ({ open, setOpen, imageUrl }) => {
  const [base, next] = imageUrl.split('____1');
  const imagesLarge = [...new Array(5)].map((_, i) => `${base}____${i + 1}__967x1200.jpg`);
  const imagesLittle = [...new Array(5)].map((_, i) => `${base}____${i + 1}__210x260.jpg`);

  const styles = {
    secondBoxStyle: {
      width: '100%',
      height: '100%',
      display: 'block',
    },
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
      <Box>
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
              //Usar imageId para entrar directamente en una imagen
              return (
                <Box component="div" key={i} sx={{ userSelect: 'none', userDrag: 'none' }}>
                  <ProductDetailZoom imageUrl={image} setOpen={setOpen} />
                </Box>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Dialog>
  );
};
export default DialogProductDetail;
