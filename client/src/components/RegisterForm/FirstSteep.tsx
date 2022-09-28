import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { validateForm } from '../../utils';
interface FirstStepProps {
  handleNext: () => void;
}

const FirstStep: FC<FirstStepProps> = ({ handleNext }) => {
  const [showError, setShowError] = React.useState<boolean>(true);
  const values = ['firstName', 'lastName', 'email', 'gender'];
  const {
    register,
    getValues,
    formState: { errors, isValid },
    setError,
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
          <FormControl error={!!errors.firstName} variant="standard">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input
              id="firstName"
              {...register('firstName', {
                required: 'Complete the field',
                minLength: {
                  value: 3,
                  message: 'Minimun length is 3',
                },
              })}
            />
            {errors.firstName && <FormHelperText>{errors?.firstName?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl error={!!errors.lastName} variant="standard">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              id="lastName"
              {...register('lastName', {
                required: 'Complete the field',
                minLength: {
                  value: 3,
                  message: 'Minimun length is 3',
                },
              })}
            />
            {errors.lastName && <FormHelperText>{errors?.lastName?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl error={!!errors.email} variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              type="email"
              id="email"
              {...register('email', {
                required: 'Complete the field',
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <FormHelperText> {errors?.email?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.gender} variant="standard">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              fullWidth
              variant="standard"
              id="gender"
              {...register('gender', {
                required: 'Select a gender',
              })}>
              <MenuItem value="man">Man</MenuItem>
              <MenuItem value="women">Women</MenuItem>
            </Select>
            {errors.gender && <FormHelperText>{errors?.gender?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>
        {/* <TextField
            variant="standard"
            color="warning"
            inputProps={{
              sx: { color: 'white' },
              ...{ ...register('firstName', { required: true, minLength: { value: 3, message: 'Min length is 3' } }) },
            }}
            InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
            onClick={e => {
              console.log(getValues());
            }}
            style={style.textStyle}
            fullWidth
            label="First Name"
            placeholder="Your first name"
          /> */}
        {/* <Grid item xs={12} sm={6}>
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
        </Grid> */}
      </Grid>
      {console.log(getValues())}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1, color: 'highlight.main' }}
          onClick={() =>
            isValid ? handleNext() : validateForm({ setError, setShowError, errors, showError, values })
          }>
          Next
        </Button>
      </Box>
    </>
  );
};

//disabled={true}

//Chekear valores del submit, si hya errores mostrarlos, si no, contionuo = (handleNext)

export default FirstStep;
