import { ChakraProvider, theme } from '@chakra-ui/react';
import MainPage from "./Container/MainPage";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App
