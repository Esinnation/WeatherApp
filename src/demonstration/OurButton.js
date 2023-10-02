import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const OurButton = () => {
  const onPress = () => {
    console.log('Press;')
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>OurButton</Text>
    </TouchableOpacity>
  )
}

export default OurButton

const styles = StyleSheet.create({
  container:{
    elevation:8,
    backgroundColor:'blue',
    borderRadius:10,
    padding:5
  },
  text:{
    fontSize:15,
    color:'white',
    alignSelf: 'center',
  }
})