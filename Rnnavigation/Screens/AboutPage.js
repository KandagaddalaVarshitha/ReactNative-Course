import {View,Text,StyleSheet,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
export default function AboutPage({navigation,route})
{
    const navigation1=useNavigation()
    const {name}=route.params
    return(
        <View style={styles.Container}>
            <Text style={styles.text}>
                About {name}
            </Text>
            <View style={styles.button}>
            <Button  title='Go to Home' onPress={()=>navigation.setParams({
                name:"Coding"
            })}/>
            <Button title='Go to Home1' onPress={()=>{navigation1.navigate("Home",{result:"Data from about"})}}/>
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