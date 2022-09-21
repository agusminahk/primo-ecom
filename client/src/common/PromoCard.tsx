import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ m: '1vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://rare-gallery.com/thumbs/1175892-Gentleman-jacket-spring-clothing-group-of-people-man-male-outerwear.jpg"
          alt="test"
        />
      </CardActionArea>
    </Card>
  );
}
