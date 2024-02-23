import {View,Text,Button} from 'react-native';
import C from './C'
import { useContext } from 'react';
import { UserContext,ChannelContext } from '../App';
export default function B()
{
    const user=useContext(UserContext);
           const channel=useContext(ChannelContext)
    return(
        <View>
           <Text>
            User-{user} 
            channel-{channel}
           </Text>
        </View>
    )
}