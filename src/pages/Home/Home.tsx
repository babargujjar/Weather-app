import React from 'react'
import logo from "./../../assets/Logo.svg"
import Search from '../searchInput/Search';



const Home = () => {
  return (
    <div>
        <div className="flex justify-center py-12">
      <img className="w-40" src={logo} alt="logo" />
    </div>

    <div className='text-white w-full  flex flex-col mt-16 justify-center items-center'>
      <h1 className="text-white font-[700] lg:text-[32px] leading-[28px] mt-16 text-[20px]">Welcome to <span className='text-blue-300'>Weather App</span></h1>
      <h3 className='text-gray-400 mt-5  text-[10px] sm:text-[17px] '>
        Choose location to see weather forcast</h3>
      <Search  />
    </div>
    </div>
  )
}

export default Home