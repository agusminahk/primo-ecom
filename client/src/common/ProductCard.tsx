import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography, Box, keyframes } from '@mui/material';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import React, { FC, useState } from 'react';

export interface TypeRopa {
  indice: string;
  name: string;
  description: string;
  image: string;
  price: number;
  promotion: number;
}

type CardProps = {
  product: TypeRopa;
};

const ProductCard: FC<CardProps> = ({ product }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverCartButton, setHoverCartButton] = useState<boolean>(false);

  const percentage: number | boolean =
    product.promotion > 0 ? product.price - (product.price / 100) * product.promotion : false;

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
      maxWidth: '80%',
      pl: '4%',
      pr: '2%',
      top: '5%',
      left: '0%',
    },
    cardMediaStyle: {
      width: '100%',
      height: '100%',
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
      animation: hover ? `${btnAnimation} 0.25s both` : `${btnAnimationReverse} 0.25s both`,
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
      onMouseOver={e => {
        setHover(true);
      }}
      onMouseOut={e => {
        setHover(false);
      }}>
      <CardActionArea>
        <CardMedia component="img" sx={style.cardMediaStyle} image={product.image} alt={product.name} />
      </CardActionArea>

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
      {/* {hover && (
        <>
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
        </>
      )} */}
    </Card>
  );
};

export default ProductCard;
