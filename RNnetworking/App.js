
import { StyleSheet, StatusBar,Text,SafeAreaView, View ,FlatList,ActivityIndicator, TextInput,Button} from 'react-native';
import { useState,useEffect } from 'react';
export default function App() {
  const [postList,setPostList]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [refresh,setrefresh]=useState(false);
  const [postTitle,setPostTitle]=useState("");
  const [postBody,setPostBody]=useState("");
  const [isPosting,setIsPosting]=useState(false);
  const [error,setError]=useState("")

  const fetchData = async (limit=10) =>{
    try{
    const response=await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data= await response .json()
    setPostList(data)
    setIsLoading(false)
    setError("")
    }
    catch(error){
      console.error("Error in fetching data",error);
      setError("Failed to get post")
      setIsLoading(false);

    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading)
  {
    return(
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue"/>
        <Text >is Loading......</Text>
      </SafeAreaView>
    )
  }
  const addPost=async()=>{
    setIsPosting(true)
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`,{
      method :'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify
     ( {
        title:postTitle,
        body:postBody
      })

    } )
    const newPost= await response.json()
    setPostList([newPost,...postList])
    setPostTitle("")
    setPostBody("")
    setIsPosting(false)
    setError("")
  }
  catch(error)
  {
    console.error("Error in Fetching Data",error)
    setError("Failed to add new post")
  }
  }
  const handlerefresh=()=>{
    setrefresh(true)
    fetchData(20),
    setrefresh(false)
  }

   
  return (
    <SafeAreaView >
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ):(
    <>
    <View style={styles.postContainer}>
      <TextInput placeholder='Enter title'
       value={postTitle} 
       onChangeText={setPostTitle} 
       style={styles.posttitle}/>
      <TextInput placeholder='Enter body' 
      value={postBody} 
      onChangeText={setPostBody} 
      style={styles.postbody}/>
      <Button title={isPosting? "Adding....":"Add Post"} 
      onPress={addPost} disabled={isPosting}/>

    </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
        data={postList}
        renderItem={({item})=>{
          return(
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )
        }}
        
          
        ListEmptyComponent={<Text style={{fontSize:23}}>No Data</Text>}
        ListHeaderComponent={<Text style={styles.header}>Start of List</Text>}
        ListFooterComponent={<Text style={styles.footer}>End of List</Text>}
        refreshing={refresh}
        onRefresh={handlerefresh}
        />
      </View>
    </SafeAreaView>
    </>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight,
  },
  listContainer:{
    flex:1,
    paddingHorizontal:10,
    
    //borderBottomColor:"black",
  },
  card:{
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    borderWidth:2,
  },
  title:
  {
    fontSize:20,
    color:"black",
  },
  body:{
    fontSize:20,
    color:"#666666",
  },
  header:{
    fontSize:24,
    textAlign:"center",
    paddingBottom:12,
  },
  footer:{
    fontSize:24,
    textAlign:"center",
    paddingTop:12,
  },
  loadingContainer:{
    flex:1,
    backgroundColor:"#F5F5F5",
    paddingTop:StatusBar.currentHeight,
    justifyContent:"center",
    alignItems:"center",

  },postContainer:{
    marginTop:40,
    paddingTop:StatusBar.currentHeight,
    backgroundColor:"white",
    padding:16,
    borderRadius:8,
    borderWidth:1,
    margin:16,
  },
  posttitle:{
    height:40,
    borderWidth:2,
    marginBottom:8,
    padding:8,
    borderRadius:8,
    borderStyle:"solid",
    borderColor:"black",
  },
  postbody:{
    height:40,
    borderColor:"black",
    borderWidth:2,
    marginBottom:8,
    padding:8,
    borderRadius:8
  },
  errorContainer:{
    marginTop:40,
    backgroundColor:"#FFC0CB",
    padding:8,
    margin:10,
    borderRadius:8,
    boprderWidth:1,
    alignItems:"center"
  },
  error:{
    color:"#D8000C",
    fontSize:15,
    textAlign:"center",
  },

});
