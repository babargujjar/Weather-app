import React from 'react'
import logo from "./../../assets/Logo.svg"
import Search from '../../components/searchInput/Search';



const Home = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <div className="flex justify-center py-12">
        <img className="w-40" src={logo} alt="logo" />
      </div>

      <div className='text-white mt-32 lg:mt-24 flex flex-col lg:w-[504px] mx-auto justify-center items-center'>
        <h1 className="text-white font-[700] lg:text-[32px] leading-[28px] text-[20px]">Welcome to <span className='text-blue-300'>Weather App</span></h1>
        <h3 className='text-gray-400 mt-4  text-[13px] lg:text-[20px] '>
          Choose location to see weather forcast</h3>
        <Search />
      </div>
    </div>
  )
}

export default Home