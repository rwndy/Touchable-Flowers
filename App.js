import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Button,
  Text,
} from 'react-native';
import FlatLists from './components/FlatLists'
import Header from './components/Header/Header'

const App = () =>  {

  return (
    <>
      <StatusBar translucent  backgroundColor={'#3282b8'} />
        <View style={styles.container}>
          <Header />
          <FlatLists />
        </View>
        
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f4068',
    flex: 1,
  },
  
});

export default App;
