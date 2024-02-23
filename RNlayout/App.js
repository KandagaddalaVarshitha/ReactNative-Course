import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Box from './Box.js'

export default function App() {
  return (
    <View style={styles.container}>
      
      <Box style={{backgroundColor:"red",alignSelf:"flex-start"}}>Box1</Box>
      <Box style={{backgroundColor:"yellow",alignSelf:"flex-end"}}>Box1</Box>
      <Box style={{backgroundColor:"blue",alignSelf:"center"}}>Box1</Box>
      <Box style={{backgroundColor:"green",alignSelf:"auto"}}>Box1</Box>
      <Box style={{backgroundColor:"orange",alignSelf:"stretch"}}>Box1</Box>
      <Box style={{backgroundColor:"lightgreen",flexShrink:1}}>Box1</Box>
  <Box style={{backgroundColor:"midnightblue",flex:1}}>Box1</Box>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //flexDirection:"row",
    //justifyContent:"space-evenly",
    //alignItems:"flex-end",
    //height:300,
    flexDirection:"row",
    flexWrap:"wrap",
    //alignContent:"center",
    gap:20,
    //rowGap:20,
    //columnGap:20,
    borderWidth:5,
    borderColor:"black",
    marginTop:60,
    marginLeft:20,
    marginRight:20,
    borderRadius:8,
    
  },
});
