import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            'html, body':{
                overflowX: 'hidden',
                userDrag: 'none',
                webkitUserDrag: 'none'
            },
            'img':{
                    mozUserSelect: 'none',
                    webkitUserSelect: 'none',
                    msUserSelect: 'none',
                    userSelect: 'none',
                    pointerEvents: 'none',
            }
        }
    },
    colors: {
        primary: {
            500: "#000000",
        },
        secondary: {
            500: "#F8F200",
        },
    },
    fonts: {
        heading: "Alegreya, sans-serif;",
        body: "Alegreya, sans-serif",
    },
    space: {
        2: "8px",
        4: "16px",
    },
    components: {
        Button: {
            // Переопределение базового стиля кнопки
            baseStyle: {
                fontWeight: "bold",
                borderRadius: "md",
            },
            // Стили для различных размеров кнопки
            sizes: {
                md: {
                    fontSize: "md",
                    padding: "12px 24px",
                },
                lg: {
                    fontSize: "lg",
                    padding: "16px 32px",
                },
            },
            variants: {
                primary: {
                    bg: "primary.500",
                    color: "secondary.500",
                    _hover: {
                        bg: "yellow",
                        color: "black",
                        border: "3px solid black",
                    },
                },
                secondary: {
                    bg: "secondary.500",
                    color: "primary.500",
                    _hover: {
                        bg: "black",
                        color: "yellow",
                        border: "3px solid yellow",
                    },
                },
            }
        }
    },
    breakpoints: {
        base: "1px",
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: '400000px',
        '2xl': '500000px'
    },
});

export default theme;