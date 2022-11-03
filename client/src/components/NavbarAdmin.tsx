import React, { FC } from 'react';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';

export const NavbarAdmin: FC = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '15%',
        display: 'flex',
        borderRight: '1px dashed',
        borderColor: 'highlight.main',
      }}>
      <List sx={{ height: 'auto', width: '100%', bgColor: 'pink' }}>
        <ListItem>
          <ListSubheader sx={{ textDecoration: 'underline dotted', textDecorationColor: 'highlight.main' }}>
            ADMIN
          </ListSubheader>
        </ListItem>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
      </List>
    </Box>
  );
};
