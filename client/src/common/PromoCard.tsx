import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PromoCard = ({ image }: any) => {
  return (
    <Card sx={{ width: '100%', height: '400px', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center', backgroundSize: 'cover', objectFit: 'fill' }}
          component="img"
          image={image}
          alt="test"
        />
      </CardActionArea>
    </Card>
  );
};

export default PromoCard;
