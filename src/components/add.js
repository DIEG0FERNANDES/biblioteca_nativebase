import React from "react";
import { Fab, Icon, Container } from "native-base";
import {Feather} from '@expo/vector-icons'

export default function Add() {
    return (
        <Container>
            <Fab
                placement="bottom-right"
                colorScheme="green"
                size="20"
                onPress={() => navigation.navigate('CreateBoard')}
                icon={<Icon name="plus" as={Feather} />}
            />
        </Container>
    );
}