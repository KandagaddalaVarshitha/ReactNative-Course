import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Screens/HomePage';
import AboutPage from './Screens/AboutPage';

const stack=createNativeStackNavigator()

export default function AppStack() {

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name="Home" component={HomePage}
        options={{
          title:"Welcome Home",
          headerStyle:{
            backgroundColor:"darkblue",
          },
          headerTintColor:"Grey",
          headerTitleStyle:{
            fontWeight:"bold",
            color:"white"
          },
          
        }}/>
        <stack.Screen name="About" component={AboutPage}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}