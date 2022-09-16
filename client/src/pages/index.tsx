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
      color: gif.isActive ? gif.color || '' : '',
      '&:hover': gif.isActive
        ? { color: 'white' }
        : {
            backgroundClip: 'text',
            textFillColor: 'transparent',
            backgroundSize: 'cover',
            backgroundImage:
              'url(https://images-ext-1.discordapp.net/external/zeGGQKcCagQ1dmUQm3wUJxNgF6_P7O3SizWcRKTBORA/https/i.pinimg.com/originals/4a/3b/ca/4a3bca43c434135534bbb3a734ac669e.gif?width=498&height=498)',
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
              fontSize={250}
              margin="0px"
              sx={styles.firstTypoStyle}
              key={i}
              onClick={() => setGif({ ...gif, type: letter as Title, isActive: !gif.isActive })}>
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
