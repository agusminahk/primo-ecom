import React, { FC, useEffect } from 'react';
import { GetStaticPropsResult, NextPage } from 'next';
import Login from '../../components/Login';
import { useRouter } from 'next/router';
import Home from '../home';

const LoginPage = () => {
  return <Login />;
};
export default LoginPage;
