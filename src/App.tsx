import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import MainPage from "./Container/MainPage";

const theme = extendTheme({
  ...chakraTheme,
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App
