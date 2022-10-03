import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { validateForm } from '../../utils';
import { useFormContext } from 'react-hook-form';
import { FormControl, Input, InputLabel } from '@mui/material';

interface SecondStepProps {
  handleBack: () => void;
  handleNext: () => void;
}

const SecondStep: FC<SecondStepProps> = ({ handleBack, handleNext }) => {
  const [showError, setShowError] = React.useState<boolean>(true);
  const values = ['city', 'phone'];

  const { register } = useFormContext();
  const {
    watch,
    formState: { errors, isValid },
    setError,
    getValues,
  } = useFormContext();
  console.log(watch());

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl error={!!errors.city} variant="standard">
            <InputLabel htmlFor="city" sx={{ color: 'highlight.main' }}>
              City
            </InputLabel>
            <Input
              inputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
              fullWidth
              placeholder="Enter your City"
              id="city"
              {...register('city', {
                required: 'Complete the field',

                minLength: {
                  value: 3,
                  message: 'Minimun length is 3',
                },
              })}
              onClick={e => {
                console.log(getValues());
              }}
            />
            {errors.city && <FormHelperText>{errors?.city?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl error={!!errors.phone} variant="standard">
            <InputLabel htmlFor="city" sx={{ color: 'highlight.main' }}>
              Phone
            </InputLabel>
            <Input
              inputProps={{ sx: { color: 'white' } }}
              InputLabelProps={{ sx: { color: 'highlight.main', '&.Mui-focused': { color: 'highlight.main' } } }}
              fullWidth
              placeholder="i.e: xxx-xxx-xxxx"
              id="phone"
              {...register('phone', {
                required: 'Complete the field',
                minLength: { value: 10, message: 'min length is 10' },
              })}
              onClick={e => {
                console.log(getValues());
              }}
            />
            {errors.phone && <FormHelperText>{errors?.phone?.message as string}</FormHelperText>}
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, color: 'secondary' }}>
        <Button onClick={handleBack} variant="contained" sx={{ mt: 3, ml: 1, color: 'highlight.main' }}>
          Back
        </Button>
        {console.log('Second', getValues())}
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

export default SecondStep;
