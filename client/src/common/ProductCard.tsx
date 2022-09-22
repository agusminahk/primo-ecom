import { Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';

export interface TypeRopa {
  indice: string;
  name: string;
  description: string;
  image: string;
}

type CardProps = {
  product: TypeRopa;
};

const ProductCard: React.FC<CardProps> = ({ product }) => {
  const style = {
    cardStyle: {
      maxWidth: '345',
      boxShadow: '3',
      width: { xs: '90%', md: '40vw', lg: '30vw', xl: '25vw' }, //Responsive
    },
    contentStyle: {
      py: '2',
    },
    mediaStyle: {
      justifyContent: 'center',
    },
    actionStyle: {
      justifyContent: 'space-between',
    },
    iconStyle: {
      color: 'orange',
    },
    typoStyle: {
      mt: '1.5',
    },
    dividerStyle: {
      py: 0.5,
    },
  };

  return (
    <Card sx={style.cardStyle}>
      <CardContent sx={style.contentStyle}>
        <Typography variant={'h2'} sx={style.typoStyle}>
          {product.name}
        </Typography>
        <Divider sx={style.dividerStyle} />
        <Typography variant={'h5'} sx={style.typoStyle}>
          {product.description}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={product.image} alt="media" sx={style.mediaStyle} />
      <CardActions sx={style.actionStyle}>
        <IconButton>
          <AddShoppingCartIcon sx={style.iconStyle}></AddShoppingCartIcon>
        </IconButton>
        <IconButton>
          <FavoriteIcon sx={style.iconStyle}></FavoriteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
