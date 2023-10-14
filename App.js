import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  // item is an array of dictionaries
  const [Items , setItems] =useState([
    {item: 'Item1'}, 
    {item: 'Item2'},
    {item: 'Item3'},
    {item: 'Item4'},
    {item: 'Item5'},
    {item: 'Item6'},
    {item: 'Item7'},
    {item: 'Item8'}, 
    {item: 'Item9'},
    {item: 'Item10'},   
  ]);
  const [Refreshing , setRefreshing] = useState(false);
  const onRefresh = () =>{
    setRefreshing(true);
    setItems([...Items,{ item: 'Item12'}]);  
    setRefreshing(false);
  }
  return ( 
    <FlatList 
    // horizontal
    // inverted 
      keyExtractor={(item,index)=>index.toString()}            
      data={Items}
      renderItem={ ({item}) => (  
          <View style = {styles.item}>  
          <Text style = {styles.text}>{item.item}</Text>  
          </View>
      )} 
      refreshControl={
        <RefreshControl
          refreshing = {Refreshing}
          onRefresh={onRefresh}
          colors={['#00ffff','#0000ff','#ff00ff','#ff0f']} 
        />
      }   
    /> 
    // <ScrollView 
    // horizontal={false} 
    // style={styles.body} 
    // refreshControl={
    // <RefreshControl
    //    refreshing = {Refreshing}
    //    onRefresh={onRefresh}
    //    colors={['#00ffff','#0000ff','#ff00ff','#ff0f']} 
    //  />
    // }> 
    //   {
    //     Items.map((obj)=>{
    //       // obj ==> {key: x, item: 'xyz'}
    //       return (
    //         <View style = {styles.item} key={obj.key}> 
    //         <Text style = {styles.text}>{obj.item}</Text>  
    //         </View>
    //       )
    //     })
    //   } 
    //   </ScrollView>
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