import {ScrollView,View,Text,TextInput,Button,StyleSheet,Image, KeyboardAvoidingView ,Platform, TouchableOpacity,SafeAreaView} from 'react-native';
import { useState,useEffect,useRef } from 'react';

export default function App()
{
    const [username,setUsername]=useState("");
    const [Password,setPassword]=useState("");
    const [errors,SetErrors]=useState({});
    const [isOn , SetIsOn]=useState(0)
    const [isCheckbox,SetIsCheckbox]=useState([]);
    const options=['English','Telugu','Tamil','Hindi'];

    const inputRef=useRef(null);

    useEffect(()=>{
      inputRef.current.focus();
    },[])
    
    const Validationform =()=>{
        let errors={}
        if(!username) errors.username="Username is required"
        if(!Password) errors.Password="Password is required"

        SetErrors(errors);
        return Object.keys(errors).length===0;
    }
    const handleSubmit=()=>{
        if(Validationform())
        {
            console.log("Submitted", username,Password,isOn)
            setUsername("");
            setPassword("");
            SetErrors({});
            SetIsOn(0);
            
        }
    }

    function checkSelected(opt){
      if(isCheckbox.includes(opt)){
        SetIsCheckbox(isCheckbox.filter(item=>item!==opt));
        return;
      }
      SetIsCheckbox(isCheckbox.concat(opt))
    }

    return(
        <SafeAreaView  style={styles.Container}>
         
          <KeyboardAvoidingView behavior={Platform.OS==='ios' ? 'Padding':"position"} style={{flex:1}}>
          <ScrollView>
            <View style={styles.form}>
            <Text style={styles.text}>Login </Text>
            <Image source={require('./assets/login1.png')} style={styles.login}/>
            <Text style={styles.label}>Username</Text>
            <TextInput ref={inputRef} 
            style={styles.input}placeholder='Enter Username' 
            value={username} 
            onChangeText={setUsername} 
            />
            {
                errors.username ? <Text style={styles.errorText}>{errors.username}</Text> :null
            }
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} 
            placeholder='Enter Password' secureTextEntry
            value={Password} 
            onChangeText={setPassword}
            />
            {
                errors.Password ? <Text style={styles.errorText}>{errors.Password}</Text> :null
            }
            <Text style={styles.label}>Enter Gender: </Text>
            <TouchableOpacity onPress={()=>SetIsOn(1)}>
                <View style={styles.Wrapper}>
                    <View style={styles.radio}>
                      { isOn===1 ?
                      <View style={styles.radiobg}></View>:null
                      }
                    </View>
                        <Text style={styles.radio1}>Male</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>SetIsOn(2)}>
                <View style={styles.Wrapper}>
                    <View style={styles.radio}>
                    { isOn===2 ?
                      <View style={styles.radiobg}></View>:null
                      }
                    </View>
                        <Text style={styles.radio1}>Female</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.label}>
                Select Languages:
              </Text>
              {options.map(option=>(
                <TouchableOpacity key={option}
                onPress={()=>checkSelected(option)}>
                  <View style={styles.Wrapper}>
                  <View style={styles.Checkbox}>
                  {isCheckbox.includes(option) && <Text style={styles.check}>✔</Text>}
                  </View>
                  <Text style={styles.radio1}>{option}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              
            
            <Button title='Submit' style={styles.button} onPress={handleSubmit}/>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
           
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:"f5f5f5",
        justifyContent:"center",
        alignContent:"center",
    },
    form:
    {
        backgroundColor:"white",
        shadowColor:"black",
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        padding:20,
    },
    text:
    {
        
        textAlign:"center",
        fontSize:38,
        fontWeight:"bold",
        marginBottom:18
    },
    login:{
        width:150,
        height:150,
        alignSelf:"center",
    },
    label:{
        fontSize:20,
        color:"black",
        paddingBottom:3,
        marginBottom:8
    },
    input:{
        borderWidth:2,
        borderRadius:5,
        //paddingBottom:12,
        //paddingStart:10,
        padding:10,
        marginBottom:12,
    },
    button:{
      
        marginTop:20,
        
    },
    errorText:
    {
        color:"red",
        marginBottom:10,
    },Wrapper:{
      flexDirection:"row",
      alignItems:"center",
    },
    radio:{
      
      borderColor:"black",
      borderWidth:3,
      borderRadius:10,
      width:20,
      height:20,
     marginHorizontal:12,
    },
    radio1:{
      fontSize:18,
    },radiobg:{
      borderWidth:2,
      width:14,
      height:14,
      borderRadius:11,
      backgroundColor :"blue",
    },
    Checkbox:{
      borderColor:"balck",
      borderWidth:3,
      //borderRadius:10,
      width:20,
      height:20,
     marginHorizontal:12,
    },check:{
      color:'white',
      fontWeight:'bold',
      backgroundColor:'green',
      textAlign:'center',
    }
})