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
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

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
  const style = {
    cardStyle: {
      maxWidth: '345',
      boxShadow: '3',
      width: { xs: '90%', md: '40vw', lg: '30vw', xl: '15vw' },
    },
    cardActionStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
    contentStyle: {
      py: 2,
    },
    mediaStyle: {
      justifyContent: 'center',
    },
    iconStyle: {
      color: 'warning.main',
      mr: 1,
    },
    typoStyle: {
      mt: '1.5',
    },
    dividerStyle: {
      py: 0.5,
      m: 0.5,
    },
    moneyIcon: {
      color: 'warning.main',
    },
    boxStyle: {
      display: 'flex',
    },
  };

  return (
    <Card sx={style.cardStyle}>
      <CardContent sx={style.contentStyle}>
        <CardActionArea>
          <Typography variant={'h2'} sx={style.typoStyle}>
            {product.name}
          </Typography>
        </CardActionArea>
        <Divider sx={style.dividerStyle} />
        <Typography variant={'h5'} sx={style.typoStyle}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia component="img" image={product.image} alt="media" sx={style.mediaStyle} />
      </CardActionArea>
      <CardActions sx={style.cardActionStyle}>
        <Box sx={style.boxStyle}>
          <IconButton sx={style.iconStyle}>
            <AddShoppingCartIcon sx={style.iconStyle} />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon sx={style.iconStyle} />
          </IconButton>
        </Box>
        <Box sx={style.boxStyle}>
          {/* <IconButton><FavoriteIcon sx={style.iconStyle}/> </IconButton> */}
          {/* TODO: Favorit Icon una vez que se produzca el  add Favs */}
          <AttachMoneyIcon sx={style.moneyIcon}></AttachMoneyIcon>
          <Typography> {product.price} </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
