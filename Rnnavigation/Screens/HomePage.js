import {View,Text,StyleSheet,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomePage({navigation,route})
{
    const navigation1=useNavigation()
    return(
        <View style={styles.Container}>
            <Text style={styles.text}>
                Home
            </Text>
            <Text style={styles.text}>
                {route.params?.result}
            </Text>
            <View style={styles.button}>
            <Button  title='Go to About' onPress={()=>{navigation.navigate("About",{
                name:"React-Native"
            })}}/>
            <Button title='Go to About1' onPress={()=>{navigation1.navigate("About",{
                name:"Varshitha"
            })}}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        textAlign:"center",
        fontSize:24,
        color:"black",
        fontWeight:"bold",
    },
    button:{
       
        gap:12,
    }
})