import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';

export const theme = extendTheme({
  fonts: {
    heading: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    body: `'SF Pro', 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  colors,
  styles: {
    global: {
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
        color: 'whiteAlpha.500',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '400',
        color: 'white.500',
      },
      sizes: {
        lg: {
          fontSize: 'lg',
        },
        md: {
          fontSize: 'md',
        },
        sm: {
          fontSize: 'sm',
        },
      },
    },
  },
});
