import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from '../redux/useRedux';

export const authGuard = () => (Component: React.ComponentType) => {
  const WrappedComponent: React.FunctionComponent = function (props) {
    const userExist = useAppSelector(state => state.user);
    const router = useRouter();
    console.log(userExist);
    // useEffect(() => {
    //   if (userExist) router.push('/home');
    // }, []);

    // if (userExist) {
    //   return null;
    // }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
