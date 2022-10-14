import { Card, CardActions, CardContent, CardActionArea, CardMedia, Typography, Box, keyframes } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, { FC, useState } from 'react';

import { CardProps } from '../components/interfaces';

const CartCard: FC<CardProps> = ({ product }) => {
  const [readMore, setReadMore] = useState(false);

  const CartCardAnimation = keyframes`
  0% {
    transform: scale(0.9)
  }
  100% {
    transform: scale(1)
  }
  `;

  const style = {
    cardStyle: {
      display: 'flex',
      width: '100%',
      m: '2%',
      backgroundColor: 'neutral.main',
      flexDirection: 'column',
      alingContent: 'space-between',
      animation: `${CartCardAnimation} 0.25s both`,
    },
    contentContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardActionAreaStyle: {
      width: 'auto',
      mt: '1%',
    },
    cardActionStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
    cardMedia: {
      width: '100px',
      height: '100px',
      borderRadius: '3%',
      maxHeight: 132,
    },
    cardContentStyle: { width: '55%' },
    nameStyle: {
      color: 'primary.main',
    },
    iconStyle: {
      color: 'highlight.main',
    },
    descriptionStyle: {
      height: 'auto',
      overflow: 'hidden',
      whiteSpace: readMore ? 'normal' : 'nowrap',
      textOverflow: 'ellipsis',
      color: 'primary.main',
    },
    boxStyle: {
      display: 'flex',
    },
    readMoreStyle: {
      cursor: 'pointer',
      display: 'flex',
      mt: '3%',
      color: 'primary.light',
    },
    cardActionsStyle: {
      justifyContent: 'space-between',
    },
    priceStyle: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'primary.main' },
    buttonGroup: { alignItems: 'center', backgroundColor: 'primary.main', borderRadius: '20px', mr: '3%' },
    eachButtonGroup: { color: 'neutral.main' },
    moneyIconStyle: { color: 'highlight.main' },
  };

  const [productImage] = product?.image;

  return (
    <Card sx={style.cardStyle}>
      <Box sx={style.contentContainer}>
        <CardActionArea sx={style.cardActionAreaStyle}>
          <CardMedia component="img" sx={style.cardMedia} image={productImage?.url} alt={product.name} />
        </CardActionArea>
        <CardContent sx={style.cardContentStyle}>
          <Typography component="div" variant="h5" sx={style.nameStyle}>
            {product.name}
          </Typography>
          <Typography variant="h6" color="neutral.main" component="div" sx={style.descriptionStyle}>
            {product.description}
          </Typography>
          {readMore ? (
            <Typography
              variant="h6"
              sx={style.readMoreStyle}
              onClick={() => {
                setReadMore(!readMore);
              }}>
              Read Less
            </Typography>
          ) : (
            <Typography
              variant="h6"
              sx={style.readMoreStyle}
              onClick={() => {
                setReadMore(!readMore);
              }}>
              Read More
            </Typography>
          )}
        </CardContent>
      </Box>
      <CardActions sx={style.cardActionsStyle}>
        <Typography component="div" variant="h6" sx={style.priceStyle}>
          <AttachMoneyIcon fontSize="small" sx={style.moneyIconStyle} />
          {product.price}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CartCard;
