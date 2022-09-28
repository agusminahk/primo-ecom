import React, { FC, useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { useForm, useFormContext } from 'react-hook-form';

interface SecondStepProps {
  handleBack: () => void;
  handleNext: () => void;
}

//React hook form, formState.errors, estado del formulario. Manejar contextos

const SecondStep: FC<SecondStepProps> = ({ handleBack, handleNext }) => {
  //   const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext);
  //   const { city, date, phone, agreenemt } = formValues;

  const { register } = useFormContext();
  // const {
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  //   getValues,
  // } = useForm({
  //   defaultValues: {
  //     city: '',
  //     phone: '',
  //   },
  // });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={'standard'}
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
            color="warning"
            fullWidth
            label="City"
            placeholder="Enter your city"
            // value={city.value}
            // onClick={e => {
            //   console.log(getValues());
            // }}
            {...register('city', { required: true })}

            // // error={!!city.error}
            // // helperText={city.error}
            // // required={city.required}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={'standard'}
            inputProps={{ sx: { color: 'white' } }}
            InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
            color="warning"
            fullWidth
            label="Phone number"
            placeholder="i.e: xxx-xxx-xxxx"
            // onClick={e => {
            //   console.log(getValues());
            // }}
            {...register('phone', { required: true, minLength: { value: 10, message: 'min length is 10' } })}
            // error={!!phone.error}
            // helperText={phone.error}
            // required={phone.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, color: 'secondary' }}>
        <Button onClick={handleBack} variant="contained" sx={{ mt: 3, ml: 1, color: 'highlight.main' }}>
          Back
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1, color: 'highlight.main' }} onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default SecondStep;
