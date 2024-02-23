import {View,Text,Button} from 'react-native';
import { useReducer } from 'react';


const initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialstate
    }
}
export default function Redcer()
{

    const [count,dispatch]=useReducer(reducer,initialstate);
    return(
    <View>
       <Text>Count = {count}</Text>
        <Button title='increment' onPress={()=>dispatch('increment')}/>
        <Button title='decrement' onPress={()=>dispatch('decrement')}/>
        <Button title='reset' onPress={()=>dispatch('reset')}/>
    </View>
    )
}