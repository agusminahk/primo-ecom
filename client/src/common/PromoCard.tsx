import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PromoCard: FC = () => {
  return (
    <Card sx={{ width: '100vw', height: '30vh' }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center' }}
          component="img"
          image="https://rare-gallery.com/thumbs/1175892-Gentleman-jacket-spring-clothing-group-of-people-man-male-outerwear.jpg"
          alt="test"
        />
      </CardActionArea>
    </Card>
  );
};

export default PromoCard;
