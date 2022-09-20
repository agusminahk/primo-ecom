import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

import useGif from '../hooks/useGif';
import type { Title } from '../utils/interfaces';

const TITLE = ['P', 'R', 'I', 'M', 'O'];
const FrontDoor = () => {
  const { gif, setGif } = useGif();
  const styles = {
    firstBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundPosition: 'center',
      backgroundImage: gif.isActive ? gif.url || '' : '',
      backgroundSize: 'cover',
    },

    titleBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    firstTypoStyle: {
      userSelect: 'none',
      fontSize: { xl: '7vw', lg: '10vw', md: '12vw', xs: '19vw' },
      margin: '0rem',
      color: gif.isActive ? gif.color || '' : 'black',
      '&:hover': gif.isActive
        ? { color: 'white' }
        : {
            backgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundSize: 'cover',
            backgroundImage: 'url(https://i.imgur.com/SLSIV5E.gif)',
          },
    },

    buttonStyle: {
      color: 'black',
      backgroundColor: 'white',
      fontSize: { xl: '0.8vw', lg: '1vw', md: '1.5vw', xs: '3vw' },
      m: '0.6rem',
      '&:hover': {
        color: 'black',
        backgroundColor: 'white',
      },
    },
  };

  return (
    <Box bgcolor="white" height="100vh" width="100vw" sx={styles.firstBox}>
      <Box sx={styles.titleBox}>
        {TITLE.map((letter, i) => {
          return (
            <Typography
              variant="h1"
              sx={styles.firstTypoStyle}
              key={i}
              onClick={() => setGif({ type: letter as Title, isActive: !gif.isActive, url: '' })}>
              {letter}
            </Typography>
          );
        })}
      </Box>
      <Box>
        <Link href="/home">
          <Button size="small" sx={styles.buttonStyle}>
            Home
          </Button>
        </Link>
        <Link href="/login">
          <Button size="small" sx={styles.buttonStyle}>
            Login
          </Button>
        </Link>
        <Link href="/about">
          <Button size="small" sx={styles.buttonStyle}>
            About
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FrontDoor;
