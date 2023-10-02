import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs'
import { ActivityIndicator } from 'react-native';
import { View ,StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';


const App = () => {
  
  const [loading,error,weather] = useGetWeather()
 
  if(weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
  
    )
  }
  return (
    <View style={styles.container}>
    {error ?<ErrorItem/>: <ActivityIndicator size='large' color='blue'  />}
    </View>
  )
  
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
  }
})
export default App