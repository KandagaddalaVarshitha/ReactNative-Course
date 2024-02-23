import {View,Text,StyleSheet,Button} from 'react-native';

export default function Settings({navigation})
{
    return(
        <View style={styles.Container}>
            <Text style={styles.text}>
                Settings
            </Text>
            <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()} />
            <Button  title="Go to Dashboard" onPress={()=>navigation.jumpTo("Dashboard")}/>
        </View>
    )
}
const styles=StyleSheet.create({

    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
    }
})

