import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import A from './components/A';
import Redcer from './Reducer';
import Reducer2 from './Reducer2';
import Reducer3 from './Reducer3';

//export const UserContext=React.createContext();
//export const ChannelContext=React.createContext();
export default function App() {
  return (
    <View style={styles.container}>
      {/*<UserContext.Provider value={"ABC"}>
        <ChannelContext.Provider value={"XYZ"}>
       <A/>
        </ChannelContext.Provider>
  </UserContext.Provider> */}
  {/*<Reducer2/>  */}
  <Reducer3/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
