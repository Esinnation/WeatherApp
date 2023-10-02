import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,StatusBar,ImageBackground} from 'react-native'
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';
import momment from 'moment';
import moment from 'moment';


const City = ({weatherData}) => {
  const {cityName,cityText,contaner,countryName,imageLayout,riseSetText,riseSetWrapper,rowLayout,populationText,populationWrapper}= styles
  const {name,country,population,sunrise,sunset}= weatherData
  return (
    <SafeAreaView style={contaner}>
      <ImageBackground source={  require('../../assets/city-background.jpg')} style={imageLayout}>
        <Text style={[cityName,cityText]}>{name}</Text>
        <Text style={[countryName,cityText]}>{country}</Text>
        <View style={[populationWrapper,rowLayout]}>
          <IconText iconName={'user'} iconColor={"red"} text={`Population: ${population}`} textStyles={populationText} />
        </View>
        <View style={[riseSetWrapper,rowLayout]}>
          <IconText iconName={'sunrise'} iconColor={"white"} text={momment(sunrise).format('h:mm:ss a')} textStyles={riseSetText} />
          <IconText iconName={'sunset'} iconColor={"white"} text={moment(sunset).format('h:mm:ss a')} textStyles={riseSetText} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contaner:{
    flex:1,

  },
  imageLayout:{
    flex:1,
    paddingTop: StatusBar.currentHeight || 0,

  },
  cityName:{
    fontSize:40,
    
  },
  countryName:{
    fontSize:30
  },
  cityText:{
    justifyContent:'center',
    alignSelf: 'center',
    fontWeight:'bold',
    color:'white'
  },
  populationWrapper:{
    justifyContent:'center',
    marginTop:30
  },
  populationText:{
    fontSize:25,
    marginLeft:7.5,
    color:'red',
  },
  riseSetWrapper:{
    justifyContent:'space-around',
    marginTop:30
  },
  riseSetText:{
    fontSize:20,
    color:'white',
  },
  rowLayout:{
    flexDirection:'row',
    alignItems:'center',
  }
})

export default City
