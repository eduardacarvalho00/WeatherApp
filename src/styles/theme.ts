import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#212121',
      800: '#2B2B2B',
      700: '#181B23',
      600: '#1F2029',
      400: '#797D9A', 
      300: '#9699B0', 
      200: '#B3B5C6', 
      100: '#D1D2DC', 
      50: '#EEEEF2', 
    }, 
    red: {
      800: '#681313',
    },
    green: {
      300: '#B6E388',
    },
  },
  fonts: {
    heading: 'Mulish',
    body: 'Mulish',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.700',
        color: 'gray.50',
      },
    },
  },
});
