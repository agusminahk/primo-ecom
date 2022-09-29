import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import CartDrawer from './CartDrawer';
import ButtonsFixed from './ButtonsFixed';
import ButtonGroup from '@mui/material/ButtonGroup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FC, useState } from 'react';

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.2,
  });

  const styles = {
    firstBoxStyle: {
      position: 'absolute',
      width: '100%',
      height: '7%',
      display: 'flex',
      justifyContent: 'center',
      zIndex: '10',
    },
    appBarStyle: {
      width: '50%',
      height: '60%',
      boxShadow: '0 0 0 0',
      borderRadius: '30px',
      mt: '0.6%',
      justifyContent: 'center',
      backgroundColor: 'rgb(236,89,144,0.54)',
      backdropFilter: 'blur(50px)',
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
            <Tooltip title="hola">
              <Button size="small" sx={{ borderRadius: '15px' }}>
                CATEGORIES
                <ExpandMoreIcon fontSize="small" sx={{ fontSize: '90%' }} />
              </Button>
            </Tooltip>

            <Typography variant="h5" component="div" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
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
              <ButtonGroup variant="text" size="small">
                <Link href={'/signin'}>
                  <Button sx={styles.linkBtnStyle}>Sign In</Button>
                </Link>
                <Link href={'/login'}>
                  <Button sx={styles.linkBtnStyle}>Login</Button>
                </Link>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </AppBar>

        <CartDrawer open={open} onClose={setOpen} />
        {inView === false && <ButtonsFixed />}
      </Box>
    </>
  );
};

export default Navbar;
