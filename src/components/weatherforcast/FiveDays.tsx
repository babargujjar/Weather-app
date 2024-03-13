import React from 'react'
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
import { getWeatherForecast } from '../../redux/weatherForecastSlice'
import { useEffect, useState } from 'react'
import { WeatherResponse } from '../../types/types'
import { log } from 'console'


const FiveDays = ({ lat, lon }: any) => {
    const [fiveDaysForecast, setFiveDaysForecast] = useState<WeatherResponse[] | null>(null);
    const dispatch = useAppDispatch()
    const weatherForecast: any = useAppSelector(state => state.WeatherForecast.data)
    // console.log('weatherForecast', weatherForecast)

    useEffect(() => {
        dispatch(getWeatherForecast({ lat, lon }))
    }, [lat, lon, dispatch])

    interface WeatherData {
        dt: number; // timestamp
        main: {
            temp: number;
        };
        weather: {
            description: string;
        }[];
    }

    async function getWeatherForecasts(): Promise<WeatherData[]> {


        try {

            const weatherList: WeatherData[] = weatherForecast?.list;

            const transformedData: WeatherData[] = [];

            for (let i = 0; i < weatherList?.length; i += 4) {
                transformedData.push(weatherList[i]);
            }
            return transformedData;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    }
    console.log(getWeatherForecasts())

    const getNextDays = () => {
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        // Get the current date
        const currentDate = new Date();

        // Create an array to store the names of the next 5 days
        const nextDays = [];

        for (let i = 1; i <= 5; i++) {
            // Calculate the index of the next day
            const nextDayIndex = (currentDate.getDay() + i) % 7;

            // Determine the day name based on the index
            const dayName = i === 1 ? "Tomorrow" : daysOfWeek[nextDayIndex];

            // Push the name of the next day to the array
            nextDays.push(dayName);
        }
        return nextDays;
    };
    const nextDays = getNextDays();
    let nextDayOne = nextDays[0];
    let nextDayTwo = nextDays[1];
    let nextDayThree = nextDays[2];
    let nextDayFour = nextDays[3];
    let nextDayFifth = nextDays[4];
      //  weather icons condition function start

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

    // forecast data start
    const uniqueFiveForecastDays: number[] = [];
    let list = weatherForecast?.list;
    // console.log(list)

    const sixDayForecast = (list ?? []).filter((forecast: any) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueFiveForecastDays.includes(forecastDate)) {
            uniqueFiveForecastDays.push(forecastDate);
            return true;
        }
        return false;
    });
    // console.log(sixDayForecast)

    let fiveDaysForcast = sixDayForecast.slice(1);

    let firstDay = fiveDaysForcast[0];
    let secondDay = fiveDaysForcast[1];
    let thirdDay = fiveDaysForcast[2];
    let forthDay = fiveDaysForcast[3];
    let fifthDay = fiveDaysForcast[4];
    //  extracting values in variable start
    // first Day start
    const kelvinToCelsius = (tempInKelvin: number, decimalPlaces: number = 0) => (tempInKelvin - 273.15).toFixed(decimalPlaces);
    let firstDayIcon =
        firstDay && firstDay.weather && firstDay.weather[0]
            ? firstDay.weather[0].icon
            : "01d";
    let firstDayMaxTemp = firstDay && firstDay.main && firstDay.main.temp_max;
    firstDayMaxTemp = kelvinToCelsius(firstDayMaxTemp);
    let firstDayMinTemp = firstDay && firstDay.main && firstDay.main.temp_min;
    firstDayMinTemp = kelvinToCelsius(firstDayMinTemp);
    let firstDayDescription =
        firstDay &&
        firstDay.weather &&
        firstDay.weather[0] &&
        firstDay.weather[0].description;
    // first Day end
    // Second Day Start
    let secondDayIcon =
        secondDay && secondDay.weather && secondDay.weather[0]
            ? secondDay.weather[0].icon
            : "01d";
    let secondDayMaxTemp = secondDay && secondDay.main && secondDay.main.temp_max;
    secondDayMaxTemp = kelvinToCelsius(secondDayMaxTemp);
    let secondDayMinTemp = secondDay && secondDay.main && secondDay.main.temp_min;
    secondDayMinTemp = kelvinToCelsius(secondDayMinTemp);
    let secondDayDescription =
        secondDay &&
        secondDay.weather &&
        secondDay.weather[0] &&
        secondDay.weather[0].description;
    // Second Day end
    // third day start
    let thirdDayIcon =
        thirdDay && thirdDay.weather && thirdDay.weather[0]
            ? thirdDay.weather[0].icon
            : "01d";
    let thirdDayMaxTemp = thirdDay && thirdDay.main && thirdDay.main.temp_max;
    thirdDayMaxTemp = kelvinToCelsius(thirdDayMaxTemp);
    let thirdDayMinTemp = thirdDay && thirdDay.main && thirdDay.main.temp_min;
    thirdDayMinTemp = kelvinToCelsius(thirdDayMinTemp);
    let thirdDayDescription =
        thirdDay &&
        thirdDay.weather &&
        thirdDay.weather[0] &&
        thirdDay.weather[0].description;
    // third day end
    // forth Day start
    let forthDayIcon =
        forthDay && forthDay.weather && forthDay.weather[0]
            ? forthDay.weather[0].icon
            : "01d";
    let forthDayMaxTemp = forthDay && forthDay.main && forthDay.main.temp_max;
    forthDayMaxTemp = kelvinToCelsius(forthDayMaxTemp);
    let forthDayMinTemp = forthDay && forthDay.main && forthDay.main.temp_min;
    forthDayMinTemp = kelvinToCelsius(forthDayMinTemp);
    let forthDayDescription =
        forthDay &&
        forthDay.weather &&
        forthDay.weather[0] &&
        forthDay.weather[0].description;
    // forth Day end
    // fifth Day Start
    let fifthDayIcon =
        fifthDay && fifthDay.weather && fifthDay.weather[0]
            ? fifthDay.weather[0].icon
            : "01d";
    let fifthDayMaxTemp = fifthDay && fifthDay.main && fifthDay.main.temp_max;
    fifthDayMaxTemp = kelvinToCelsius(fifthDayMaxTemp);
    let fifthDayMinTemp = fifthDay && fifthDay.main && fifthDay.main.temp_min;
    fifthDayMinTemp = kelvinToCelsius(fifthDayMinTemp);
    let fifthDayDescription =
        fifthDay &&
        fifthDay.weather &&
        fifthDay.weather[0] &&
        fifthDay.weather[0].description;
    // fifth Day end
    //  extracting values in variable end
    // forecast data end





    return (
        <>
            <div className='col-span-2 lg:w-[630px] lg:h-[306px] h-full overflow-hidden rounded-lg [background-color:#16161F]'>
                <h2 className='text-[#535364] lg:pl-[24px] lg:mt-[28px] text-lg'>Previsão para 5 dias</h2>
                <div className='flex text-white lg:m-[24px] items-center'>
                    <div className='flex w-full lg:py-[28px] lg:px-[9px] items-center justify-center flex-col'>
                        <h6 className='text-[#a1a1b3] text-[13px]'>{nextDayOne}</h6>
                        <img className='lg:w-[67px] lg:h-[67px]' src={weatherIconCondition(firstDayIcon ?? cloudy)} alt="" />
                        <h6 className=' text-[#a1a1b3] text-[13px]'>{firstDayDescription}</h6>
                        <h3>{firstDayMaxTemp}ºc <span className='text-[#7F7F98]'>{firstDayMinTemp}ºc</span></h3>
                    </div>
                    <div className='flex w-full lg:py-[28px] lg:px-[9px] justify-center items-center flex-col'>
                        <h6 className='text-[#a1a1b3] text-[13px]'>{nextDayTwo}</h6>
                        <img className='lg:w-[67px] lg:h-[67px]' src={weatherIconCondition(secondDayIcon ?? cloudy)} alt="" />
                        <h4 className='text-[#a1a1b3] text-[13px]'>{secondDayDescription}</h4>
                        <h3>{secondDayMaxTemp}ºc <span className='text-[#535364]'>{secondDayMinTemp}ºc</span></h3>
                    </div>
                    <div className='flex lg:py-[28px] w-full lg:px-[9px] justify-center items-center flex-col'>
                        <h6 className='text-[#a1a1b3] text-[13px]'>{nextDayThree}</h6>
                        <img className='lg:w-[67px] lg:h-[67px]' src={weatherIconCondition(thirdDayIcon ?? cloudy)} alt="" />
                        <h4 className='text-[#a1a1b3] text-[13px]'>{thirdDayDescription}</h4>
                        <h3>{thirdDayMaxTemp}ºc <span className='text-[#535364]'>{thirdDayMinTemp}ºc</span></h3>
                    </div>
                    <div className='flex w-full lg:py-[28px] lg:px-[9px] justify-center items-center flex-col'>
                        <h6 className='text-[#a1a1b3] text-[13px]'>{nextDayFour}</h6>
                        <img className='lg:w-[67px] lg:h-[67px]' src={weatherIconCondition(forthDayIcon ?? cloudy)} alt="" />
                        <h4 className='text-[#a1a1b3] text-[13px]'>{forthDayDescription}</h4>
                        <h3>{forthDayMaxTemp}ºc <span className='text-[#535364]'>{forthDayMinTemp}ºc</span></h3>
                    </div>
                    <div className='flex w-full lg:py-[28px] lg:px-[9px] justify-center items-center flex-col'>
                        <h6 className='text-[#a1a1b3] text-[13px]'>{nextDayFifth}</h6>
                        <img className='lg:w-[67px] lg:h-[67px]' src={weatherIconCondition(fifthDayIcon ?? cloudy)} alt="" />
                        <h4 className='text-[#a1a1b3] text-[13px]'>{fifthDayDescription}</h4>
                        <h3>{fifthDayMaxTemp}ºc <span className='text-[#535364]'>{fifthDayMinTemp}ºc</span></h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FiveDays;