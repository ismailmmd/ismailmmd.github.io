import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import PropTypes from 'prop-types';
import system from '../utils/theme';
import Header from '../components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider value={system}>
      <Header />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
};
