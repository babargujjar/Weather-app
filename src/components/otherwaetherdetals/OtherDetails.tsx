import React from 'react'
import thermometer from "./../../assets/icons/thermometer-simple-light.png"
import cloudrain from "./../../assets/icons/cloud-rain-light.png"
import droplight from "./../../assets/icons/drop-light.png"
import sundim from "./../../assets/icons/sun-dim-light.png"
import windlight from "./../../assets/icons/wind-light.png"

const OtherDetails = () => {
  return (
    <>
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
    </>
  )
}

export default OtherDetails