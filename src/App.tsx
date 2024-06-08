import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Portfolio } from './Portfolio';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Portfolio />
    </ChakraProvider>
  );
}

export default App;
