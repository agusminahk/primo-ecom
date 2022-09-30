import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import falseRequest from '../static/singleProductExample.json';

const MainProductCard: FC = () => {
  const product= falseRequest;
  //   console.log(product);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '3000px' }}>
      <Card sx={{ borderRadius: '10px' }}>
        <CardActionArea>
          <CardMedia component="img" image={`${product.images[0]}`} alt={product.name} />
        </CardActionArea>
      </Card>
      <Box sx={{ width: '30%', position: 'sticky', top: 0 }}>
        <Typography variant="h2">{product.name}</Typography>
        <Typography variant="h3">${product.price}</Typography>
        <Typography variant="h5">
          {product.description}
          {product.description}
          {product.description}
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainProductCard;
