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

    const queryParams = new URLSearchParams(location.search)

    var lon = queryParams.get("lon")

    var lat = queryParams.get("lat")

    // console.log(lon,lat)

    return (
        <div className='w-full h-[812px] lg:h-[768px] bg-[#13131A] '>
            {/* <div className='grid grid-cols-2 h-full w-full gap-5 max-w-[1318px] max-h-[720px] mx-auto py-6  '> */}
            {/* current temperature section */}
            <div className='flex flex-col lg:flex-row lg:max-w-[1318px] lg:max-h-[720px] gap-[8px] lg:gap-[23px] p-[8px] lg:p-[24px]'>
                <div className='p-[12px] lg:p-5 max-w-[359px] max-h-[398px] lg:w-[664px] lg:max-h-[720px] col-span-2 lg:col-span-1 bg-[#16161F] rounded-lg'>
                    <CurrentWeather lat={lat ?? ""} lon={lon ?? ""} />
                </div>

                {/* other five days temperature section and other details about weather */}
                <div className='lg:max-w-[630px] max-h-[720px] max-w-full'>
                    <div className='  col-span-2 lg:col-span-1 max-h-full flex flex-col gap-2 md:gap-3 grid-cols-5'>
                        {/* other weather details */}

                        <OtherDetails lat={lat ?? ""} lon={lon ?? ""} />

                        {/* five days temperature */}

                        <FiveDays lat={lat ?? ""} lon={lon ?? ""} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails