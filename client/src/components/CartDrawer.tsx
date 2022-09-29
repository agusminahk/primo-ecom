import { Drawer, Typography, Box, IconButton, AppBar, Toolbar } from '@mui/material';
import { FC } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import exampleRequest from '../static/clothesExample.json';
import CartCard from '../common/CartCard';

interface DrawerProps {
  open: boolean;
  onClose: (a: boolean) => void;
}

const CartDrawer: FC<DrawerProps> = ({ open, onClose }) => {
  const styles = {
    drawerPaperStyle: {
      borderRadius: '5px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24%',
      backgroundColor: 'primary.main',

      flexDirection: 'row-reverse',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '65%',
      '&::-webkit-scrollbar': {
        width: '0.3rem',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'highlight.main',
        borderRadius: 2,
      },
    },
    firstBoxDrawer: {
      display: 'flex',
      width: '80%',
      alignItems: 'center',
      m: '5%',
    },

    boxAllItems: {
      mt: '5%',
      maxHeight: '100vh',
      maxWidth: '100%',
    },
  };

  return (
    <Drawer
      PaperProps={{ sx: styles.drawerPaperStyle }}
      variant="persistent"
      transitionDuration={300}
      hideBackdrop={true}
      anchor={'right'}
      open={open}
      onClose={() => onClose(false)}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgb(8,18,41,0.90)',
          backdropFilter: 'blur(70px)',

          width: '24%',
        }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            SHOPPING BAG
          </Typography>
          <IconButton onClick={() => onClose(false)} sx={{ color: 'neutral.main' }}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={styles.firstBoxDrawer}></Box>
      <Box sx={styles.boxAllItems}>
        {exampleRequest.clothes.map((e, i) => (
          <Box sx={styles.boxItemDrawer} key={i}>
            <CartCard product={e} />
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
