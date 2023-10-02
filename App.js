import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Test')  
  const onClickHandler = () => { 
    setName('Style Test is Done!')   
  }
  return (
    <View style={styles.body}>  
      <Text style={styles.text}>{name}</Text> 
      <View style={styles.button}>
      <Button title='Update State' onPress={onClickHandler}></Button> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%', 
    height: '50%', 
    backgroundColor: '#1023',  
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth: 10, 
    borderColor: 'blue',
    borderRadius: 10,
    // margin: 40, 
  },
  text: {
    color: '#000000',
    fontSize: 40, 
    fontStyle:'italic',
    margin: 15, 
    textTransform: 'uppercase',
  },
  button:{
    width: 200,
    height: 150, 
  },
});

export default App;