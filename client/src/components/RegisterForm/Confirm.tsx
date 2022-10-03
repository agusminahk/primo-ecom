import React, { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';

interface ConfirmProp {
  handleNext: () => void;
  handleBack: () => void;
}

const Confirm: FC<ConfirmProp> = ({ handleNext, handleBack }) => {
  const {
    getValues,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = (data: any) => {};
  const value = getValues();

  return (
    <>
      <Grid container spacing={2} mt={'-28px'} mb={'-40px'}>
        <Grid item xs={12} sm={6}>
          <List disablePadding>
            <ListItem>
              <ListItemText
                primary="First Name"
                secondary={value.firstName}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Last Name"
                secondary={value.lastName}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Email Address"
                secondary={value.email}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Gender"
                secondary={value.gender}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="City"
                secondary={value.city}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="phone"
                secondary={value.phone}
                sx={{
                  '.MuiListItemText-secondary': { color: 'highlight.main' },
                  '.MuiListItemText-primary': { color: 'white' },
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      {console.log(handleSubmit(onSubmit))}
      {console.log('Confirm', value)}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1, mt: 3, ml: 1, color: 'highlight.main' }} onClick={handleBack} color="secondary">
          Back
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1, color: 'highlight.main' }} onClick={handleNext}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  );
};

export default Confirm;
