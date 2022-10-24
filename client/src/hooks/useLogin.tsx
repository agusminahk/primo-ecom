import { EventType, SubmitHandler, useForm } from 'react-hook-form';
import { loginRequest } from '../state/userSlice';
import { LoginFields } from '../state/userSlice';
import { useAppDispatch } from '../core/hooks/redux/useRedux';

const EMAIL_REGUEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isValid, isSubmitSuccessful },
    handleSubmit,
  } = useForm<LoginFields>({ mode: 'onBlur' });

  const emailRegister = register('email', {
    required: 'Please enter your email address',
    pattern: {
      value: EMAIL_REGUEX,
      message: 'Invalid email address',
    },
  });

  const passwRegister = register('password', {
    required: 'Please enter your password',
    minLength: {
      value: 8,
      message: 'Password need to has 8 signs',
    },
  });

  const handleLogin: SubmitHandler<LoginFields> = async (data, e) => {
    e?.preventDefault();
    if (isValid) await dispatch(loginRequest(data));
  };

  return { handleLogin: handleSubmit(handleLogin), emailRegister, passwRegister, errors };
};

export default useLogin;
