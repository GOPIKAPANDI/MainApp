import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native'; 

const App = () => { 
  const [name,setName] = useState(''); 
  const [submitted , setSubmitted] = useState(false); 
  const onPressHandler = () => {
    setSubmitted(!submitted);  //to toggle the value , while clicking multiple times 
  } 

  return (
    <View style = {styles.body}>
    <Text style = {styles.text}>
      Please write your name: 
    </Text>
    <TextInput 
    style = {styles.input}
    placeholder='e.g. Gopika'
    onChangeText={(val)=> setName(val)} 
    />  

    
    {/* <Button 
      title={submitted ? 'clear' : 'submit'}  
      onPress={onPressHandler}  
      // disabled={submitted}
      color='#00f' 
    /> */}


    {/* <TouchableOpacity onPress={onPressHandler} style={styles.touchable} activeOpacity={0.5}>  
      <Text style = {styles.text}> 
        {submitted ? 'CLEAR' : 'SUBMIT'}  
      </Text>
    </TouchableOpacity> 
    */}


    {/* <TouchableHighlight 
      onPress={onPressHandler}
      style={styles.touchable}
      activeOpacity={0.5}
      underlayColor= '#dddddd'  
    >  
      <Text style = {styles.text}>  
        {submitted ? 'CLEAR' : 'SUBMIT'}  
      </Text>
    </TouchableHighlight>  
    */}


    {/* 
    <TouchableWithoutFeedback 
      onPress={onPressHandler}
    >  
      <View style={styles.touchable}>
      <Text style = {styles.text}>  
        {submitted ? 'CLEAR' : 'SUBMIT'}  
      </Text>
      </View>
    </TouchableWithoutFeedback>  
    */} 


    <Pressable
      onPress = {onPressHandler} 
      hitSlop={{top:10,bottom:10,right: 10,left: 10}} 
      android_ripple={{color:'#00f'}} 
      style = { ({ pressed }) => [ 
        {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
        styles.touchable, 
      ]} 
    >
    <Text style = {styles.text}>  
        {submitted ? 'CLEAR' : 'SUBMIT'}  
      </Text>
    </Pressable>

    {submitted ? 
       <Text style = {styles.text}>
       You are registered as : {name}  
       </Text>
       : 
       null 
     }
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
    marginBottom : 10, 
  },
  touchable:{
    // backgroundColor: '#00ff00',
    borderRadius : 5,   
    width: 150,
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center', 
  } 
});

export default App;