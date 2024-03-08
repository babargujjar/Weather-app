import React from 'react'
import { useLocation } from 'react-router-dom'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"
import thermometer from "./../../assets/icons/thermometer-simple-light.png"
import cloudrain from "./../../assets/icons/cloud-rain-light.png"
import droplight from "./../../assets/icons/drop-light.png"
import sundim from "./../../assets/icons/sun-dim-light.png"
import windlight from "./../../assets/icons/wind-light.png"
import CurrentWeather from '../../components/currentweather/CurrentWeather'
import OtherDetails from '../../components/otherwaetherdetals/OtherDetails'
import FiveDays from '../../components/weatherforcast/FiveDays'

const WeatherDetails = () => {
    const location = useLocation();
    const queryParams = location.search
    console.log(queryParams)
    return (

        <div className='grid grid-cols-2 h-full w-full gap-5 max-w-[1318px] max-h-[720px] mx-auto py-6  '>
            {/* current temperature section */}
            <div className=' w-100vw lg:w-full h-full col-span-2 lg:col-span-1 [background-color:#16161F] p-4 rounded-lg'>
               <CurrentWeather />
            </div>

            {/* other five days temperature section and other details about weather */}
            <div className='w-full h-full  col-span-2 lg:col-span-1 flex flex-col gap-3 grid-cols-5'>
                {/* other weather details */}
                <OtherDetails />
                {/* five days temperature */}
           <FiveDays />              


            </div>
        </div>

    )
}

export default WeatherDetails