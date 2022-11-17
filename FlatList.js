import { View, Text, FlatList,StyleSheet} from 'react-native'
import React from 'react'


const DATA = [
    {
      id: '3',
      title: 'primero',
    },
    
    {
      id: '2',
      title: 'segundo',
    },

    {
      id: '3',
      title: 'tercero',
    },
    {
        id: '4',
        title:'cuarto'
    },
    {
        id: '5',
        title:'quinto'
    },
    


  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default FlatList