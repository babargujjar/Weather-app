import React, { useEffect } from 'react'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCurrentWeather } from '../../redux/currentWeatherSlice'
import { WeatherType } from '../../redux/currentWeatherSlice'

const CurrentWeather = ({ lat, lon }: any) => {

  interface Coord {
    lon: number;
    lat: number;
  }

  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  interface Clouds {
    all: number;
  }

  interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
  }

  interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }


  const dispatch = useAppDispatch()
  const currentWeather = useAppSelector(state => state.CurrentWeather)

  console.log(currentWeather.data)
  const weather = currentWeather.data

  const tempKtoC = (value: number, decimalPlaces: number = 0) => {
    const newValue = (value - 273).toFixed(decimalPlaces)
    return parseFloat(newValue)
  }

  interface FormattedDate {
    year: number;
    month: string;
    day: number;
    hour: number;
    minute: number;
    second: number;
  }

  const formatDate = (timestamp: number | undefined): FormattedDate | null => {
    if (!timestamp) {
      return null;
    }

    const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds

    const formattedDate: FormattedDate = {
      year: date.getFullYear(),
      month: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date),
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    return formattedDate;
  };
  const formattedDate = formatDate(weather?.dt);

  // console.log(formattedDate);


  useEffect(() => {
    dispatch(getCurrentWeather({ lat, lon }))
  }, [lat, lon, dispatch])

  return (
    <>
      <div className='flex flex-row gap-3 h-14 mb-4'>
        <div className='h-full p-2 [background-color:#1C1C27] rounded-lg'><img className='h-10 w-10   ' src={Logos} alt="" /></div>
        <input className='w-full h-full rounded-lg px-5 [background-color:#1C1C27] ' type="search" placeholder='Buscar Local' />
      </div>
      <div className='flex flex-col justify-between px-4 sm:px-7 py-3 sm:py-7 cardbg overflow-hidden object-cover relative text-white text-xl'>
        <div className='flex justify-between '>
          <div>
            <h1 className='text-[17px] sm:text-2xl'>{weather?.name}</h1>
            <h2 className='text-[15px] sm:text-2xl'>{formattedDate?.month} ,{formattedDate?.day} ,{formattedDate?.year}</h2>
          </div>
          <div>
            <h2 className='text-[15px] sm:text-2xl'>{formattedDate?.hour}:{formattedDate?.minute}</h2>
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