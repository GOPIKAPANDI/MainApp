import React ,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
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
  // nested array 
  const DATA = [
    {
      title: 'Title 1', 
      data: ['Item 1-1','Item 1-2','Item 1-3'], 
    },
    {
      title: 'Title 2', 
      data: ['Item 2-1','Item 2-2','Item 2-3'], 
    },
    {
      title: 'Title 3', 
      data: ['Item 3-1','Item 3-2','Item 3-3'], 
    },
    {
      title: 'Title 4', 
      data: ['Item 4-1','Item 4-2','Item 4-3'],  
    }
  ]
  const [Refreshing , setRefreshing] = useState(false);
  const onRefresh = () =>{
    setRefreshing(true);
    setItems([...Items,{ item: 'Item12'}]);  
    setRefreshing(false);
  }
  return (
    <SectionList
      keyExtractor={(item,index)=>index.toString()}
      sections={DATA}   
      renderItem={({item})=>(
        // <View style = {styles.item}>  
        <Text style = {styles.text}>{item}</Text>  
        // </View>
      )}
      renderSectionHeader={({section})=>(
        <View style = {styles.item}>  
        <Text style = {styles.text}>{section.title}</Text>   
        </View>
      )}
    />
    // <FlatList 
    //   keyExtractor={(item,index)=>index.toString()}            
    //   data={Items}
    //   renderItem={ ({item}) => (  
    //       <View style = {styles.item}>  
    //       <Text style = {styles.text}>{item.item}</Text>  
    //       </View>
    //   )} 
    //   refreshControl={
    //     <RefreshControl
    //       refreshing = {Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#00ffff','#0000ff','#ff00ff','#ff0f']} 
    //     />
    //   }   
    // /> 
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