import { useReducer } from "react";

import {View,Text,Button} from'react-native';

const initialState={
    firstOne:0,
    secondOne:0,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstOne:state.firstOne+action.value}
        case 'decrement':
            return{...state, firstOne:state.firstOne-action.value}
        case 'reset':
            return initialState
        case 'increment2':
            return{...state,secondOne:state.secondOne+action.value}
        case 'decrement2':
                return{...state,secondOne:state.secondOne-action.value}
        
        
        
    }
}
export default function Reducer2()
{
    const [count,dispatch]=useReducer(reducer,initialState);
    return(
        <View>
            <Text>Count ={count.firstOne}</Text>
            <Text>Count2= {count.secondOne}</Text>
            <Button title='increment' onPress={()=>dispatch({type:'increment',value:1})}/>
            <Button title='decrement' onPress={()=>dispatch({type:'decrement' ,value:1})}/>
            <Button title='reset' onPress={()=>dispatch({type:'reset'})}/>
            <Button title='increment5' onPress={()=>dispatch({type:'increment',value:5})}/>
            <Button title='decrement5' onPress={()=>dispatch({type:'decrement' ,value:5})}/>
            <Button title='increment2' onPress={()=>dispatch({type:'increment2',value:1})}/>
            <Button title='decrement2' onPress={()=>dispatch({type:'decrement2' ,value:1})}/>

        </View>
    )
}