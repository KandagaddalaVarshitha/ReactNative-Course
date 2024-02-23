import {View,Text,Button} from 'react-native';
import { useReducer } from 'react';

const initialState=0;
const reducer=(state,action)=>{
    switch(action)
    {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        
    }
}

export default function Reducer3()
{
    const [count,dispatch]=useReducer(reducer,initialState);
    const [count2,dispatch2]=useReducer(reducer,initialState);

    return(
        <View>
            <Text>count={count}</Text>
            <Text>count2={count2}</Text>
            <Button title='increment' onPress={()=>dispatch('increment')}/>
            <Button title='decrement' onPress={()=>dispatch('decrement')}/>
            <Button title='reset' onPress={()=>dispatch('reset')}/>
            <Button title='increment' onPress={()=>dispatch2('increment')}/>
            <Button title='decrement' onPress={()=>dispatch2('decrement')}/>
            <Button title='reset' onPress={()=>dispatch2('reset')}/>
        </View>
    )
}