import { createSystem, defaultConfig } from '@chakra-ui/react';
import colors from './colors';

export default createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            "'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        body: {
          value:
            "'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
      },
      colors: {
        black: colors.black,
        white: colors.white,
      },
    },
  },
  globalCss: {
    'html, body': {
      color: 'whiteAlpha.700',
      bg: 'black.500',
      fontSize: 'md',
    },
    '.js-focus-visible :focus:not([data-focus-visible-added])': {
      outline: 'none',
      boxShadow: 'none',
    },
    a: {
      color: 'whiteAlpha.800',
    },
  },
});
