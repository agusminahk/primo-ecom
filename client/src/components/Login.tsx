import React, { FC, useState } from 'react';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
  Input,
  Divider,
  Box,
  FormHelperText,
  CircularProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleButton from 'react-google-button';
import Link from 'next/link';

import useLogin from '../hooks/useLogin';
import { useAppSelector } from '../core/hooks/redux/useRedux';

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
    width: { xl: '50%', lg: '50%', md: '70%', sm: '90%', xs: '90%' },
    display: 'flex',
    flexDirection: { xl: 'row', lg: 'row', md: 'column', xs: 'column' },
    justifyContent: 'space-evenly',
    alignItems: 'center',
    mb: '5%',
  },
  formBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: { xl: '40%', lg: '40%', md: '55%', sm: '60%', xs: '90%' },
  },
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
    width: '0.1rem',
    color: 'white',
    '& .MuiDivider-wrapper': {
      alignSelf: 'center',
    },
    '&::before, &::after': { border: '0.5px solid', borderRadius: '20px', height: '8vh' },
  },
  boxDivider: {
    justifyContent: 'center',
    alignItems: 'center',
    display: { xs: 'none', lg: 'flex' },
  },
  divider1: {
    color: 'white',
    alignItems: 'center',
    height: '3px',
    mx: '100%',
    '&::before, &::after': {
      border: '0.5px solid',
      borderRadius: '20px',
      mx: 1,
      borderRigthWidth: '5rem',
      borderLeftWidth: '5rem',
    },
    '& .MuiDivider-wrapper': {
      mt: '4px',
    },
  },
  boxDivider1: { justifyContent: 'center', alignItems: 'center', display: { xs: 'flex', lg: 'none' }, my: 5 },
  SignInBtn: {
    color: 'dark.main',
    backgroundColor: 'neutral.main',
    width: '90%',
    borderRadius: '7rem',
    '&:hover': { color: 'dark.main', backgroundColor: 'warning.main' },
  },
  googleBtn: {
    color: 'dark.main',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    boxShadow: '0 0 0 0 ',
  },
  spinnerStyle: {
    position: 'absolute',
    right: 30,
    alignSelf: 'center',
    display: 'initial',
  },
};

const Login: FC = () => {
  const userState = useAppSelector(state => state.user);
  const { handleSubmit, handleLogin, emailRegister, passwRegister, errors } = useLogin();
  const [eye, setEye] = useState(true);

  return (
    <Box className="first Box" sx={style.firstBox}>
      <Box sx={style.titleBox}>
        <Typography variant="h1" fontSize="4rem" m="1vh">
          LOGIN
        </Typography>
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
        <Box component="form" sx={style.formBox} onSubmit={handleSubmit(handleLogin)}>
          <FormControl
            size="medium"
            color="warning"
            variant="standard"
            sx={style.eachForm}
            error={Boolean(errors.email)}>
            <InputLabel sx={style.inputLabel}>Email</InputLabel>
            <Input sx={style.input} color="warning" type="email" {...emailRegister} />
            {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
          </FormControl>
          <FormControl
            size="medium"
            color="warning"
            variant="standard"
            sx={style.eachForm}
            error={Boolean(errors.password)}>
            <InputLabel sx={style.inputLabel}>Password</InputLabel>
            <Input
              sx={style.input}
              color="warning"
              type={eye ? 'password' : 'text'}
              {...passwRegister}
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
            {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
          </FormControl>
          <Button
            endIcon={userState.isLoading && <CircularProgress size="1.3rem" sx={style.spinnerStyle} />}
            type="submit"
            variant="contained"
            sx={style.SignInBtn}>
            Sign in
          </Button>
        </Box>
        <Box sx={style.boxDivider}>
          <Divider sx={style.divider} orientation="vertical" flexItem>
            or
          </Divider>
        </Box>
        <Box sx={style.boxDivider1}>
          <Divider sx={style.divider1} component="li">
            or
          </Divider>
        </Box>
        <Box sx={style.formBox}>
          <GoogleButton type="dark" style={style.googleBtn}>
            SIGN IN WITH GOOGLE
          </GoogleButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
