
import {
  Box,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const EntryCP = () => {
  let variant =
    useBreakpointValue({
      base: "base",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      "2xl": "2xl",
    }) || "base";

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="90%"
        p={4}
        mx="auto"
        textAlign="center"
      >
        <Heading as="h1" size="xl">
          Найт-Сити изменит тебя навсегда!
        </Heading>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="90%"
        p={4}
        mx="auto"
        flexWrap="wrap"
        textAlign="center"
      >
        <Text>
          <Text as="span" color="rgba(82, 190, 220, 1)">
            Cyberpunk 2077
          </Text>{" "}
          — приключенческая ролевая игра, действие которой происходит в
          мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся
          выше всего. Ты играешь за V, наёмника в поисках устройства,
          позволяющего обрести бессмертие. Ты сможешь менять киберимпланты,
          навыки и стиль игры своего персонажа, исследуя открытый мир, где твои
          поступки влияют на ход сюжета и всё, что тебя окружает.
        </Text>
      </Box>
      <Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap='10'>
      <Box 






























      >
        <img src="/4.webp"/>
      </Box>
      <Box>
        <img src="/6.webp" />
      </Box>
      <Box>
        <img src="/5.webp" />
      </Box>
    </SimpleGrid>
      </Center>
    </>
  );
};

export default EntryCP;
