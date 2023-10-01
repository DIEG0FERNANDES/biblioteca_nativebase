import * as React from "react";
import { Box, Pressable, HStack, Text, Stack, VStack, Content, List, ListItem, Icon } from "native-base";
import Icone from "../components/icone";
import Add from "../components/add";

const boards = [
    { id: 1, title: 'Quadro 1' },
    { id: 2, title: 'Quadro 2' },
    { id: 3, title: 'Quadro 3' },
];

export default function Home() {
    return (
        <Box flex={1} backgroundColor="#1b1b1b" flexDirection="columm">
            <HStack backgroundColor="#484848" padding={3} w="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box flexDirection="row">
                    <Pressable>
                        <Icone
                            name="menu"
                            size="7"
                            color="#ffffff"
                        />
                    </Pressable>
                    <Text color="#ffff">
                        Quadros
                    </Text>
                </Box>
                <Box flexDirection="row">
                    <Pressable>
                        <Icone
                            name="search"
                            size="7"
                            color="#fffff"
                        />
                    </Pressable>
                    <Pressable>
                        <Icone
                            name="bell"
                            size="7"
                            color="#ffff"
                        />
                    </Pressable>
                </Box>
            </HStack>
            <Box>
                <Text color="#ffffff" justifyContent="center" margin={1} >Quadros Recentes</Text>
                <VStack backgroundColor="#484848" margin={15} justifyContent="space-between" alignItems="center">
                    <Stack direction="row" mb="2.5" mt="1.5" space={20}>
                        <Text color="#ffff">teste</Text>
                        <Text color="#ffff">teste</Text>
                    </Stack>
                    <Stack direction="row" mb="2.5" mt="1.5" space={20}>
                        <Text color="#ffff">teste</Text>
                        <Text color="#ffff">teste</Text>
                    </Stack>
                </VStack>
            </Box>
            <Box>
                <Text color="#ffffff" justifyContent="center" margin={1} >Quadros Favoritos</Text>
                <VStack backgroundColor="#484848" margin={15} justifyContent="space-between" alignItems="center">
                    <Stack direction="row" mb="2.5" mt="1.5" space={20}>
                        <Text color="#ffff">teste</Text>
                        <Text color="#ffff">teste</Text>
                    </Stack>
                    <Stack direction="row" mb="2.5" mt="1.5" space={20}>
                        <Text color="#ffff">teste</Text>
                        <Text color="#ffff">teste</Text>
                    </Stack>
                </VStack>
            </Box>
            {/* <Content>
                <List>
                    {boards.map(board => (
                        <ListItem key={board.id} onPress={() => navigation.navigate('Board')}>
                            <Text>{board.title}</Text>
                            <Icon name="arrow-forward" />
                        </ListItem>
                    ))}
                </List>
            </Content> */}
            <Add />
        </Box>
    );
}