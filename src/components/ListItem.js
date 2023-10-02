import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import moment from 'moment';
import { WeatherType } from '../utils/WeatherType';

const ListItem = ({dt_text,temp_max,temp_min,main}) => {
  return (
    <View style={styles.item}>
      <Feather name={WeatherType[main]?.icon}size={50} color="white" />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.date}>{moment(dt_text).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_text).format('h:mm:ss a')}</Text>

      </View>
      <Text style={styles.temp}>{`${Math.round(temp_min)}° / ${Math.round(temp_max)}°`}</Text>


    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    padding:20,
    marginHorizontal:16,
    marginVertical:8,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:5,
    backgroundColor:'indianred'
  },
  temp:{
    color:'white',
    fontSize:20
  },
  date:{
    color:'white',
    fontSize:15
  },
  dateTextWrapper:{
    flexDirection:'column',
  }
})

export default ListItem
