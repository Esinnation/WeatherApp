import { StyleSheet, Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import React from 'react'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry something went wrong</Text>
      <Feather name='frown' size={100} color={'white'}/>
    </View>
  )
}

export default ErrorItem

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  errorMessage:{
    fontSize:30,
    color:'white',
    marginHorizontal:10,
    textAlign:'center',
  }
})