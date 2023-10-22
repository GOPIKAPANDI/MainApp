import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  TextInput,
} from 'react-native'; 

const App = () => { 
  const [name,setName] = useState(''); 
  return (
    <View style = {styles.body}>
    <Text style = {styles.text}>
      Please write your name: 
    </Text>
    <TextInput 
    // multiline
    style = {styles.input}
    placeholder='e.g. Gopika'
    onChangeText={(val)=> setName(val)} 
    // secureTextEntry 
    // maxLength={8}
    // editable={false}  
    /> 
    <Text style = {styles.text}>
      Your name is : {name} 
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body :{
    flex: 1,
    backgroundColor : '#ffffff',  
    alignItems: 'center',
  },
  text:{
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input:{
    borderWidth: 1,  
    width: 200,  
    borderRadius: 10,
    borderColor : '#555', 
    textAlign : 'center',  
    fontSize: 20, 
  },
});

export default App;