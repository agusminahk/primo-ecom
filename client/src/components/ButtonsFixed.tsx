import { Box, Fab } from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { FC, useState } from 'react';
import CartDrawer from './CartDrawer';
import { fabAnimation, fabAnimationReverse } from '../utils/animation';

interface FabProps {
  inView: boolean;
}

const ButtonsFixed: FC<FabProps> = ({ inView }) => {
  const [open, setOpen] = useState<boolean>(false);

  const styles = {
    firstBoxStyle: {
      position: 'fixed',
      right: '2%',
      bottom: '3%',
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'column',
      zIndex: 1100,
    },
    cartFabStyle: {
      backgroundColor: 'highlight.main',
      m: '4%',
      animation: inView ? `${fabAnimationReverse} 0.4s both` : `${fabAnimation} 0.3s both`,
    },
    scrollFabStyle: {
      backgroundColor: 'highlight.main',
      m: '4%',
      animation: inView ? `${fabAnimationReverse} 0.4s both` : `${fabAnimation} 0.3s both`,
    },
  };

  return (
    <Box sx={styles.firstBoxStyle}>
      <Fab onClick={() => setOpen(!open)} sx={styles.cartFabStyle}>
        <LocalMallRoundedIcon />
      </Fab>
      <Fab
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        sx={styles.scrollFabStyle}>
        <UpIcon />
      </Fab>
      <CartDrawer open={open} onClose={setOpen} />
    </Box>
  );
};

export default ButtonsFixed;
