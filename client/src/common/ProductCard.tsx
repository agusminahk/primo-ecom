import { Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
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
  return (
    <Card sx={{ maxWidth: '345', width: '25vw', boxShadow: '3' }}>
      <CardContent>
        <Typography variant={'h3'} sx={{ mt: 1.5 }}>
          {product.name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>{product.description} </Typography>
      </CardContent>
      <CardMedia component="img" image={product.image} alt="media" />
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton>
          <AddShoppingCartIcon sx={{ color: 'orange' }}></AddShoppingCartIcon>
        </IconButton>
        <IconButton>
          <ShoppingBagIcon sx={{ color: 'orange' }}></ShoppingBagIcon>
        </IconButton>
        <IconButton>
          <FavoriteIcon sx={{ color: 'orange' }}></FavoriteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
