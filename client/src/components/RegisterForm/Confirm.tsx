import React, { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useForm, useFormContext } from 'react-hook-form';

interface ConfirmProp {
  handleNext: () => void;
  handleBack: () => void;
}

//Use Context hooks form

//Hnadle submit, on Submit

const Confirm: FC<ConfirmProp> = ({ handleNext, handleBack }) => {
  const { register, getValues, handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {};

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Gender" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="City" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="phone" secondary={'Not Provided'} sx={{ color: 'white' }} />
        </ListItem>
      </List>
      {console.log(handleSubmit(onSubmit))}
      {console.log('Confirm', getValues())}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1, mt: 3, ml: 1, color: 'highlight.main' }} onClick={handleBack} color="secondary">
          Back
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1, color: 'highlight.main' }} onClick={handleNext}>
          Confirm & Continue
        </Button>
      </Box>
    </>
    // </form>
  );
};

//Consologuear en confirm el handleSbumit(onsUBMIT) --> Data, para ver si se guardaron los datos

export default Confirm;
