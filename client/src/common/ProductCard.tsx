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
}

type CardProps = {
  product: TypeRopa;
};

const ProductCard: FC<CardProps> = ({ product }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverCartButton, setHoverCartButton] = useState<boolean>(false);

  const priceAnimation = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}

	100% {
		opacity: 1;
		transform: translateY(-18px);
	}
  `;

  const titleAnimation = keyframes`
	0% {
		opacity: 1;
		transform: translateY(140px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
  `;

  const btnAnimation = keyframes`
  0% {
    transform: scale(0.75)
  }
  100% {
    transform: scale(0.9)
  }
  `;

  const style = {
    cardStyle: {
      boxShadow: '3',
      width: '12rem',
      position: 'relative',
      borderRadius: '3%',
    },
    boxTypoStyle: {
      top: '170.5px',
      backgroundColor: 'primaryTransparent.light',
      backdropFilter: 'blur(50px)',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      position: 'absolute',
      borderTopLeftRadius: '10px 10px',
      borderTopRightRadius: '10px 10px',
      animation: `${titleAnimation} 0.15s both`,
    },
    typoStyle: {
      px: '7px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    dividerStyle: {
      my: 1,
    },
    cardMediaStyle: {
      width: '12rem',
      height: '12rem',
    },
    cardActionStyle: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: '10px',
      left: '155px',
    },
    iconStyle: {
      animation: `${btnAnimation} 0.25s both`,
      backgroundColor: 'neutral.main',
      color: 'primary.main',
      my: '2px',
      '&:hover': { color: 'highlight.main', backgroundColor: 'neutral.main' },
    },
    priceBoxStyle: {
      backgroundColor: 'neutral.main',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: 'auto',
      top: '160px',
      animation: hover && `${priceAnimation} 0.3s both`,
      left: '5px',
    },
    moneyIconStyle: {
      my: '2px',
      color: 'highlight.main',
    },
    priceTypoStyle: {
      color: 'primary.main',
      mr: '8px',
      userSelect: 'none',
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
      <Box sx={style.priceBoxStyle}>
        <AttachMoneyIcon fontSize={'inherit'} sx={style.moneyIconStyle} />
        <Typography variant="h6" sx={style.priceTypoStyle}>
          {product.price}
        </Typography>
      </Box>
      {hover && (
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

          <Box sx={style.boxTypoStyle}>
            <Typography variant="subtitle2" sx={style.typoStyle}>
              {product.name}
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
