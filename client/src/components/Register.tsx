import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const Register = () => {
  const [eye, setEye] = useState(false);

  const style = {
    firstBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(90deg, rgba(184,216,190,1) 0%, rgba(232,244,234,1) 100%)',
      //   backgroundImage:
      //     'url(https://bafybeifzfde6j4if4c7unk5n46cp5g2obawcsquwkuf6ii5k5rzxlvurwu.ipfs.nftstorage.link//)',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      borderColor: 'white',
    },
    formBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'space-around',
      flexDirection: 'column',
      background: 'linear-gradient(-90deg, rgba(184,216,190,1) 0%, rgba(232,244,234,1) 100%)',
      width: { xs: '90%', md: '40vw', lg: '30vw', xl: '45vw' }, //Responsive
      borderRadius: '12px',
      height: 'fit-content',
      borderColor: 'divider',
      padding: 2,
      boxShadow: '3',
    },
    inputStyle: {
      m: '2vh',
      color: 'warning.main',
    },
    formControlStyle: {
      m: 1,
      width: '25vw',
    },
    filledInputStyle: {
      m: '2vh',
      color: 'warning.main',
    },
  };

  return (
    <Box sx={style.firstBox}>
      <Box sx={style.formBox}>
        <Typography variant="h1" color={'green'}>
          Register
        </Typography>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            {' '}
            First Name
          </InputLabel>
          <FilledInput sx={style.filledInputStyle} type="name" color="warning" />
        </FormControl>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            Last Name{' '}
          </InputLabel>
          <FilledInput sx={style.filledInputStyle} type="lastName" color="warning" />
        </FormControl>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            Email{' '}
          </InputLabel>
          <FilledInput sx={style.filledInputStyle} type="Email" color="warning" />
        </FormControl>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            Password
          </InputLabel>
          <FilledInput
            sx={{ m: '2vh' }}
            color="warning"
            type={eye ? 'password' : 'text'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setEye(!eye)} edge="end">
                  {eye ? <VisibilityOff color="success" /> : <Visibility color="success" />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            Country{' '}
          </InputLabel>
          <FilledInput sx={style.filledInputStyle} type="country" color="warning" />
        </FormControl>
        <FormControl sx={style.formControlStyle}>
          <InputLabel sx={style.inputStyle} color="warning">
            Phone{' '}
          </InputLabel>
          <FilledInput sx={style.filledInputStyle} type="phone" color="warning" />
        </FormControl>
        <Button variant="contained" color="warning" sx={{ color: 'white', backgroundColor: '#4c9054' }}>
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
