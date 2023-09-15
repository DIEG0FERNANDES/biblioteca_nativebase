import {Box,Icon} from 'native-base'

import {Feather} from'@expo/vector-icons'

export default function Icone(props) {
    return(
        <Box>
            <Icon
                as={Feather}
                name={props.name}
                size={props.size}
                color={props.color}
                backgroundColor={props.bg}
            />
        </Box>
    )
}