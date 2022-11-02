import Cookies from 'js-cookie';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { loginRequest } from '../../../state/userSlice';
import { axiosInstance } from '../../clients/axios';
import { useAppDispatch, useAppSelector } from '../redux/useRedux';

export const authGuard = () => (Component: React.ComponentType) => {
  const WrappedComponent: React.FunctionComponent = function (props) {
    const dispatch = useAppDispatch();
    const userExist = useAppSelector(state => state.user.userInfo._id);
    const router = useRouter();
    // console.log({ userExist });

    useEffect(() => {
      if (Cookies.get('primo')) {
        // if (!userExist) {
        axiosInstance.get('/auth/local/me').then(({ data: { user } }) => {
          console.log(user);
          if (user && !userExist) {
            dispatch(loginRequest(user));
          }
        });
        // }
      }
      // if (userExist) router.push('/home');
    }, []);

    // if (userExist) {
    //   return null;
    // }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
