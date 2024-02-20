import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
export const Hero = () => {
   
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const images = [
            "./public/1.webp",
            "./public/2.webp",
            "./public/3.webp"
        ];
        useEffect(() => {
          const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
          }, 5000);
      
          return () => clearInterval(intervalId);
        }, [images]);

    return (
        <>      
            <Box
                w='100dvw' h='100dvh'
                bgImage={`url(${images[currentIndex]})`}
                bgSize="cover"
                bgPosition="center"
            >
            </Box>

        </>
    )
      } 