import * as React from "react";
import { Box, Pressable, HStack, Text } from "native-base";
import Icone from "../components/icone";

export default function Home() {
    return (
        <Box flex={1} backgroundColor="#1b1b1b" flexDirection="columm">
            <HStack backgroundColor="#484848" padding={3} w="100%" alignItems="center" justifyContent="space-between" safeArea>
                <Box flexDirection="row">
                    <Pressable>
                        <Icone
                            name="menu"
                            size="7"
                            color="#ffff"
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
                            color="#ffff"
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
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Text color="#ffff">teste</Text>
            <Pressable color="white" alignItems="flex-end">
                <Icone
                    name="plus-circle"
                    size="20"
                    color="#45ef27"
                />
            </Pressable>
        </Box>
    );
}