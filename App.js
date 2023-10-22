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
  // nested array 
  const [DATA,setDATA] = useState([
    {
      title: 'Title 1', 
      data: ['Item 1-1','Item 1-2'], 
    },
  ]);
  
  const [Refreshing , setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true); 
    const adding_index = DATA.length+1; 
    setDATA([...DATA,{
      title: 'Title' + adding_index , 
      data: 
      [
        'Item' + adding_index + '-1',
        'Item' + adding_index + '-2',
      ]
    }
  ]);  
    setRefreshing(false);
  }
  return (
    <SectionList
      keyExtractor={(item,index)=>index.toString()}
      sections={DATA}   
      renderItem={({item})=>(
        <View style = {styles.item1}>  
        <Text style = {styles.text_item}>{item}</Text>  
        </View> 
      )}
      renderSectionHeader={({section})=>(
        <View style = {styles.item}>   
        <Text style = {styles.text_header}>{section.title}</Text>   
        </View>
      )}
      refreshControl={
        <RefreshControl
           refreshing = {Refreshing}
           onRefresh={onRefresh}
         />
      }     
    />
  );
};

const styles = StyleSheet.create({
  body :{
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#ffffff',  
  },
  item:{
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 4,   
    borderRightWidth : 4, 
    borderBottomWidth : 4,
    borderTopWidth: 4, 
  },
  item1:{
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomWidth : 1,
  },  
  text_header:{
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
  text_item:{
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },
});

export default App;