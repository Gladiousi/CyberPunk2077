import { useState, useEffect } from "react";
import { Box, Text, Button, useBreakpointValue } from "@chakra-ui/react";

export const Hero=() => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const images: string[] = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const textSizes: { [key: string]: string } = {
        base: '1.5rem',
        sm: '2rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3xl',
        '2xl': '4xl',
    };
    let variant: string | undefined = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg", xl: 'xl', '2xl': '2xl' });
    if (variant === undefined) {
        variant = "base";
    }

    return (
        <Box
            as="section"
            position="relative"
            height="100vh"
            backgroundSize="cover"
            backgroundPosition="center"
            transition="background-image 1s ease-in-out"
            backgroundImage={`url(${images[currentImage]})`}
        >
            <Box
                clipPath="polygon(10% 0, 100% 0, 100% 83%, 90% 100%, 0 100%, 0 17%)"
                position="absolute"
                h="20dvh"
                bgColor='secondary.500'
                p='4'
                textAlign="center"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '35dvw'}
                right={(variant === 'base' || variant === 'sm') ? '0' : '10 '}
                top={variant === 'base' || variant === 'sm' ? '80dvh' : '70dvh'}
                color="white"
            >
                <Text fontSize={textSizes[variant as keyof typeof textSizes]} color='primary.500' mb='5px'>
                    Доступно на всех платформах
                </Text>
                <Button variant="primary" fontSize={textSizes[variant as keyof typeof textSizes]} p="10" >
                    Узнать больше
                </Button>
            </Box>
        </Box>
    );
}


