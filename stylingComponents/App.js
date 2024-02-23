import {View,Text,StyleSheet} from 'react-native';

export default function App()
{
  return(
  <View style={styles.Container}>
    <Text style={styles.title}>Hello World</Text>
  </View>
  );
}
   export const styles=StyleSheet.create(
    {   
      Container : {flex:1, backgroundColor:"yellow",padding:60},
      title:{color:"blue"}
    }
  )
