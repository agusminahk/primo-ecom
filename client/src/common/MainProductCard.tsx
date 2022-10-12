import { Box, Button, ButtonGroup, IconButton, Typography, Card, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import falseRequest from '../static/clothesNewExample.json';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import React, { FC, useState } from 'react';

import { ProductProps, ProductImage } from './interfaces';
import ProductDetailCarousel from '../components/ProductDetailCarousel';

export interface TypeProductProps {
  productId?: string;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const MainProductCard: FC<{ productId: string }> = ({ productId }) => {
  const clothes: ProductProps[] = falseRequest.clothes;
  const singleProduct = (clothes.find(piece => piece._id === productId) ?? {}) as ProductProps;

  const [imageClicked, setImageClicked] = useState<ProductImage>(singleProduct.image[0]);
  const [colorSelected, setColorSelected] = useState<string>(singleProduct.image[0].color);
  const [numberClothes, setNumberClothes] = useState(0);
  const [btnSize, setBtnSize] = useState<number | boolean>(false);
  const [starValue, setStarValue] = useState<number | null>();

  const style = {
    firstBoxStyle: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: { xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' },
    },
    rightBoxStyle: {
      width: { xl: '25%', lg: '30%', md: '90%', sm: '90%', xs: '90%' },
      height: 'auto',
      bgcolor: 'neutral.main',
      display: 'flex',
      flexDirection: 'column',
      ml: { xl: '7%', lg: '7%', md: '3%', sm: '3%', xs: '3%' },
    },
    titleStyle: { my: '2%' },
    ratingStyle: {
      mb: '2%',
      '& .MuiRating-iconFilled': {
        color: 'primary.main',
        opacity: '100%',
      },
    },
    priceStyle: { mb: '2%' },
    quantityStyle: { mb: '2%' },
    buttonGroupQuantity: {
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'neutral.main',
      borderRadius: '20px',
      boxShadow: '0',
      width: '25%',
      mb: '1%',
    },
    colorImagesStyle: {
      mx: '2%',
      '&.MuiPaper-root': {
        boxShadow: '0px 0px 0px 0px',
        borderRadius: '0 0 0 0',
        height: '4rem',
        width: '4rem',
      },
    },
    boxColorImages: { display: 'flex', width: 'auto' },
    cardMediaStyle: { transform: 'scale(0.9)', cursor: 'pointer' },
    firstBoxSizes: { display: 'flex', justifyContent: 'center', mb: '2%', mx: '3%' },
    secondBoxSizes: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    addToCartBtn: {
      py: '2%',
      borderRadius: '25px',
      backgroundColor: 'primary.main',
      color: 'neutral.main',
      mb: '4%',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'neutral.main',
      },
    },
    firstBoxInstructions: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 'auto',
      mb: '2%',
    },
    secondBoxCare: { mr: '2%', width: '40%', height: 'auto' },
    secondBoxComposition: { width: '40%', height: 'auto' },
  };

  return (
    <Box sx={style.firstBoxStyle}>
      {/* carousel */}
      <ProductDetailCarousel
        imageClicked={imageClicked}
        allImages={singleProduct.image}
        setColorSelected={setColorSelected}
      />
      {/* carousel */}
      <Box sx={style.rightBoxStyle}>
        <Typography variant="h1" sx={style.titleStyle}>
          {singleProduct.name}
        </Typography>

        <Rating
          name="read-only"
          sx={style.ratingStyle}
          size="small"
          icon={<StarRoundedIcon fontSize="small" />}
          emptyIcon={<StarRoundedIcon fontSize="small" />}
          value={singleProduct.ranking}
          readOnly
        />
        <Box display="flex" sx={style.priceStyle}>
          <AttachMoneyIcon color="primary" />
          <Typography variant="h2">{singleProduct.price}</Typography>
        </Box>

        <Box mb="2%">
          <Typography variant="subtitle2">Chosen color: {colorSelected}</Typography>
          <Box sx={style.boxColorImages}>
            {singleProduct.image.map((colorImage: { color: string; url: string }, i: number) => (
              <Card onClick={() => setImageClicked(colorImage)} sx={style.colorImagesStyle}>
                <CardMedia component="img" image={`${colorImage.url}`} sx={style.cardMediaStyle} />
              </Card>
            ))}
          </Box>
        </Box>

        <Typography variant="subtitle2">Choose a size</Typography>
        <Box sx={style.firstBoxSizes}>
          <Box sx={style.secondBoxSizes}>
            {sizes.map((size, i) => {
              return (
                <Button
                  sx={{
                    m: '2%',
                    p: '6%',
                    border: '1px dashed',
                    borderColor: btnSize === i ? 'primary.main' : 'highlight.main',
                    backgroundColor: btnSize === i ? 'primary.main' : 'transparent',
                    color: btnSize === i ? 'neutral.main' : 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'neutral.main',
                      borderColor: 'transparent',
                    },
                  }}
                  onClick={() => {
                    btnSize === i ? setBtnSize(false) : setBtnSize(i);
                  }}
                  disabled={!singleProduct?.sizes.includes(size)}>
                  Size {size}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Typography variant="subtitle2" sx={style.quantityStyle}>
          Quantity
        </Typography>
        <ButtonGroup variant="contained" sx={style.buttonGroupQuantity}>
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              numberClothes > 0 && setNumberClothes(numberClothes - 1);
            }}>
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography variant="h6" color="primary">
            {numberClothes}
          </Typography>
          <IconButton
            size="small"
            color="primary"
            onClick={() => {
              numberClothes < 99 && setNumberClothes(numberClothes + 1);
            }}>
            <AddIcon fontSize="small" />
          </IconButton>
        </ButtonGroup>
        <Button sx={style.addToCartBtn}>Add to cart</Button>
        <Typography variant="subtitle2" mb="2%">
          Description
        </Typography>
        <Typography variant="h6" mb="2%">
          {' '}
          {singleProduct.description}
        </Typography>
        <Box sx={style.firstBoxInstructions}>
          <Box sx={style.secondBoxCare}>
            <Typography variant="subtitle2" mb="2%">
              Care Instructions
            </Typography>
            {singleProduct.details.care?.map((element: any, i: number) => {
              const careElement = Object.keys(element);
              return (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '2%' }}>
                  <Typography variant="h6" sx={{ textDecoration: 'underline dotted', my: '1%' }}>
                    {element[careElement[0]]}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={style.secondBoxComposition}>
            <Typography variant="subtitle2" mb="2%">
              Composition
            </Typography>
            {singleProduct.details.composition?.map((element: any, i: number) => {
              const compositionElement = Object.keys(element);
              return (
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '2%' }}>
                  {/* <Typography variant="h6">-</Typography> */}
                  <Typography variant="h6" sx={{ textDecoration: 'underline dotted', my: '1%' }}>
                    {element[compositionElement[0]] + ' ' + compositionElement}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Typography variant="subtitle2" mb="2%">
          Sustainability
        </Typography>
        <Typography variant="h6" mb="2%">
          Getting dressed shouldn't feel like a moral dilemma. Our high sustainability standards reduce our impact on
          the planet, better the lives of apparel workers and make it easy for you to look good with a clean conscience.
          We share our sustainability insights across the apparel industry, simply because it's the right thing to do
        </Typography>
      </Box>
    </Box>
  );
};

export default MainProductCard;
