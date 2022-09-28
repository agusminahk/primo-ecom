import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, useFormContext } from 'react-hook-form';

interface FirstStepProps {
  handleNext: () => void;
}

const FirstStep: FC<FirstStepProps> = ({ handleNext }) => {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useFormContext();

  const style = {
    textStyle: {
      color: 'highlight.main',
    },
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            color="warning"
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
            onClick={e => {
              console.log(getValues());
            }}
            style={style.textStyle}
            fullWidth
            label="First Name"
            {...register('firstName', { required: 'Required' })}
            placeholder="Your first name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            color="warning"
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
            sx={style.textStyle}
            fullWidth
            label="Last Name"
            {...register('lastName', {
              required: true,
              minLength: { value: 3, message: 'Min length is 3' },
              maxLength: { value: 30, message: 'Max length is 20' },
            })}
            placeholder="Your last name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            color="warning"
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                color: 'highlight.main',
                '&.Mui-focused': { color: 'highlight.main' },
              },
            }}
            fullWidth
            label="Email"
            {...register('email', { required: 'Email Adress is required' })}
            placeholder="Your email address"
            type="email"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            color="warning"
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{
              sx: {
                color: 'highlight.main',
                '&.Mui-focused': { color: 'highlight.main' },
              },
            }}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            {...register('gender')}>
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
      </Grid>
      {console.log(getValues())}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }}>
        <Button
          // disabled={isValid}
          variant="contained"
          sx={{ mt: 3, ml: 1, color: 'highlight.main' }}
          onClick={() => {
            console.log('Error', errors);
            console.log('Valid', isValid);
            // {
            //   isValid && handleNext();
            // }
            handleNext();
          }}>
          Next
        </Button>
      </Box>
    </>
  );
};

//disabled={true}

//Chekear valores del submit, si hya errores mostrarlos, si no, contionuo = (handleNext)

export default FirstStep;
