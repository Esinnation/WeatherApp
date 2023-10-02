import { SafeAreaView ,StyleSheet,FlatList,StatusBar,ImageBackground} from 'react-native'
import React from 'react'
import ListItem from '../components/ListItem';


const renderItem =({item})=>(
  <ListItem dt_text={item.dt_text} temp_max={item.main.temp_max} temp_min={item.main.temp_min} main={item.weather[0].main}/>
)

const UpcomingWeather = ({weatherData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={  require('../../assets/upcomming-background.jpg')} style={styles.image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item=>item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1 ,
    backgroundColor:'royalblue',
  },
  image:{
    flex:1,
    paddingTop: StatusBar.currentHeight || 0,

  }
})
export default UpcomingWeather