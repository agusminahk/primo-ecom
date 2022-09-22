import React, { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CartDrawer from './CartDrawer';

const Navbar: FC = () => {
  const [open, setOpen]: any = useState(false);

  const styles = {
    AppBarStyle: {
      boxShadow: '0 0 0 0',
    },
  };

  return (
    <>
      <Box style={styles.AppBarStyle}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
              PRIMO
            </Typography>
            <IconButton size="large" color="inherit" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ mr: 1 }} onClick={() => setOpen(true)}>
              <ShoppingCartIcon />
            </IconButton>
            <IconButton size="large" color="inherit" sx={{ mr: 1 }}>
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
