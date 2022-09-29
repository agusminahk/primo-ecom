import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  IconButton,
  Typography,
  Box,
  ButtonGroup,
  keyframes,
} from '@mui/material';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useInView } from 'react-intersection-observer';
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

const CartCard: React.FC<CardProps> = ({ product }) => {
  const { ref, inView }: any = useInView();

  const CartCardAnimation = keyframes`
  0% {
    transform: scale(0.9)
  }
  100% {
    transform: scale(1)
  }
  `;

  const style = {
    cardStyle: {
      display: 'flex',
      width: '100%',
      m: '2%',
      backgroundColor: 'primary.main',
      flexDirection: 'column',
      alingContent: 'space-between',
      animation: inView && `${CartCardAnimation} 0.25s both`,
    },
    cardActionStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
    iconStyle: {
      color: 'highlight.main',
    },
    descriptionStyle: {
      height: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '&:hover': { overflow: 'hidden', textOverflow: 'ellipsis', whitSpace: 'normal' },
    },
    boxStyle: {
      display: 'flex',
    },
  };

  return (
    <Box component="div" ref={ref}>
      <Card sx={style.cardStyle}>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ width: 'auto', mt: '1%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ width: '100px', height: '100px', borderRadius: '3%', maxHeight: 132 }}
                image={product.image}
                alt="clothe"
              />
            </CardActionArea>
          </Box>
          <Box sx={{ width: '55%' }}>
            <CardContent>
              <Typography component="div" variant="h5" sx={{ color: 'highlight.main' }}>
                {product.name}
              </Typography>
              <Typography variant="h6" color="neutral.main" component="div" sx={style.descriptionStyle}>
                {product.description}
              </Typography>
              <Typography variant="h6" color="neutral.main" sx={{ cursor: 'pointer', display: 'flex' }}>
                Read More
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography
            component="div"
            variant="h6"
            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'neutral.main' }}>
            <AttachMoneyIcon fontSize="small" sx={{ color: 'highlight.main' }} />
            {product.price}
          </Typography>
          <ButtonGroup
            variant="contained"
            sx={{ alignItems: 'center', backgroundColor: 'highlight.main', borderRadius: '20px', mr: '3%' }}>
            <IconButton size="small" sx={{ color: 'primary.main' }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              index
            </Typography>
            <IconButton size="small" sx={{ color: 'primary.main' }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CartCard;
