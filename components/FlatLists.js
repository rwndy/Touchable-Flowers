import React, { useState } from 'react'
import { View,Text, StyleSheet, FlatList, TouchableOpacity  } from 'react-native'

const FlatLists = () => {
  const data_flowers = [
    {id: '1', name: 'Bunga Mawar' },
    {id: '2', name: 'Bunga Kamboja'},
    {id: '3', name: 'Bunga Raflesia'},
    {id: '4', name: 'Bunga Melati'},
    {id: '5', name: 'Bunga Bank' },
    {id: '6', name: 'Bunga Terakhir'},
    {id: '7', name: 'Bunga Plastik'},
    {id: '8', name: 'Bunga dahlia'},
    {id: '9', name: 'Bunga Lon'}
  ]

  const [flowers, setFlowers] = useState(data_flowers)

  // menghapus list
  // jika id-nya tidak sama maka akan dihapus
  const deleteItems = id => {
    setFlowers(prevState => {
     return prevState.filter(flower => flower.id != id)
    })
  }


  return(
    <View style={stlyes.wrapItem}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={flowers}
        renderItem={( { item } ) => (
          <TouchableOpacity onPress={() => deleteItems(item.id)}>
            <Text style={stlyes.lists}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  lists: {
    backgroundColor: '#3282b8',
    color: '#FFF',
    fontSize: 16,
    marginTop: 24,
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 25
  },
  wrapItem: {
    marginBottom: 50
  }
})


export default FlatLists