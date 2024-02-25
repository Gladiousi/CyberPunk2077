import {
    SimpleGrid,
    Container,
    useBreakpointValue,
    Heading,
    Text,
    List,
    ListItem,
    Image,
    Box,
    Button
} from '@chakra-ui/react';
import { CopyIcon, SunIcon, SearchIcon } from '@chakra-ui/icons'

export const DiveCP = () => {

    const variant = useBreakpointValue({
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: 'xl',
        '2xl': '2xl',
    });

    const textSizes = {
        base: 'md',
        sm: 'md',
        md: 'md',
        lg: 'xl',
        xl: '3xl',
        '2xl': '4xl',
    };

    const headingSizes = ({
        base: '2xl',
        sm: '2xl',
        md: '4xl',
        lg: '6xl',
        xl: '9xl',
        '2xl': '8xl',
    });


    return (
        <Box
            paddingLeft='10%'
            paddingRight='10%'
            bgImage='/public/9.webp'
            bg="yellow.300"
            position="relative"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundImage: '/public/9.webp',
                backgroundRepeat: 'no-repeat',
                opacity: 0.5,
            }}
        >
            <SimpleGrid columns={2} spacing={10} >
                <Box marginBottom='10%' marginTop='70px'>
                    <Box marginBottom='5%'>
                        <Image src='/public/10.webp'></Image>
                    </Box>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='space-around'
                        flexWrap='wrap'
                        gap='80px'
                    >
                        <Box>
                            <Image src='/public/11.webp'></Image>
                        </Box>
                        <Box>
                            <Image src='/public/12.webp'></Image>
                        </Box>
                    </Box>
                </Box>
                <Box marginTop='70px' marginBottom='50px'>
                    <Heading fontSize={(variant && variant in headingSizes) ? headingSizes[variant as keyof typeof headingSizes] : headingSizes['base']} >Купить игру Cyberpunk 2077</Heading>
                    <Text
                        wordBreak='break-word'
                        fontSize={(variant && variant in textSizes) ? textSizes[variant as keyof typeof textSizes] : textSizes['base']}
                        mb='30px'
                        w="full"
                    >
                        Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма,
                        созданном для отображения максимально насыщенных цветов.
                        Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц
                    </Text>
                    <Box>
                        <List spacing={3} mb='30px'>
                            <ListItem>
                                <SunIcon mr='1' />
                                Яркие насыщенные цвета
                            </ListItem>
                            <ListItem>
                                <SearchIcon mr='1' />
                                Кристальная четкость изображения
                            </ListItem>
                            <ListItem>
                                <CopyIcon mr='1' />
                                Быстрые движения и плавный геймплей
                            </ListItem>
                        </List>
                        <Button variant="primary">Подробнее</Button>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )
}