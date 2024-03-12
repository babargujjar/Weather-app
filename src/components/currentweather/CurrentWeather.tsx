import React, { useEffect } from 'react'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCurrentWeather } from '../../redux/currentWeatherSlice'
import { WeatherType } from '../../redux/currentWeatherSlice'

const CurrentWeather = ({ lat, lon }: any) => {
  const dispatch = useAppDispatch()
  const currentWeather = useAppSelector(state => state.CurrentWeather.data)
  const weather = currentWeather

  interface CustomDateTime {
    day: string;
    dayName: string;
    month: string;
    year: number;
    hours: string;
    minutes: string;
    seconds: string;
  }

  function convertTimestampToCustomDateTimeObject(timestamp: number, monthNames: string[], dayNames: string[]): CustomDateTime {
    const date = new Date(timestamp * 1000);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const monthName = monthNames[month] || [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ][month];
    const dayName = dayNames[date.getDay()] || 'Unknown';

    return {
      day,
      dayName,
      month: monthName,
      year,
      hours,
      minutes,
      seconds
    };
  }

  // Example usage
  const timestamp = weather?.dt ?? 0;
  const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const customDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednasday', 'Thursday', 'Friday', 'Saturday'];
  const customDateTimeObject = convertTimestampToCustomDateTimeObject(timestamp, customMonthNames, customDayNames);
  // console.log("Converted custom date and time object:", customDateTimeObject);


  



  const tempKtoC = (value: number, decimalPlaces: number = 0) => {
    const newValue = (value - 273).toFixed(decimalPlaces)
    return parseFloat(newValue)
  }

  const isWeatherValid = (data: WeatherType | null): data is WeatherType => {
    return data !== null && data !== undefined;
  };

  useEffect(() => {
    dispatch(getCurrentWeather({ lat, lon }))
  }, [lat, lon, dispatch])

  return (
    <>
      <div className='flex gap-3 h-14 mb-4 '>
        <div className='h-full p-2 [background-color:#1C1C27] rounded-lg'><img className='h-10 w-10   ' src={Logos} alt="" /></div>
        <input className='w-full h-full rounded-lg px-5 [background-color:#1C1C27] ' type="search" placeholder='Buscar Local' />
      </div>
      <div className='flex flex-col justify-between px-4 sm:px-7 py-3 sm:py-7 cardbg overflow-hidden object-cover relative text-white text-xl'>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-[17px] sm:text-2xl'>{weather?.name}</h1>
            <h2 className='text-[15px] sm:text-2xl'>{customDateTimeObject.dayName},{customDateTimeObject.month}{customDateTimeObject.day},{customDateTimeObject.year}</h2>
          </div>
          <div>
            <h2 className='text-[15px] sm:text-2xl'>{customDateTimeObject.hours}:{customDateTimeObject.minutes}</h2>
          </div>
        </div>
        <div className='flex items-center justify-between  '>
          <div className=''>
            <h2 className='sm:text-7xl md:text-8xl text-4xl font-bold'>{weather?.main ? tempKtoC(weather.main.temp, 0) : 'Loading...'}ºC</h2><br />
            <div className='flex-col md:flex'><h3 className='text-xl sm:text-3xl font-semibold'>{weather?.main ? tempKtoC(weather.main.temp_max, 0) : 'Loading...'}ºC / {weather?.main ? tempKtoC(weather.main.temp_min, 0) : 'Loading...'}ºC</h3> <h6 className=' sm:text-3xl text-[15px]'>{weather?.weather[0].description}</h6></div>
          </div>
          <div className='  '>
            <img className='absolute w-[35%] sm:w-[30%] lg:w-[45%]  right-0 bottom-0' src={Day} alt="" />
          </div>
        </div>

      </div>
    </>

  )
}

export default CurrentWeather