<<<<<<< HEAD
import React from 'react';
import Login from '../../components/Login';
=======
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
>>>>>>> 1cc68a0 (input types and clear imports)

<<<<<<< HEAD
const index = () => {
  return <Login />;
=======
const Login = () => {
  const style = {
    firstBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(90deg, rgba(184,216,190,1) 0%, rgba(232,244,234,1) 100%)',
      borderColor: 'white',
    },
    formBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'space-around',
      flexDirection: 'column',
      background: 'linear-gradient(-90deg, rgba(184,216,190,1) 0%, rgba(232,244,234,1) 100%)',
      width: { xs: '90%', md: '40vw', lg: '30vw', xl: '35vw' }, //Responsive
      borderRadius: '12px',
      height: 'fit-content',
      borderColor: 'divider',
    },
  };

  return (
    <Box className="first Box" sx={style.firstBox}>
      <Box className="fromBox" sx={style.formBox}>
        <Typography variant="h2" color={'#ff4d00'}>
          Login
        </Typography>
        <TextField type="email" label="email" sx={{ m: '2vh' }} color="warning" variant="filled" />
        <TextField type="password" label="Contraseña" sx={{ m: '2vh' }} color="warning" variant="filled" />
        <Button variant="contained" color="warning" sx={{ color: 'white', backgroundColor: '#4c9054' }}>
          Sing in
        </Button>
      </Box>
    </Box>
  );
>>>>>>> 9d0fcef (Maquetado login)
};

export default index;
