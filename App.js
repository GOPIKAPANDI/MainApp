import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('GopikaPandi') 
  const [session, setSession] = useState({number: 6,title: 'state'})
  const [current, setCurrent] = useState(true) 
  const [cnt, setcnt] = useState(0)
  const [mult, setmult] = useState(0)
  const onClickHandler = () => {
    setName('GOPIKAPANDI R') 
    setSession({number:7,title:'style'})
    setCurrent(false) 
  }
  const onClickbtn2 = () =>{
    setcnt(cnt+1)
    setmult(mult+5) 
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text> 
      <Text style={styles.text}>This is session {session.number} and it's about {session.title}</Text>
      <Text style={styles.text}>{current ? 'currentsession' : 'nextsession'}</Text>  
      <Button title='Update State' onPress={onClickHandler}></Button>
      {/* Exercise */}
      <Text style={styles.text}>{mult}</Text> 
      <Button title='add' onPress={onClickbtn2}></Button>
      <Text style={styles.text}>You clicked {cnt} times</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle:'italic',
    margin: 10,
  },
});

export default App;