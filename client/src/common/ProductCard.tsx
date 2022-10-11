import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography, Box, keyframes } from '@mui/material';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { mouseDownCoords, clickOrDrag } from '../utils/dragAndClick';
import { useRouter } from 'next/router';
import React, { FC, useState, useEffect } from 'react';

export interface TypeClothes {
  _id: string;
  name: string;
  price: number;
  colors: string[];
  description: string;
  sizes: string[];
  image: { url: string; color?: string }[];
  promotion: number;
  details: TypeDetails;
  ranking: number;
  reviews: TypeReviews[];
  category: { categoryName: string };
  subCategory: { subCategoryName: string }[];
}

//Types Details
type TypeDetails = {
  material?: string;
  charasteristic?: string;
  composition?: TypeComposition[];
  care?: TypeCare[];
};
type TypeCare = {
  wash?: string;
  bleach?: string;
  iron?: string;
};
type TypeComposition = {
  cotton?: string;
  polyester?: string;
  elastane?: string;
};

//Types Reviews
type TypeReviews = {
  user: TypeUser;
  content: string;
  ranking: number;
};
type TypeUser = {
  firstName: string;
};

//Type Props
type CardProps = {
  product: TypeClothes;
};

const ProductCard: FC<CardProps> = ({ product }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverCartButton, setHoverCartButton] = useState<boolean>(false);

  const [click, setClick] = useState(false);
  useEffect(() => {
    setClick(false);
  }, [click]);
  const router = useRouter();

  if (click) {
    router.push(`/product/${product._id}`);
  }

  const percentage: number | boolean =
    product.promotion > 0 ? product.price - (product.price / 100) * product.promotion : false;

  const [base, next] = product.image[0].url.split('____1');

  const images = [...new Array(5)].map((_, i) => `${base}____${i + 1}__516x640.jpg`);

  const btnAnimation = keyframes`
  0% {
    transform: scale(0.75)
  }
  100% {
    transform: scale(0.9)
  }
  `;

  const btnAnimationReverse = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 100%
  }
  100% {
    transform: scale(0.70);
    opacity: 0%
  }
  `;

  const style = {
    cardStyle: {
      boxShadow: '0px',
      width: { xl: '22rem', lg: '17rem', md: '15rem', xs: '15rem' },
      position: 'relative',
      borderRadius: '0',
      transition: 'all 0.2s ease-in-out',
      userSelect: 'none',
      cursor: 'pointer',
      userDrag: 'none',
      '&.MuiPaper-root': {
        boxShadow: '0px 0px 0px 0px',
      },
    },
    typoStyle: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    titleBoxStyle: {
      backgroundColor: 'neutral.main',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: 'auto',
      maxWidth: '40%',
      height: 'auto',
      maxHeight: '30%',
      pl: '4%',
      pr: '2%',
      top: '5%',
      left: '0%',
    },
    cardMediaStyle: {
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      pointerEvents: 'none',
      userSelect: 'none',
      userDrag: 'none',
    },
    cardActionStyle: {
      boxShadow: '0px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: '4%',
      left: { xl: '87%', lg: '83%', md: '80%', xs: '80%' },
    },
    iconStyle: {
      animation: hover ? `${btnAnimation} 0.2s both` : `${btnAnimationReverse} 0.2s both`,
      backgroundColor: 'neutral.main',
      color: 'primary.main',
      my: '2px',
      '&:hover': { color: 'highlight.main', backgroundColor: 'neutral.main' },
    },
    priceBoxStyle: {
      backgroundColor: 'neutral.main',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: 'auto',
      top: { xl: '91%', lg: '89%', md: '88%', xs: '88%' },
      left: '0%',
      pl: '5%',
    },
    promotionBox: {
      backgroundColor: 'highlight.main',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      px: '2%',
      width: 'auto',
      top: { xl: '85%', lg: '82%', md: '80%', xs: '79%' },
      left: '5%',
      borderRadius: '20px',
    },
    moneyIconStyle: {
      my: '2px',
      color: 'primary.main',
    },
    priceTypoStyle: {
      color: 'primary.main',
      mr: '8px',
      userSelect: 'none',
      fontWeight: '700',
    },
    TypoStylePromo: {
      color: 'primary.main',
      userSelect: 'none',
      fontWeight: '700',
    },
    moneyIconStylePromo: {
      my: '2px',
      color: 'highlight.main',
    },
    priceTypoStylePromo: {
      color: 'highlight.main',
      mr: '8px',
      userSelect: 'none',
      fontWeight: '701',
    },
    moneyIconStyleDeactivated: {
      my: '2px',
      color: 'primary.main',
      opacity: '45%',
    },
    priceTypoStyleDeactivated: {
      color: 'primary.main',
      mr: '8px',
      textDecoration: 'line-through 2px',
      userSelect: 'none',
      opacity: '45%',
      fontWeight: '700',
    },
  };

  return (
    <Card
      sx={style.cardStyle}
      onMouseDown={e => mouseDownCoords(e)}
      onMouseUp={e => clickOrDrag(e, click, setClick)}
      onMouseOver={e => {
        setHover(true);
      }}
      onMouseOut={e => {
        setHover(false);
      }}>
      <CardMedia component="img" sx={style.cardMediaStyle} image={images[1]} alt={product.name} />

      <Box sx={style.titleBoxStyle}>
        <Typography variant="h6" sx={style.typoStyle}>
          {product.name}
        </Typography>
      </Box>

      {percentage ? (
        <>
          <Box sx={style.promotionBox}>
            <Typography variant="h6" sx={style.TypoStylePromo}>
              {product.promotion}% OFF
            </Typography>
          </Box>
          <Box sx={style.priceBoxStyle}>
            <AttachMoneyIcon fontSize={'inherit'} sx={style.moneyIconStyle} />
            <Typography variant="h6" sx={style.priceTypoStylePromo}>
              {percentage}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <AttachMoneyIcon fontSize={'inherit'} sx={style.moneyIconStyleDeactivated} />
              <Typography variant="h6" sx={style.priceTypoStyleDeactivated}>
                {product.price}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Box sx={style.priceBoxStyle}>
          <AttachMoneyIcon fontSize={'inherit'} sx={style.moneyIconStyle} />
          <Typography variant="h6" sx={style.priceTypoStyle}>
            {product.price}
          </Typography>
        </Box>
      )}

      <Box sx={style.cardActionStyle}>
        <IconButton size="small" sx={style.iconStyle}>
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
        <IconButton
          size="small"
          sx={style.iconStyle}
          onMouseEnter={e => {
            setHoverCartButton(true);
          }}
          onMouseLeave={e => {
            setHoverCartButton(false);
          }}>
          {!hoverCartButton ? <LocalMallIcon fontSize="small" /> : <PlusOneIcon fontSize="small" />}
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
