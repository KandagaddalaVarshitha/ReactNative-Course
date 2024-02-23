
import { useState } from "react";
import { View,Text ,Image, ImageBackground,ScrollView,Button,Modal, Pressable ,StatusBar, ActivityIndicator,Alert} from "react-native";

const logo=require('./assets/adaptive-icon.png')
const logo2=require('./assets/splash.png')

export default function App(){
  const [isModal,setIsModal]=useState(false);
  const[isStatusBar,setIsStatusBar]=useState(true);
  const[isAnimating,setIsAnimating]=useState(true);

  
  return (
  <View style={{ flex: 1 , backgroundColor:"lightblue"}}>


    <StatusBar hidden={!isStatusBar} backgroundColor="lightgreen" barStyle="dark-content" />
    <Button title={isStatusBar?"HideStatusBar":"ShowStatusBar"} onPress={()=>setIsStatusBar(!isStatusBar)} color="green" />

    <ScrollView>
    {/*<ImageBackground source={logo2} style={{flex:1 , width:500 , height:1000}}></ImageBackground>*/}
    <Button title="Continue reading" onPress={()=>console.log("Clicked/Pressed")} color="midnightblue"/>

    

    
     <Text style={{fontSize:20 }}>Hello
  
      <Text style={{color:"red", backgroundColor:"blue", padding:60,fontSize:20}}> Varshitha</Text>
      </Text>


    <Button title="Touch" onPress={()=> setIsModal(true)}/>
    <ActivityIndicator size="large" color="blue" animating={isAnimating} />
    <Button title="Touch" onPress={()=> setIsAnimating(false)}/>

   
    <Modal  
    visible={isModal}
    animationType="slide"
    onRequestClose={()=>setIsModal(false)}
    presntationStyle="pagesheet">
      <View style={{ flex: 1 , backgroundColor:"lightblue"}} >
        <Text>Modal Page</Text>
      <Button title="close" onPress={()=> setIsModal(false)}/>
      </View>
    </Modal>

    <Button title="Alert" onPress={()=>Alert.alert("Inavalid Data","DOB Incorrect",[
      {
        text:"Cancel",
        onPress:()=>console.log("Cancel Clicked")
      },
      {
        text:"OK",
        onPress:()=>console.log("OK Clicked")
      },
      
    ])}/>

      <View style={{backgroundColor:"yellow",width:200,height:200}}>
      <Pressable onPress={()=>console.log("Image  Pressed")}>
        <Image source={logo} style={{width : 100,height:100}}/></Pressable>
        <Pressable onPressIn={()=>console.log(" Pressed")}>
        <Text style={{fontSize:35 , color:"green"}}>Welcome</Text></Pressable></View>

      <View style={{backgroundColor:"blue",width:200,height:200}}>
      <Pressable onPressOut={()=>console.log("Image  Pressed")}>
        <Text style={{fontSize:35 , color:"white"}}>Welcome</Text></Pressable>
        <Pressable onLongPress={()=>console.log("  Pressed")}>
        <Image source={{uri: "https://picsum.photos/150"}} style={{width : 150,height:150}}/></Pressable>
        </View> 
        <Pressable onPressIn={()=>console.log("Text Pressed")}>
        <Text>When you need to wrap your elements inside the container, you can use View as a container element.
When you want to nest more elements inside the parent element, both parent and child can be View. It can have as many children as you want.
When you want to style different elements, you can place them inside View since it supports style property, flexbox etc.
View also supports synthetic touch events, which can be useful for different purposes.
We already used View in our previous chapters and we will use it in almost all subsequent chapters as well. The View can be assumed as a default element in React Native. In example given below, we will nest two Views and a text.
When you need to wrap your elements inside the container, you can use View as a container element.
When you want to nest more elements inside the parent element, both parent and child can be View. It can have as many children as you want.
When you want to style different elements, you can place them inside View since it supports style property, flexbox etc.
View also supports synthetic touch events, which can be useful for different purposes.</Text>
</Pressable>
        <Image source={{uri: "https://picsum.photos/150"}} style={{width : 150,height:150}}/>  
        </ScrollView> 
        <Button title="Click Me" onPress={()=>console.log("Button Clicked/Pressed")} color="green" disabled/>
   </View>
   );
}