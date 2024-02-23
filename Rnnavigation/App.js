import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Screens/Profile";
import CourseList from './Screens/CourseList'

const Tab=createBottomTabNavigator();

export default function App()
{
    return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="CourseList" component={CourseList}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
    
}