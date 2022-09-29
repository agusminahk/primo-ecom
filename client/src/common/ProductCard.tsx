import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Typography,
  Box,
  keyframes,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';

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

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const [hover, setHover] = useState(false);
  const [hoverCartButton, setHoverCartButton] = useState(false);

  const likeAnimation = keyframes`
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
    },
    cardActionStyle: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },

    contentStyle: {
      py: 2,
    },
    mediaStyle: {
      justifyContent: 'center',
    },
    iconStyle: {
      color: 'warning.main',
    },
    typoStyle: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '&:hover': { overflow: 'hidden', textOverflow: 'ellipsis', whitSpace: 'normal' },
    },
    dividerStyle: {
      py: 0.5,
      m: 0.5,
    },
    boxStyle: {
      display: 'flex',
    },
  };

  return (
    <Card
      sx={{ ...style.cardStyle, position: 'relative' }}
      onMouseOver={e => {
        setHover(true);
      }}
      onMouseOut={e => {
        setHover(false);
      }}>
      <CardContent sx={style.contentStyle}>
        <CardActionArea>
          <Typography variant={'h2'} sx={style.typoStyle}>
            {product.name}
          </Typography>
        </CardActionArea>
        <Divider sx={style.dividerStyle}></Divider>
        <Typography component="div" variant={'h5'} sx={style.typoStyle}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: '12rem',
            height: '12rem',
            borderRadius: '3%',
          }}
          image={product.image}
          alt="clothe"
        />
      </CardActionArea>
      {hover && (
        <Box sx={{ ...style.cardActionStyle, position: 'absolute', top: '100px', left: '155px' }}>
          <IconButton
            size="small"
            sx={{
              animation: `${likeAnimation} 0.25s both`,
              backgroundColor: 'neutral.main',
              color: 'primary.main',
              my: '2px',
              '&:hover': { color: 'highlight.main', backgroundColor: 'neutral.main' },
            }}>
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              animation: `${likeAnimation} 0.25s both`,
              backgroundColor: 'neutral.main',
              color: 'primary.main',
              my: '2px',
              '&:hover': { color: 'highlight.main', backgroundColor: 'neutral.main' },
            }}
            onMouseEnter={e => {
              setHoverCartButton(true);
            }}
            onMouseLeave={e => {
              setHoverCartButton(false);
            }}>
            {!hoverCartButton ? <LocalMallIcon fontSize="small" /> : <PlusOneIcon fontSize="small" />}
          </IconButton>
        </Box>
      )}
      <Box
        sx={{
          backgroundColor: 'neutral.main',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          width: 'auto',
          top: '250px',
          left: '5px',
        }}>
        <AttachMoneyIcon fontSize={'inherit'} sx={{ my: '2px', color: 'highlight.main' }} />
        <Typography variant="h6" sx={{ color: 'primary.main', mr: '8px', userSelect: 'none' }}>
          {product.price}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductCard;
