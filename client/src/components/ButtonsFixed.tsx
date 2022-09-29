import { Box, Fab, keyframes } from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { FC, useState } from 'react';
import CartDrawer from './CartDrawer';

const ButtonsFixed: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const fabAnimation = keyframes`
  0% {
    transform: rotate(0) scale(0.5)
  }
  100% {
    transform: rotate(360deg) scale(1)
  }
  `;

  return (
    <Box
      sx={{
        position: 'fixed',
        mt: '85vh',
        ml: '90%',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
      }}>
      <Fab
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: 'highlight.main',
          m: '4%',
          animation: `${fabAnimation} 0.7s both`,
        }}>
        <LocalMallRoundedIcon />
      </Fab>
      <Fab
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        sx={{
          backgroundColor: 'highlight.main',
          m: '4%',
          animation: `${fabAnimation} 0.7s both`,
        }}>
        <UpIcon />
      </Fab>
      <CartDrawer open={open} onClose={setOpen} />
    </Box>
  );
};

export default ButtonsFixed;
