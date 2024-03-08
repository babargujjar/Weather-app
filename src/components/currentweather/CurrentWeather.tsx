import React from 'react'
import Logos from "./../../assets/Logos.svg"
import Day from "./../../assets/icons/Cloudy/Icons.svg"

const CurrentWeather = () => {
    return (
        <>
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
        </>

    )
}

export default CurrentWeather