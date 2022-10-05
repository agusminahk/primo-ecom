import React from 'react';
import axios from 'axios';
import { TextField, Box, Button } from '@mui/material';
import Cookies from 'js-cookie';

const form = () => {
  const { NEXT_PUBLIC_BASE_URL: BASE_URL = '' } = process.env;
  const [form, setForm] = React.useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    withCredentials: true,
  };
  const onSubmit = () => {
    axios.post(`${BASE_URL}/auth/local`, form, config).then(({ data }) => console.log('LOGIN', data));
  };

  React.useEffect(() => {
    Cookies.get('primo')
      ? axios.get(`${BASE_URL}/auth/local/me`, { withCredentials: true }).then(({ data }) => console.log('ME', data))
      : console.log('cookie not found');
  }, []);

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
      <TextField id="email" label="email" name="email" value={form.email} onChange={handleChange} />
      <TextField id="password" name="password" label="password" value={form.password} onChange={handleChange} />
      <Button type="submit" onClick={() => onSubmit()}>
        Enviar
      </Button>
      <Button
        onClick={() => {
          axios.get(`${BASE_URL}/auth/local/logout`, { withCredentials: true });
        }}>
        logout
      </Button>
    </Box>
  );
};

export default form;
