import React from 'react'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"
import thermometer from "./../../assets/icons/thermometer-simple-light.png"
import cloudrain from "./../../assets/icons/cloud-rain-light.png"
import droplight from "./../../assets/icons/drop-light.png"
import sundim from "./../../assets/icons/sun-dim-light.png"
import windlight from "./../../assets/icons/wind-light.png"
import clearday from "./../../assets/icons/Clear/Day.png"
import clearnight from "./../../assets/icons/Clear/Night.png"
import cloudyday from "./../../assets/icons/Cloudy/Day.png"
import fewcloudday from "./../../assets/icons/Few clouds/Day.png"
import fewcloudnight from "./../../assets/icons/Few clouds/Night.png"
import rainday from "./../../assets/icons/Rain/Day.png"
import stormday from "./../../assets/icons/Storm/Day.png"

const WeatherDetails = () => {
    return (
 
        <div className='grid grid-cols-2 h-full w-full gap-5 max-w-[1318px] max-h-[720px] mx-auto py-6  '>
            {/* current temperature section */}
            <div className=' w-100vw lg:w-full h-full col-span-2 lg:col-span-1 [background-color:#16161F] p-4 rounded-lg'>
                <div className='flex gap-3 h-14 mb-4 '>
                    <div className='h-full p-2 [background-color:#1C1C27] rounded-lg'><img className='h-10 w-10   ' src={Logos} alt="" /></div>
                    <input className='w-full h-full rounded-lg px-5 [background-color:#1C1C27] ' type="search" placeholder='Buscar Local' />
                </div>
                <div className='flex flex-col justify-between px-4 sm:px-7 py-3 sm:py-7 cardbg overflow-hidden object-cover relative text-white text-xl'>
                    <div className='flex justify-between '>
                        <div>
                            <h1 className='text-[17px] sm:text-2xl'>Pindi Gheb,PK</h1>
                            <h2 className='text-[15px] sm:text-2xl'>Date</h2>
                        </div>
                        <div>
                            <h2 className='text-[15px] sm:text-2xl'>Time</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between  '>
                        <div className=''>
                            <h2 className='sm:text-7xl md:text-8xl text-4xl font-bold'>15ºC</h2><br />
                            <div className='flex-col md:flex'><h3 className='text-xl sm:text-3xl font-semibold'>15ºC / 15ºC</h3> <h6 className=' sm:text-3xl text-[15px]'>few clouds</h6></div>
                        </div>
                        <div className='  '>
                            <img className='absolute w-[35%] sm:w-[30%] lg:w-[45%]  right-0 bottom-0' src={Day} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            {/* other five days temperature section and other details about weather */}
            <div className='w-full h-full  col-span-2 lg:col-span-1 flex flex-col gap-3 grid-cols-5'>
                {/* other weather details */}
                <div className='text-white  rounded-lg h-full  [background-color:#16161F] px-7 pt-7 col-span-3'>
                    <h2 className='text-[#535364] mb-6 text-lg'>More Weather Details</h2>
                    <div>
                        <div className='flex items-center border-b border-[#282831] py-3 justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[30px] [color:#535364]' src={thermometer} alt="" /> <h3 className='text-md text-[#a1a1b3]'>Feels Like</h3>
                            </div>
                            <h2 className='text-xl'>26 C</h2>
                        </div>
                        <div className='flex items-center border-b border-[#282831] py-3 justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[30px] [color:#535364]' src={cloudrain} alt="" /> <h3 className='text-md text-[#a1a1b3]'>Probability of Rain</h3>
                            </div>
                            <h2 className='text-xl'>0%</h2>
                        </div>
                        <div className='flex items-center border-b border-[#282831] py-3 justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[30px] [color:#535364]' src={windlight} alt="" /> <h3 className='text-md text-[#a1a1b3]'>Wind Speed</h3>
                            </div>
                            <h2 className='text-xl'>8 km/h</h2>
                        </div>
                        <div className='flex items-center border-b border-[#282831] py-3 justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[30px] [color:#535364]' src={droplight} alt="" /> <h3 className='text-md text-[#a1a1b3]'>Air Humidity</h3>
                            </div>
                            <h2 className='text-xl'>40%</h2>
                        </div>
                        <div className='flex items-center py-3 justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[30px] [color:#535364]' src={sundim} alt="" /> <h3 className='text-md text-[#a1a1b3]'>UV Index</h3>
                            </div>
                            <h2 className='text-xl'>5</h2>
                        </div>
                    </div>
                </div>
                {/* five days temperature */}
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


            </div>
        </div>
        
    )
}

export default WeatherDetails