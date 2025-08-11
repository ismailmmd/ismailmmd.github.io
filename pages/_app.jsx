import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';
import theme from '../utils/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable}`}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component
          {...pageProps} /* eslint-disable-line react/jsx-props-no-spreading */
        />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </ChakraProvider>
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
