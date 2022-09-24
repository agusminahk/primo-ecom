import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
  Input,
  Divider,
  Box,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button';
import Link from 'next/link';
import React, { FC, useMemo, useState } from 'react';

const Login: FC = () => {
  const [eye, setEye] = useState(true);

  type EachPosition = 'vertical' | 'horizontal';

  interface Positions {
    dividerPosition: any;
    setDividerPosition: () => any;
  }

  const [dividerPosition, setDividerPosition] = useState<EachPosition>('vertical');

  const style = {
    firstBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'primary.main',
      backgroundPosition: 'cover',
      flexDirection: 'column',
    },
    secondBox: {
      width: '50%',
      maxHeight: '30%',
      display: 'flex',
      flexDirection: { xl: 'row', lg: 'row', md: 'column', xs: 'column' },
      justifyContent: 'space-evenly',
      alignItems: 'center',
      mb: '5%',
    },
    formBox: { display: 'flex', alignItems: 'center', flexDirection: 'column', width: '35%' },
    titleBox: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'column',
      color: 'neutral.main',
      width: '100%',
      mb: '1.5vh',
    },
    eachForm: {
      my: '3vh',
      width: '100%',
    },
    inputLabel: {
      color: 'highlight.main',
    },
    input: {
      color: 'white',
      '&multilineColor': { color: 'white' },
    },
    divider: {
      m: '2vw',
      width: '0.1rem',
      color: 'white',
      alignItems: 'center',
      my: '0px',
      display: { xs: 'none', lg: 'flex' },
      '&::before': { backgroundColor: 'white', height: '8vh' },
      '&::after': { backgroundColor: 'white', height: '8vh' },
    },
    divider1: {
      // m: '2vw',
      // width: '100%',
      // color: 'white',
      // alignItems: 'center',
      // my: '0px',
      // '&::before, &::after': {
      // borderColor: 'red',
      // },
      display: { xs: 'flex', lg: 'none' },
      // '&::before': { backgroundColor: 'red', heigth: '0.1rem', width: 1 },
      // '&::after': { backgroundColor: 'red', height: '0.1rem', width: 1 },
    },
    SignInBtn: {
      color: 'black',
      backgroundColor: 'neutral.main',
      width: '90%',
      borderRadius: '7rem',
      '&:hover': { color: 'black', backgroundColor: 'warning.main' },
    },
    googleBtn: {
      color: 'white',
      // backgroundColor: 'black',
      width: '100%',
      height: '30%',
      borderRadius: 0,
      boxShadow: '0 0 0 0 ',
    },
  };

  // const width = useMemo(() => {
  //   if (screen.width >= 768) return 'vertical';
  //   return 'horizontal';
  // }, [screen.width]);
  // console.log(screen.width);

  return (
    <Box className="first Box" sx={style.firstBox}>
      <Box sx={style.titleBox}>
        <Typography variant="h1" fontSize="4rem" m="1vh">
          LOGIN
        </Typography>
        <Divider>____________ . ____________</Divider>
        <Box display="flex">
          <Typography variant="h6" fontSize="0.8rem" mr="0.3rem">
            Don't have an account yet?
          </Typography>
          <Link href="/signup">
            <Typography variant="h6" sx={{ color: 'highlight.main', cursor: 'pointer' }}>
              Sign up then...
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box className="fromBox" sx={style.secondBox}>
        <Box sx={style.formBox}>
          <FormControl size="medium" color="warning" variant="standard" sx={style.eachForm}>
            <InputLabel sx={style.inputLabel}>Email</InputLabel>
            <Input sx={style.input} color="warning" type="email" />
          </FormControl>
          <FormControl size="medium" color="warning" variant="standard" sx={style.eachForm}>
            <InputLabel sx={style.inputLabel}>Password</InputLabel>
            <Input
              sx={style.input}
              color="warning"
              type={eye ? 'password' : 'text'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setEye(!eye)} edge="end">
                    {eye ? (
                      <VisibilityOff fontSize="small" sx={{ color: 'neutral.main' }} />
                    ) : (
                      <Visibility fontSize="small" sx={{ color: 'warning.main' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" sx={style.SignInBtn}>
            Sign in
          </Button>
        </Box>

        {/* <Box sx={{ width: { xl: '5%', lg: '5%', md: '100%', xs: '100%' }, display: 'flex', justifyContent: 'center' }}>
          <Divider sx={style.divider} orientation="vertical" flexItem>
            o
          </Divider>
        </Box> */}
        <Box sx={style.formBox}>
          <Divider sx={style.divider1}>o</Divider>
          <GoogleLogin
            icon={false}
            render={renderProps => (
              <GoogleButton type="dark" style={style.googleBtn}>
                Sign in with Google
              </GoogleButton>
            )}
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
