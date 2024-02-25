import { Box, useBreakpointValue, Text, Image } from "@chakra-ui/react"

export const Footer = () => {
    const ImageMargin: { [key: string]: string } = {
        base: '10dvh',
        sm: '1dvh',
        md: '3dvh',
        lg: '6dvh',
        xl: '3xl',
        '2xl': '4xl',
    };
    const ImageWigth: { [key: string]: string } = {
        base: '10dvh',
        sm: '15dvh',
        md: '15dvh',
        lg: '15dvh',
        xl: '3xl',
        '2xl': '4xl',
    };
    const ImageHigth: { [key: string]: string } = {
        base: '10dvh',
        sm: '5dvh',
        md: '5dvh',
        lg: '7dvh',
        xl: '3xl',
        '2xl': '4xl',
    };
    let variant: string | undefined = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });
    if (variant === undefined) {
        variant = "base";
    }
    return (
        <>
            <Box
                display="flex"
                position="absolute"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '25dvw'}
                h="15dvh"
                bgColor='white'
                justifyContent={variant === 'base' || variant === 'sm' ? 'center' : 'left'}
            >
                <Image
                    src="/14.png"
                    w={ImageWigth[variant as keyof typeof ImageWigth]}
                    h={ImageHigth[variant as keyof typeof ImageHigth]}
                    marginLeft={ImageMargin[variant as keyof typeof ImageMargin]}
                    marginTop="6"
                />
               <Box
                display="flex"
                position="absolute"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '15dvw'}
                h="15dvh"
                bgColor='White'
                marginTop={variant === 'base' || variant === 'sm' ? '10dvh' : '0dvh'}
                marginLeft={variant === 'base' || variant === 'sm' ? '0dvh' : '20dvh'}
                justifyContent={variant === 'base' || variant === 'sm' ? 'center' : 'left'}
               >
               <Image
                    src="/15.webp"
                    w={ImageWigth[variant as keyof typeof ImageWigth]}
                    h={ImageHigth[variant as keyof typeof ImageHigth]}
                    marginLeft={ImageMargin[variant as keyof typeof ImageMargin]}
                    marginTop="6"
                />
               </Box>
            </Box>
            <Box
                display="flex"
                position="absolute"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '50dvw'}
                h="15dvh"
                bgColor='white'
                marginTop={variant === 'base' || variant === 'sm' ? '20dvh' : '0dvh'}
                marginLeft={variant === 'base' || variant === 'sm' ? '0dvw' : '50dvw'}
                textAlign="center"
            >
                <Text
                    marginTop="5dvh"
                    fontSize="1.3rem"
                    marginLeft={variant === 'base' || variant === 'sm' ? '5dvw' : '10dvw'}
                    fontWeight="bold"
                >
                    Лицензия
                </Text>
                <Text
                    marginTop="5.2dvh"
                    fontSize="1.2rem"
                    marginLeft={variant === 'base' || variant === 'sm' ? '8dvw' : '3dvw'}
                    fontWeight="bold"
                >
                    Политика конфиденциальности
                </Text>
            </Box>
            <Box
                position="absolute"
                w="100dvw"
                h="4dvh"
                bgColor='Black'
                marginTop={variant === 'base' || variant === 'sm' ? '30dvh' : '13dvh'}
                textAlign="center"
            >
                <Text
                    color="white"
                    marginTop="5"
                    fontSize="1rem"
                >
                    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
                </Text>
            </Box>
        </>
    )
}