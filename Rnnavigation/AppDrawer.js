import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import DashBoard from './Screens/DashBoard'
import Settings from './Screens/Settings'

const Drawer=createDrawerNavigator()

export default function App()
{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashBoard}/>
                <Drawer.Screen name="Settings" component={Settings}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}