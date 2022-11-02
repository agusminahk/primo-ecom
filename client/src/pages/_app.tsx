import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { theme } from '../theme';
import 'react-multi-carousel/lib/styles.css';
import '../styles/cardAsDots.css';
import { makeStore } from '../state/store';
import { axiosInstance } from '../core/clients/axios';
import { useAppDispatch } from '../core/hooks/redux/useRedux';
import { loginRequest } from '../state/userSlice';
import Cookies from 'js-cookie';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Primo Store</title>
      </Head>
      <Provider store={makeStore}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
