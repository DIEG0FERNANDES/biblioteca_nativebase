import * as React from "react";
import { Box, Pressable, HStack, Text, Stack, VStack } from "native-base";
import Icone from "../components/icone";
import Add from "../components/add";

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
            <Add />
        </Box>
    );
}