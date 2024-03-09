import React from 'react'
import clearday from "./../../assets/icons/Clear/Day.png"
import clearnight from "./../../assets/icons/Clear/Night.png"
import cloudyday from "./../../assets/icons/Cloudy/Day.png"
import fewcloudday from "./../../assets/icons/Few clouds/Day.png"
import fewcloudnight from "./../../assets/icons/Few clouds/Night.png"
import rainday from "./../../assets/icons/Rain/Day.png"
import stormday from "./../../assets/icons/Storm/Day.png"
import { useAppDispatch,useAppSelector } from '../../redux/hooks'
import { getWeatherForecast } from '../../redux/weatherForecast'
import { useEffect } from 'react'

const FiveDays = ({ lat, lon }: any) => {


    const dispatch = useAppDispatch()
    const weatherForecast = useAppSelector(state => state.CurrentWeather)

    // console.log(currentWeather.data)
    const forecast = weatherForecast.data
    console.log(forecast)

    useEffect(() => {
        dispatch(getWeatherForecast({ lat, lon }))
    }, [lat, lon, dispatch])
    return (
        <>
            <div className='col-span-2 p-4 gap-2 h-full rounded-lg [background-color:#16161F]'>
                <h2 className='text-[#535364] mb-4 text-lg'>Previsão para 5 dias</h2>
                <div className='flex text-white w-full justify-between items-center px-2'>
                    <div className='flex items-center flex-col'>
                        <h6 className='text-[#a1a1b3]'>Tomorrow</h6>
                        <img className='w-[50px]' src={rainday} alt="" />
                        <h6 className=' text-sm text-[#a1a1b3]'>Thunderstorm</h6>
                        <h3>32c <span className='text-[#535364]'>27c</span></h3>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h6 className='text-[#a1a1b3]'>Tomorrow</h6>
                        <img className='w-12' src={rainday} alt="" />
                        <h4 className='text-[#a1a1b3] text-sm'>Thunderstorm</h4>
                        <h3>32c <span className='text-[#535364]'>27c</span></h3>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h6 className='text-[#a1a1b3]'>Tomorrow</h6>
                        <img className='w-12' src={rainday} alt="" />
                        <h4 className='text-[#a1a1b3] text-sm'>Thunderstorm</h4>
                        <h3>32c <span className='text-[#535364]'>27c</span></h3>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h6 className='text-[#a1a1b3]'>Tomorrow</h6>
                        <img className='w-12' src={rainday} alt="" />
                        <h4 className='text-[#a1a1b3] text-sm'>Thunderstorm</h4>
                        <h3>32c <span className='text-[#535364]'>27c</span></h3>
                    </div>
                    <div className='flex items-center flex-col'>
                        <h6 className='text-[#a1a1b3]'>Tomorrow</h6>
                        <img className='w-12' src={rainday} alt="" />
                        <h4 className='text-[#a1a1b3] text-sm'>Thunderstorm</h4>
                        <h3>32c <span className='text-[#535364]'>27c</span></h3>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FiveDays