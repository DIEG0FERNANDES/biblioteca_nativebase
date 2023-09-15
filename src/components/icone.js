import { VStack, Icon} from 'native-base'

import { Feather } from '@expo/vector-icons'

export default function Icone(props) {
    return (
        <VStack>
            <Icon
            as= {Feather}
            name= {props.name}
            size="8"
            color= "#ffffff" 
            />
        </VStack>
    )
}