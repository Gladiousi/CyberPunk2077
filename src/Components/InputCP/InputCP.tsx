
import {
  Box,
  Text,
  Image,
  Input,
  SimpleGrid,
  Checkbox,
  CheckboxGroup,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const ImageWigth: { [key: string]: string } = {
  base: 'sm',
  sm: '40dvw',
  md: '30dvw',
  lg: 'lg',
  xl: 'lg',
  '2xl': '4xl',
};

export const PizdeCP = () => {
  const variant = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' }) || "base";

  return (
    <>
      <Box>
        <Image src="/8.webp" w="100%" />
      </Box>
      <Box bgColor="black" w="100vw" h="100vh" px={{ base: "5%", md: "10%" }}>
        <Box>
          <Box display="flex" alignContent="center">
            <Box
              display="flex"
              alignItems="center"
              flexDir={{ base: "column", md: "row-reverse" }}
              gap="20px"
            >
              <Text fontSize={{ base: "2rem", md: "4rem" }} color="white">
                Играй и выигрывай!
              </Text>
              <Image
                src="/14.png"
                w={variant === 'base' || variant === 'sm' ? '10%' : '20%'}
              />
            </Box>
          </Box>
          <Box color="white" w="100%" py="10px" gap="20px">
            <Text p="4px">
              Играй в{" "}
              <Text as="span" color="rgba(82, 190, 220, 1)">
                Cyberpunk 2077
              </Text>{" "}
              и получи возможность выиграть консоль{" "}
              <Text as="span" color="rgba(82, 190, 220, 1)">
                Xbox Series X
              </Text>{" "}
              или{" "}
              <Text as="span" color="rgba(82, 190, 220, 1)">
                Sony PlayStation 5!
              </Text>{" "}
              Заполни форму ниже и приложи скриншот о покупке игры. Итоги
              розыгрыша будут подведены 1 февраля. Удачи!
            </Text>
          </Box>
        </Box>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          w="100%"
          h={{ base: "60vh", md: "40vh" }}
          gap={4}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box display="flex" gap={4} flexDirection="column" w="100%">
              <Input
                placeholder="Как тебя зовут?"
                color="white"
                h="50px"
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
              />
              <Input
                placeholder="Твой e-mail"
                color="white"
                h="50px"
                border="none"
                borderBottom="1px solid white"
                borderRadius="none"
              />
              <Button bgColor="yellow" borderRadius="0" w="100%">
                Отправить
              </Button>
              <CheckboxGroup colorScheme="yellow">
                <Checkbox color="white">
                  Согласен на обработку персональных данных
                </Checkbox>
              </CheckboxGroup>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center" bgColor='black'>
            <Image src="/7.webp" w={ImageWigth[variant as keyof typeof ImageWigth]}/>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};