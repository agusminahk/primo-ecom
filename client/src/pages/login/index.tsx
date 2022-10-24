import React, { FC, useEffect } from 'react';
import { NextPage } from 'next';
import Login from '../../components/Login';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../core/hooks/redux/useRedux';
import Home from '../home';
import { authGuard } from '../../core/hooks/authGuard/authGuard';

const LoginPage = () => {
  return <Login />;
};

export default authGuard()(LoginPage);
