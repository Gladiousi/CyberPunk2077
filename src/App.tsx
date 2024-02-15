import { ChakraProvider } from '@chakra-ui/react';
import MainPage from "./Container/MainPage";
import theme from './theme/Theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
    // TESt
  );
}

export default App;