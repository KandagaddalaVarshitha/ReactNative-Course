import { StyleSheet, Text, SafeAreaView,Platform,ScrollView } from 'react-native';
import PockemonCard from './Components/PockemonCard';
export default function App() {

  const Charmandar={
    name: "Charmandar",
    image: require("./assets/adaptive-icon.png"),
    type:"Fire",
    hp:"39",
    moves:["Scratch","Growl","Leer"],
    weakness:["water","Rock"]
  }
  const squirtel={
    name: "squirtel",
    image: require("./assets/icon.png"),
    type:"water",
    hp:"39",
    moves:["Scratch","Growl","Leer"],
    weakness:["water","Rock"]
  }
  const balbasaur={
    name: "balbasaur",
    image: require("./assets/favicon.png"),
    type:"grass",
    hp:"39",
    moves:["Scratch","Growl","Leer"],
    weakness:["water","Rock"]
  }
  const pikachu={
    name: "pikachu",
    image: require("./assets/splash.png"),
    type:"Electric",
    hp:"39",
    moves:["Scratch","Growl","Leer"],
    weakness:["water","Rock"]
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PockemonCard {...Charmandar}/>
      <PockemonCard {...squirtel}/>
      <PockemonCard {...pikachu}/>
      <PockemonCard {...balbasaur}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:Platform.OS==="android" ? 45 : 0,
    
  },
});
