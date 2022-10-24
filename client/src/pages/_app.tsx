import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
// import { store } from '../state/store';
import { theme } from '../theme';
import 'react-multi-carousel/lib/styles.css';
import '../styles/cardAsDots.css';
import { wrapper } from '../state/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Primo Store</title>
      </Head>
      {/* <Provider store={store}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </Provider> */}
    </>
  );
};

export default wrapper.withRedux(App);
