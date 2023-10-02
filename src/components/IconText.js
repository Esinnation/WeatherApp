import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';


const IconText = ({iconName,iconColor,text,textStyles}) => {
  const {container,textTheme}= styles
  return (
    <View style={[container]}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme,textStyles]}>{text}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  textTheme:{
    fontWeight: 'bold',
  },
  container:{
    alignItems:'center',
  }
})