import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';

import { Box } from '@mui/system';
import { useState } from 'react';

const Login = () => {
  const [eye, setEye] = useState(false);

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
        <Typography variant="h2" color="#ff4d00">
          Login
        </Typography>
        <TextField type="email" label="email" sx={{ m: '2vh' }} color="warning" variant="filled" />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" color="warning">
          <InputLabel variant="filled" color="warning" sx={{ m: '2vh' }}>
            Password
          </InputLabel>
          <FilledInput
            sx={{ m: '2vh' }}
            color="warning"
            type={eye ? 'password' : 'text'}
            endAdornment={
              <InputAdornment position="end" variant="filled" color="warning">
                <IconButton onClick={() => setEye(!eye)} edge="end">
                  {eye ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" color="warning" sx={{ color: 'white', backgroundColor: '#4c9054' }}>
          Sing in
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
