
import { StyleSheet, Text, View,TextInput,SafeAreaView ,Switch} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name,setName]=useState("");
  const[isDarkMode,setIsDarkMode]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.text} value={name} onChangeText={setName}/>
      <Text style={styles.name1}>my name is {name}</Text>
      <TextInput style={[styles.text,styles.multiline]} placeholder='message' multiline/>
      <View style={styles.switchContainer}>
        <Text style={styles.name1}> Dark Mode  </Text>
          <Switch value={isDarkMode} onValueChange={()=> setIsDarkMode((isDarkMode)=>!isDarkMode)} 
          trackColor= {{false: "green",true:"blue"}}thumbColor="red"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  text:
  {
    borderWidth:1,
    height:40,
    margin:35,
    padding:5
  },
  name1:
  {
    fontSize:20,
    fontWeight:"bold",
    marginLeft:23,
    padding:10
  },
  multiline:{
    minHeight:150,
    textAlignVertical:"top",
  },
  switchContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10
  }
});
