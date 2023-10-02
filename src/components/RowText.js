import {  Text, View } from 'react-native'
import React from 'react'


const RowText = ({messageOne,messageTwo,messageOneStyles,messageTwoStyles,containerStyles}) => {
  return (
    <View style={containerStyles}>
          <Text style={messageOneStyles}  >{messageOne} </Text>
          <Text style={messageTwoStyles}  >{messageTwo}</Text>
        </View>
  )
}

export default RowText
