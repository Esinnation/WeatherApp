import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState,useEffect} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(count) 
  },[count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>count: {count}</Text>
      <Button 
        color={'red'} 
        
        title={'Increase'} 
        onPress={()=>{
          setCount(count + 1);
        }} />
      <Button   
      color={'green'} 
      title={'Decrease'} 
      onPress={()=>{
        setCount(count - 1);
      }} /> 
          </View>
        )
      }


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'orange'
    },
    title:{
      alignSelf: 'center',
      marginTop:25
    }
})
export default Counter
