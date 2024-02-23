import {View,Text,Button} from 'react-native';
import { UserContext,ChannelContext } from '../App';

export default function C()
{
    return(
    <View>
        <UserContext.Consumer>
            {
              user=>{
                return(
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                                return(
                                    <View>
                                        <Text>UserContext-{user} ChannelContext-{channel}</Text>
                                    </View>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                )
              }  
            }
        </UserContext.Consumer>
    </View>
    )
}
