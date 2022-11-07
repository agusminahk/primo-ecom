import { Box, Typography, Input, Button } from '@mui/material';
import { NextPage } from 'next';
import React, { useState, useRef } from 'react';
import ProductUpload from '../../components/Admin/Product/ProductUpload';

const AdminPage: NextPage = () => {
  const [link, setLink] = useState<string>();
  const [submit, setSubmit] = useState<string>();

  return (
    <Box sx={{ margin: '5%', display: 'flex', flexDirection: 'column' }}>
      <Box>
        <Input
          onChange={e => {
            setLink(e.target.value);
          }}></Input>
        <Button
          onClick={() => {
            setSubmit(link);
            console.log(submit);
          }}>
          Submit
        </Button>
      </Box>
      <Box sx={{ mt: '3%' }}>Aqui va a aparecer la metadata</Box>
    </Box>
  );
};
export default AdminPage;
