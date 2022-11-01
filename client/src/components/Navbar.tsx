import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CartDrawer from './CartDrawer';
import ButtonsFixed from './ButtonsFixed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React, { FC, useState } from 'react';

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  const styles = {
    firstBoxStyle: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      zIndex: '10',
    },
    appBarStyle: {
      width: { xl: '50%', lg: '50%', md: '70%', xs: '100%' },
      height: { xl: '2.8rem', lg: '3rem', md: '3.2rem', xs: '3.5rem' },
      boxShadow: '0 0 0 0',
      borderRadius: { xl: '30px', lg: '30px', md: '30px', xs: '0px' },
      m: { xl: '0.6%', lg: '0.6%', md: '0.6%', xs: '0px' },
      justifyContent: 'center',
      backgroundColor: 'transparent',
      backdropFilter: 'blur(80px)',
      border: '1px dashed',
      borderColor: 'highlight.main',
    },
    toolbarStyle: { display: 'flex', justifyContent: 'space-between' },
    secondBoxStyle: {
      display: 'flex',
      justifyContent: 'space-around',
      width: 'auto',
      alignItems: 'center',
      height: '40%',
    },
    linkBtnStyle: { borderRadius: '15px', px: '4px' },
  };

  return (
    <>
      <Box sx={styles.firstBoxStyle}>
        <AppBar component="div" ref={ref} sx={styles.appBarStyle} position="static">
          <Toolbar component="div" sx={styles.toolbarStyle}>
            <Button size="small" sx={{ borderRadius: '15px' }}>
              CATEGORIES
              <ExpandMoreIcon fontSize="small" sx={{ fontSize: '90%' }} />
            </Button>

            <Typography
              variant="h5"
              component="div"
              sx={{ color: 'highlight.main', fontWeight: 600, fontSize: '0.8rem' }}>
              PRIMO
            </Typography>

            <Box sx={styles.secondBoxStyle}>
              {/* user???
              <Typography variant="h6">Username</Typography>
              <IconButton component="div" sx={{ color: 'primary.main' }}>
                <AccountCircleIcon />
              </IconButton> */}
              <IconButton
                size="small"
                sx={{ color: 'primary.main' }}
                onClick={() => {
                  setOpen(!open);
                }}>
                <LocalMallRoundedIcon fontSize="small" sx={{ fontSize: '95%' }} />
              </IconButton>
              <Link href={'/signin'}>
                <Button size="small" sx={styles.linkBtnStyle}>
                  Sign In
                </Button>
              </Link>
              <Link href={'/login'}>
                <Button size="small" sx={styles.linkBtnStyle}>
                  Login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <CartDrawer open={open} onClose={setOpen} />
        <ButtonsFixed inView={inView as boolean} />
      </Box>
    </>
  );
};

export default Navbar;
