import { Button, TextField, Typography } from '@mui/material';
// import { borders } from '@mui/system';
import { Box } from '@mui/system';

const Login = () => {
  const style = {
    firstBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black ',
      background:
        'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 51%, rgba(255, 255, 255, 1) 100%)',
      // borderRadius: '50px',
      borderColor: 'black',
    },
    formBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '50vw',
      borderRadius: '12px',
      height: 'fit-content',
      borderColor: 'black',
    },
  };

  return (
    <Box className="first Box" sx={style.firstBox}>
      <Box className="fromBox" sx={style.formBox}>
        <Typography variant="h2">Login</Typography>
        <TextField label="email" sx={{ m: '2vh' }} variant="filled" />
        <TextField label="Contraseña" sx={{ m: '2vh' }} variant="filled" />
        <Button sx={{ color: 'black' }}>Sing in</Button>
      </Box>
    </Box>
  );
};

export default Login;
