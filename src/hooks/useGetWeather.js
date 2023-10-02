import {useState,useEffect} from 'react'
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env'


export const useGetWeather= ()=>{
  const [loading, setLoading] = useState(false)
  const [longitude, setLongitude] = useState([])
  const [latitude, setLatitude] = useState([])
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const fetchWeatherData = async()=>{
    try {
      
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
      const data= await res.json()
      setWeather(data)
    } catch (e) {
      setError('Could not fetch weather')
    } finally{
      setLoading(false)

    }
  }

  useEffect(()=>{
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      await fetchWeatherData()
    })();
  },[longitude,latitude])
  return [loading,error,weather]
}