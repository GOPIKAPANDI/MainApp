import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {
  // item is an array of dictionaries
  const [Items , setItems] =useState([
    {key: 1, item: 'Item1'}, 
    {key: 2, item: 'Item2'},
    {key: 3, item: 'Item3'},
    {key: 4, item: 'Item4'},
    {key: 5, item: 'Item5'},
    {key: 6, item: 'Item6'},
    {key: 7, item: 'Item7'},
    {key: 8, item: 'Item8'}, 
    {key: 0, item: 'Item9'},
    {key: 10, item: 'Item10'},  
  ])
  const [Refreshing , setRefreshing] = useState(false);
  const onRefresh = () =>{
    setRefreshing(true);
    setItems([...Items,{ key: 69, item: 'Item11'}]); 
    setRefreshing(false);
  }
  return (
    <ScrollView 
    horizontal={false} 
    style={styles.body} 
    refreshControl={
    <RefreshControl
       refreshing = {Refreshing}
       onRefresh={onRefresh}
       colors={['#00ffff','#0000ff','#ff00ff','#ff0f']} 
    />}> 
      {
        Items.map((obj)=>{
          // obj ==> {key: x, item: 'xyz'}
          return (
            <View style = {styles.item} key={obj.key}> 
            <Text style = {styles.text}>{obj.item}</Text>  
            </View>
          )
        })
      } 
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  body :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#ffffff',  
  },
  item:{
    margin: 20,
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic', 
    margin: 10,
  },
});

export default App;