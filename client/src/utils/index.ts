import type { Gifs } from './interfaces';
import React from 'react';
import { UseFormSetError, FieldValues, FieldErrorsImpl } from 'react-hook-form';

export const gifs: Gifs[] = [
  {
    letter: `P`,
    url: `url(https://i.imgur.com/mNMvjDG.gif)`,
  },
  {
    letter: `R`,
    url: `url(https://i.imgur.com/ZNsdH1R.gif)`,
  },
  {
    letter: `I`,
    url: `url(https://i.imgur.com/0JVXKUH.gif)`,
  },
  {
    letter: `M`,
    url: `url(https://i.imgur.com/AL5iMqj.gif)`,
  },
  {
    letter: `O`,
    url: `url(https://i.imgur.com/NC4dbuk.gif)`,
  },
];

interface ValidateForm {
  setError: UseFormSetError<FieldValues>;
  values: string[];
  showError: boolean;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  errors: FieldErrorsImpl;
}

export const validateForm = (args: ValidateForm) => {
  const { setError, setShowError, values, showError, errors } = args;
  if (showError) {
    values.forEach((field: string) =>
      setError(field, { type: 'focus', message: 'Complete the field' }, { shouldFocus: true }),
    );
    return setShowError(false);
  }

  const changerError = (field: string) => {
    !!errors[`${field}`] && setError(field, { type: 'focus', message: 'Complete the field' }, { shouldFocus: true });
  };

  values.forEach(field => changerError(field));
};
