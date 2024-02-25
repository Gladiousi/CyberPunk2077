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
    const textSizes = {
        base: 'md',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'lg',
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
                marginTop={variant === 'base' || variant === 'sm' ? '3dvh' : '3dvh'}
                bgColor='white'
                justifyContent={variant === 'base' || variant === 'sm' ? 'center' : 'left'}
                alignItems="center"
                
            >
                <Image
                    src="/14.png"
                    w={ImageWigth[variant as keyof typeof ImageWigth]}
                    h={ImageHigth[variant as keyof typeof ImageHigth]}
                    marginLeft={ImageMargin[variant as keyof typeof ImageMargin]}
                />
               <Box
                display="flex"
                position="absolute"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '15dvw'}
                bgColor='White'
                marginTop={variant === 'base' || variant === 'sm' ? '20dvh' : '0dvh'}
                marginLeft={variant === 'base' || variant === 'sm' ? '0dvh' : '20dvh'}
                justifyContent={variant === 'base' || variant === 'sm' ? 'center' : 'center'}
                alignItems="center"
               >
               <Image
                    src="/15.webp"
                    w={ImageWigth[variant as keyof typeof ImageWigth]}
                    h={ImageHigth[variant as keyof typeof ImageHigth]}
                    marginLeft={ImageMargin[variant as keyof typeof ImageMargin]}
                />
               </Box>
            </Box>
            <Box
                display="flex"
                position="absolute"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '50dvw'}
                h="15vh"
                bgColor='white'
                marginTop={variant === 'base' || variant === 'sm' ? '20dvh' : '0dvh'}
                marginLeft={variant === 'base' || variant === 'sm' ? '0dvw' : '50dvw'}
                textAlign="center"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    fontSize={textSizes[variant as keyof typeof textSizes]}
                    fontWeight="bold"
                    marginLeft="10dvw"
                >
                    Лицензия
                </Text>
                <Text
                    fontSize={textSizes[variant as keyof typeof textSizes]}
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
                    marginTop="2"
                    fontSize="70%"
                >
                    CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
                </Text>
            </Box>
        </>
    )
}