import React, { FC, useState } from 'react';
import { Box, Button, ButtonGroup, IconButton, Typography, Card, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import falseRequest from '../static/clothesNewExample.json';
import ProductDetailCarousel from './ProductDetailCarousel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Rating from '@mui/material/Rating';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
// import TypeClothes from "../components/ProductDetailCarousel"
import { TypeClothes } from '../common/ProductCard';

export interface TypeProductProps {
  productId?: string;
}

interface TypeBtnSize {
  btnSize?: number | boolean;
  setBtnSize?: React.Dispatch<React.SetStateAction<number | boolean>>;
}

interface TypeImageUrl {
  imageClicked?: { url: string; color: string };
  setImageUrl?: (url: string, color: string) => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const MainProductCard: FC<{ productId: string }> = ({ productId }) => {
  const { clothes }: any = falseRequest;
  const singleProduct: any = clothes.find((piece: any) => piece._id === productId) ?? {};

  const [imageClicked, setImageClicked] = useState<any>(singleProduct.image[0].url);
  const [numberClothes, setNumberClothes] = useState(0);
  const [btnSize, setBtnSize] = useState<number | boolean>(false);
  const [starValue, setStarValue] = useState<number | null>();

  const [btnSizeDisabled, setBtnSizeDisabled]: any = useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' },
        }}>
        {/* carousel */}
        <ProductDetailCarousel imageClicked={imageClicked} allImages={singleProduct.image} />
        {/* carousel */}

        <Box
          sx={{
            width: { xl: '25%', lg: '30%', md: '90%', sm: '90%', xs: '90%' },
            height: 'auto',
            bgcolor: 'neutral.main',
            display: 'flex',
            flexDirection: 'column',
            ml: { xl: '7%', lg: '7%', md: '3%', sm: '3%', xs: '3%' },
          }}>
          <Typography variant="h1">{singleProduct.name}</Typography>

          <Rating
            name="read-only"
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'primary.main',
                opacity: '100%',
              },
            }}
            size="small"
            icon={<StarRoundedIcon fontSize="small" />}
            emptyIcon={<StarRoundedIcon fontSize="small" />}
            value={singleProduct.ranking}
            readOnly
          />
          <Box sx={{ display: 'flex' }}>
            <AttachMoneyIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h2">{singleProduct.price}</Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ my: '3%' }}>
            Quantity
          </Typography>
          <ButtonGroup
            variant="contained"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'neutral.main',
              borderRadius: '20px',
              boxShadow: '0',
              width: '25%',
            }}>
            <IconButton
              size="small"
              sx={{ color: 'primary.main' }}
              onClick={() => {
                numberClothes > 0 && setNumberClothes(numberClothes - 1);
              }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              {numberClothes}
            </Typography>
            <IconButton
              size="small"
              sx={{ color: 'primary.main' }}
              onClick={() => {
                numberClothes < 99 && setNumberClothes(numberClothes + 1);
              }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </ButtonGroup>
          <Box sx={{ my: '1%' }}>
            <Typography variant="subtitle2" sx={{ mt: '3%' }}>
              Chosen color:{' '}
              {singleProduct.image.includes(imageClicked)
                ? imageClicked.color.toUpperCase()
                : singleProduct.image[0].color.toUpperCase()}
            </Typography>
            <Box sx={{ display: 'flex', width: 'auto' }}>
              {singleProduct.image.map((colorImage: { color: string; url: string }, i: number) => (
                <Card
                  onClick={() => setImageClicked(colorImage)}
                  sx={{
                    mx: '5%',
                    borderRadius: '3px',
                    height: '4.5rem',
                    width: '4.5rem',
                    '&.MuiPaper-root': {
                      boxShadow: '0px 0px 0px 0px',
                    },
                  }}>
                  <CardMedia component="img" image={`${colorImage.url}`} sx={{ cursor: 'pointer' }} />
                </Card>
              ))}
            </Box>
          </Box>
          <Box sx={{ my: '1%' }}>
            <Typography variant="subtitle2">Choose a size</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: '5%' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                {sizes.map((size, i) => {
                  return (
                    <Button
                      sx={{
                        m: '2%',
                        p: '5%',
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
          </Box>

          <Button
            sx={{
              py: '3%',
              borderRadius: '25px',
              backgroundColor: 'primary.main',
              color: 'neutral.main',
              mb: '3%',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'neutral.main',
              },
            }}>
            Add to cart
          </Button>
          <Typography variant="subtitle2" sx={{ mb: '1%' }}>
            Description
          </Typography>
          <Typography variant="h6"> {singleProduct.description}</Typography>

          <Box
            sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', height: 'auto', my: '1%' }}>
            <Box sx={{ mr: '2%', width: '40%', height: 'auto' }}>
              <Typography variant="subtitle2">Care Instructions</Typography>
              {singleProduct.details.care.map((element: any, i: number) => {
                const careElement = Object.keys(element);
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">-</Typography>
                    <Typography variant="h6" sx={{ textDecoration: 'underline dotted', m: '1%' }}>
                      {element[careElement[0]]}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box sx={{ width: '40%', height: 'auto' }}>
              <Typography variant="subtitle2">Composition</Typography>
              {singleProduct.details.composition.map((element: any, i: number) => {
                const compositionElement = Object.keys(element);

                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">-</Typography>
                    <Typography variant="h6" sx={{ textDecoration: 'underline dotted', m: '1%' }}>
                      {element[compositionElement[0]] + ' ' + compositionElement}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Typography variant="subtitle2" sx={{ mb: '1%' }}>
            Sustainability
          </Typography>

          <Typography variant="h6">
            Getting dressed shouldn't feel like a moral dilemma. Our high sustainability standards reduce our impact on
            the planet, better the lives of apparel workers and make it easy for you to look good with a clean
            conscience. We share our sustainability insights across the apparel industry, simply because it's the right
            thing to do
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MainProductCard;
