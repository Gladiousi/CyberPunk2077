import { useState, useEffect } from "react";
import { Box, Text, Button, useBreakpointValue } from "@chakra-ui/react";

export const Hero = () => {
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

    const ButtonSize = {
        base: 'md',
        sm: 'lg',
        md: 'sm',
        lg: 'lg',
        xl: 'lg',
        '2xl': 'lg'
    };


    const textSizes = {
        base: 'md',
        sm: 'lg',
        md: 'xl',
        lg: '2xl',
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
                bgColor='yellow'
                p='4'
                textAlign="center"
                w={variant === 'base' || variant === 'sm' ? '100dvw' : '25dvw'}
                right={variant === 'base' || variant === 'sm' ? '0dvw' : '2dvw'}
                top={variant === 'base' || variant === 'sm' ? '80dvh' : '70dvh'}
                color="white"
            >
                <Text fontSize={textSizes[variant as keyof typeof textSizes]} color='Black' mb='5px' fontWeight="bold">
                    Доступно на всех платформах
                </Text>
                <Button variant="primary" fontSize={textSizes[variant as keyof typeof textSizes]} size={ButtonSize[variant as keyof typeof ButtonSize]} >
                    Узнать больше
                </Button>
            </Box>
        </Box>
    );
}


