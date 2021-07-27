import React from 'react';
import 'styles/globals.css';
import '@iconscout/unicons/css/thinline.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
);

export default MyApp
