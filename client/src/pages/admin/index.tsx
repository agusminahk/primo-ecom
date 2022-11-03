import { NextPage } from 'next';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { NavbarAdmin } from '../../components/NavbarAdmin';
import { Input } from '@mui/material';

const Admin: NextPage = () => {
  const [blob, setBlob] = useState<string>();

  const [images, setImages] = useState<string[]>([]);
  const [array, setArray] = useState([]);

  //REFACTORIZAR Y TYPES!!!!!!!!!!!!!!!!!!!!!

  // LA PUTA QUE TE <3 PARIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

  // const handleBase64TeOdio = image => {
  //   return new Promise(() => {});
  // };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
      }}>
      <NavbarAdmin />
      <Box>
        Hola soy el admiin{' '}
        <Input
          type="file"
          id="fileInput"
          inputProps={{
            multiple: true,
            onChange: e => {
              const files = (e.target as HTMLInputElement).files;

              const array = [];
            },
          }}></Input>
      </Box>
    </Box>
  );
};
export default Admin;
