import { Box, Typography, Button } from '@mui/material';

import { useState } from 'react';

// import { gifs } from '../utils/home';

// import type { renderGifs } from '../utils/home';

const Home = () => {
  const [gif, setGif] = useState<{ type: string; boolean: boolean }>({ type: '', boolean: false });
  // renderGifs(gifs)
  //   const gifImages = () => {
  //      for (const key in gifs) {
  //    }
  //   }

  //   const gifImages = ({letter, url}:Gifs) => {
  //     return gif.type === letter && gif.boolean === true ? { backgroundImage: url } : 'nada';
  //   };

  // const ver = () => {
  //     for (const gif of gifs) {
  //   console.log(gifImages(gifs[gif][letter], gifs[gif][url]));
  //   console.log(gif, gifs2[gif]);

  //   };

  //   console.log(gifs3);

  //   gifs.for(() => {
  //     console.log(e);
  //   });

  //   console.log(gifImages('I', `url(https://wallpapercave.com/wp/wp2757844.gif)`));
  //   console.log(ver());
  //   ver();

  const styles = {
    firstBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      // ver(),

      // (gif.type === 'P' && gif.boolean === true && `url(https://wallpapercave.com/wp/wp2757844.gif)`) ||
      // (gif.type === 'M' && gif.boolean === true && 'url(https://wallpapercave.com/dwp2x/wp2757885.gif)') ||
      // (gif.type === 'I' && gif.boolean === true && 'url(https://wallpapercave.com/wp/wp2757902.gif)') ||
      // (gif.type === 'R' && gif.boolean === true && 'url(https://wallpapercave.com/wp/wp2730878.gif)') ||
      // (gif.type === 'O' && gif.boolean === true && 'url(https://wallpapercave.com/dwp2x/wp2757959.gif)'),

      // gifImages('P', `url(https://wallpapercave.com/wp/wp2757844.gif)`),

      backgroundSize: 'cover',
    },

    titleBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    firstTypoStyle: {
      userSelect: 'none',
      color:
        (gif.type === 'P' && gif.boolean === true && '#31b0cc') ||
        (gif.type === 'R' && gif.boolean === true && 'violet') ||
        (gif.type === 'I' && gif.boolean === true && 'white') ||
        (gif.type === 'M' && gif.boolean === true && 'pink') ||
        (gif.type === 'O' && gif.boolean === true && '#ff4d00'),
      '&:hover': (gif.boolean === true && { color: 'white' }) || {
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
      {/* <Box sx={styles.titleBox}>
        {title.map((letter, i) => (
          <Typography
            variant="h1"
            fontSize={250}
            margin="0px"
            sx={styles.firstTypoStyle}
            key={i}
            onClick={() => setGif({ type: letter, boolean: !gif.boolean })}>
            {letter}
          </Typography>
        ))}
      </Box> */}
      <Box>
        <Button sx={styles.buttonStyle}>Home</Button>
        <Button sx={styles.buttonStyle}>Login</Button>
        <Button sx={styles.buttonStyle}>About</Button>
      </Box>
    </Box>
  );
};

export default Home;
