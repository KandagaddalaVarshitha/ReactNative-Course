import {View,Text,StyleSheet,Button} from 'react-native';

export default function DashBoard({navigation})
{
    return(
        <View style={styles.Container}>
            <Text style={styles.text}>
                Dashboard
            </Text>
            <Button  title='Toggle Drawer' onPress={()=>navigation.toggleDrawer()}
           />
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