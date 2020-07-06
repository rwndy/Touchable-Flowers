import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>🎍 My Flowers</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3282b8',
    height: 80,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Header