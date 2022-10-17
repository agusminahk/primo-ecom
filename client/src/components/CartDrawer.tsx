import { Drawer, Typography, Box, IconButton, AppBar, Toolbar } from '@mui/material';
import { FC } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import exampleRequest from '../static/clothesNewExample.json';
import CartCard from './CartCard';

interface DrawerProps {
  open: boolean;
  onClose: (param: boolean) => void;
}

const CartDrawer: FC<DrawerProps> = ({ open, onClose }) => {
  const styles = {
    drawerPaperStyle: {
      borderRadius: '5px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      width: { xl: '30%', lg: '45%', md: '60%', xs: '100%' },
      backgroundColor: 'neutral.main',
      flexDirection: 'row-reverse',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '100%',
      '&::-webkit-scrollbar': {
        width: '0.3rem',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary.main',
        borderRadius: 2,
      },
    },
    appBarStyle: {
      backgroundColor: 'transparent',
      boxShadow: '0 0 0 0',
      top: '1%',
      right: '1%',
      width: 'auto',
      '& .MuiToolbar-root': {
        justifyContent: 'flex-end',
      },
    },
    firstBoxDrawer: {
      display: 'flex',
      width: '80%',
      alignItems: 'center',
      m: '5%',
    },
    boxAfterItems: { p: '5%', mb: '5%', pt: '10%', display: 'flex', justifyContent: 'center' },
    titleStyle: { textDecoration: 'underline dotted' },
    boxAllItems: {
      mt: '5%',
      maxHeight: '100vh',
      maxWidth: '100%',
    },
  };

  return (
    <Drawer
      PaperProps={{ sx: styles.drawerPaperStyle }}
      transitionDuration={100}
      anchor={'right'}
      open={open}
      onClose={() => onClose(false)}>
      <AppBar position="fixed" sx={styles.appBarStyle}>
        <Toolbar>
          <IconButton size="large" onClick={() => onClose(false)}>
            <CancelIcon color="primary" fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={styles.boxAllItems}>
        <Box sx={styles.boxAfterItems}>
          <Typography variant="h6" color="primary" sx={styles.titleStyle} component="div">
            This is currently your Shopping Bag
          </Typography>
        </Box>
        {exampleRequest.clothes.map((product, i) => (
          <CartCard key={i} product={product} />
        ))}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
