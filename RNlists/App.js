
import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,FlatList} from 'react-native';
import PockemonData from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<ScrollView style={styles.Scrollview}>
      {PockemonData.PockemonData.map((pockemon)=>{
        return(
          <View style={styles.card} key={pockemon.id}>
            <Text>[{pockemon.type},{pockemon.name}]</Text>
            <Text>{pockemon.name}</Text>
          </View>
        )
      })}
    </ScrollView>*/}
    <FlatList
      data={PockemonData.PockemonData}
      renderItem={({item})=>{
        return(
          <View style={styles.card} key={item.id}>
            <Text>[{item.type},{item.name}]</Text>
            <Text>{item.name}</Text>
          </View>
        )
      }}
    
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:StatusBar.currentHeight,
  },
  Scrollview:{
    paddingHorizontal:36
  },
  card:{
    backgroundColor:"white",
    borderRadius:8,
    padding:16,
    borderWidth:1,
    marginBottom:16,
    borderStyle:"dotted"

  }
});
