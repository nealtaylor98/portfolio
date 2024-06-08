import { background, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'radial-gradient(#eee, #e2e2e2)',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
