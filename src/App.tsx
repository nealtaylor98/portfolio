import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Portfolio } from './Portfolio';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Portfolio />
    </ChakraProvider>
  );
}

export default App;
