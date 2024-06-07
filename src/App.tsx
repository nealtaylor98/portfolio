import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Portfolio } from './Portfolio';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Portfolio />
    </ChakraProvider>
  );
}

export default App;
