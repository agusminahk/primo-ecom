import { Box, Typography, Button } from '@mui/material';
import useGif from '../hooks/useGif';
import type { Title } from '../utils/interfaces';

const TITLE = ['P', 'R', 'I', 'M', 'O'];
const Home = () => {
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
      backgroundColor: 'white',
    },

    titleBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    firstTypoStyle: {
      userSelect: 'none',
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
      m: '10px',
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
              fontSize="15vh"
              margin="0px"
              sx={styles.firstTypoStyle}
              key={i}
              onClick={() => setGif({ type: letter as Title, isActive: !gif.isActive, url: '' })}>
              {letter}
            </Typography>
          );
        })}
      </Box>
      <Box>
        <Button sx={styles.buttonStyle}>Home</Button>
        <Button sx={styles.buttonStyle}>Login</Button>
        <Button sx={styles.buttonStyle}>About</Button>
      </Box>
    </Box>
  );
};

export default Home;
