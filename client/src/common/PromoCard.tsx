import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface PromoCardProp {
  image: string;
}

//HACER ESTILOS DE PROMO CARD!!!!!!!

const PromoCard: FC<PromoCardProp> = ({ image }) => {
  return (
    <Card sx={{ width: '100%', borderRadius: 0 }}>
      <CardActionArea>
        <CardMedia
          sx={{ backgroundPosition: 'center', objectFit: 'fill', height: '50%' }}
          component="img"
          image={image}
          alt="test"
        />
      </CardActionArea>
    </Card>
  );
};

export default PromoCard;
