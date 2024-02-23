import {View,Text,Button,ScrollView,SafeAreaView,StyleSheet,Image} from 'react-native';

export default function App()
{
  return(
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
      <Image source={require('./assets/login1.png')} style={styles.image}/>
      <Text style={styles.text}>
       Home
      </Text>
      <Text style={styles.text}>
       Login
      </Text>
      <Text style={styles.text}>
       Blogs
      </Text>
      <Text style={styles.text}>
       Review
      </Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({

  Container:{
    flex:1,
    
  },
  header:{
    flexDirection:'row',
    //gap:10,
    alignItems:"center",
    justifyContent:"space-between",
    margin:35,
    //borderWidth:2,
    padding:12,
    //paddingHorizontal:20,
    //paddingRight:60,
    elevation:7,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:8,
  },
  text:{
    fontSize:20,
    color:'blue',
    fontWeight:'bold',
  },
  image:{
    
    width:'10%',
    height:'90%',
  },
  

})
