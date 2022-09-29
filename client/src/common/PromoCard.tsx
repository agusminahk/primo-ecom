import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PromoCard: FC = () => {
  return (
    <Card sx={{ width: '100%', height: '100%', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
          component="img"
          image={'/laputa.jpg'}
          alt="test"
        />
      </CardActionArea>
    </Card>
  );
};

export default PromoCard;
