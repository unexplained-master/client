import React from 'react';
import 'styles/globals.css';
import '@iconscout/unicons/css/thinline.css';
import type { AppProps } from 'next/app';
import {EnvironmentProvider} from "contexts/EnvironmentContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <EnvironmentProvider>
      <Component {...pageProps} />
    </EnvironmentProvider>
);

export default MyApp
