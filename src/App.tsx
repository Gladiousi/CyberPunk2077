import { Button, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import MainPage from "./Container/Main/MainPage";

const theme = extendTheme({
  ...chakraTheme,
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="blue" bg="black">Пример кнопки Chakra UI</Button>
      <MainPage />
    </ChakraProvider>
  );
}

export default App
