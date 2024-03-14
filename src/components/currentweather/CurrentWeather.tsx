import React, { useEffect } from 'react'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"
import cloudy from "./../../assets/icons/cloudyDay.png";

import clearDaySun from "./../../assets/icons/clearDaySun.png"
import clearNightMoon from "./../../assets/icons/clearNight.png"

import fewCloudyDay from "./../../assets/icons/fewCloudsDay.png"
import fewCloudyNight from "./../../assets/icons/fewCloudsNight.png"

import cloudyDay from "./../../assets/icons/cloudyDay.png"
import cloudyNight from "./../../assets/icons/cloudyNight.png";

import rainDay from "./../../assets/icons/rainDay.png";
import rainNight from "./../../assets/icons/rainNight.png";

import snowNight from "./../../assets/icons/snowNight.png";
import snowDay from "./../../assets/icons/stormDay.png";

import stormDay from "./../../assets/icons/stormDay.png";
import stormNight from "./../../assets/icons/snowNight.png";

import mistDay from "./../../assets/icons/fogSun.png";
import mistNight from "./../../assets/icons/foggyMoon.png";
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCurrentWeather } from '../../redux/currentWeatherSlice'
import { WeatherType } from '../../redux/currentWeatherSlice'

const CurrentWeather = ({ lat, lon }: any) => {
  const dispatch = useAppDispatch()
  const currentWeather = useAppSelector(state => state.CurrentWeather.data)
  const weather = currentWeather
  // console.log(weather)

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

  const weatherIconCondition = (dayIcon: string) => {
    switch (dayIcon) {
      case "01d":
        return clearDaySun;
      case "01n":
        return clearNightMoon;
      case "02d":
        return fewCloudyDay;
      case "02n":
        return fewCloudyNight;
      case "03d":
        return cloudyDay;
      case "03n":
        return cloudyNight;
      case "04d":
        return fewCloudyDay;
      case "04n":
        return fewCloudyNight;
      case "09d":
        return rainDay;
      case "09n":
        return rainNight;
      case "10d":
        return rainDay;
      case "10n":
        return rainNight;
      case "11d":
        return stormDay;
      case "11n":
        return stormNight;
      case "13d":
        return snowDay;
      case "13n":
        return snowNight;
      case "50d":
        return mistDay;
      case "50n":
        return mistNight;
      default:
        // Handle unexpected input gracefully
        return cloudy;
    }
  };




  const tempKtoC = (value: number, decimalPlaces: number = 0) => {
    const newValue = (value - 273).toFixed(decimalPlaces)
    return parseFloat(newValue)
  }
  // first Day start
  let currentTempIcon =
    weather && weather.weather && weather.weather[0]
      ? weather.weather[0].icon
      : "01d";

  // first Day end

  const isWeatherValid = (data: WeatherType | null): data is WeatherType => {
    return data !== null && data !== undefined;
  };

  useEffect(() => {
    dispatch(getCurrentWeather({ lat, lon }))
  }, [lat, lon, dispatch])

  return (
    <>
        <div className='flex lg:gap-3 max-w-[335px] md:max-w-full gap-2 h-14 mb-4 '>
          <div className='h-full p-2 [background-color:#1C1C27] rounded-lg'>
          <img className='h-10 w-10' src={Logos} alt="" /></div>
          <input className='w-full h-full rounded-lg px-5 [background-color:#1C1C27] ' type="search" placeholder='Buscar Local' />
        </div>
          <div className='flex flex-col justify-between object-cover overflow-hidden cardbg relative px-5 lg:px-7 py-5 lg:py-7  text-white text-xl'>
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
              <div>
                <h2 className='sm:text-7xl md:text-8xl text-4xl font-bold'>{weather?.main ? tempKtoC(weather.main.temp, 0) : 'Loading...'}ºC</h2><br />
                <div className='flex-col md:flex'><h3 className='text-lg sm:text-3xl font-semibold'>{weather?.main ? tempKtoC(weather.main.temp_max, 0) : 'Loading...'}ºC / {weather?.main ? tempKtoC(weather.main.temp_min, 0) : 'Loading...'}ºC</h3>
                  <div className='h-[20px]'>
                    <p className=' sm:text-3xl h-full text-[14px]'>{weather?.weather[0].description}</p>
                  </div>
                </div>
              </div>
              <div>
                <img className='absolute max-w-[35%] sm:w-[30%] lg:max-w-[45%]  right-0 bottom-0' src={weatherIconCondition(currentTempIcon)} alt="" />
              </div>
            </div>
          </div>
    </>

  )
}

export default CurrentWeather