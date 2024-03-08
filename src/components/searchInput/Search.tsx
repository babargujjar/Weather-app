import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getOptions } from '../../redux/optionSlice';
import { useEffect } from 'react';
import { LocationType } from '../../redux/optionSlice';
import {  useNavigate } from 'react-router-dom';


const Search = () => {

  const [search, setSearch] = useState('');
  const [relatedData, setRelatedData] = useState<any>([]);

  const handler = (value: any) => {
    setSearch(value)
  }

  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const relatedCityName = useAppSelector(state => state.options)

  interface LocalNames {
    [key: string]: string;
  }
  interface LocationItem {
    name: string;
    local_names: LocalNames;
    lat: number;
    lon: number;
    country: string;
    state: string;
  }

  const data: LocationItem[] = relatedData.data

  // console.log(data)
  useEffect(() => {
    if (relatedCityName?.data) {
      setRelatedData(relatedCityName.data);
    } else {
      setRelatedData([])
    }
  }, [relatedCityName]);
  
  const handleNavigate = (item:LocationItem) => {
    // console.log(queryParams)
    let lon = item.lon
    let lat = item.lat
    navigate(`/weather?lon=${lon}&lat=${lat}`)}

  const cityName = (item: LocationItem) => {

    setSearch(item.name)
    handleNavigate(item)
     

  }


  useEffect(() => {
    setTimeout(() => {
      dispatch(getOptions(search ? search : ""))
    },3000)}, [search])

  return (
    <div>
      <div className="mt-[32px] sm:mt-[48px] w-screen text-center ">
        <input
          className='py-[17px] rounded-lg w-[504px] mx-20 leading-5 px-5 bg-gray-800'
          name='search'
          value={search}
          onChange={(e) => { e.preventDefault(); handler(e.target.value); }}
          type="search"
          placeholder='Search Location'
        />
      </div>
      {data?.length > 0 && (
        <div className='h-full bg-gray-500 w-[504px] rounded-lg mt-2 mx-auto'>
          {/* Render your related data here */}
          <ul>
            {data?.map(item => (
              <li className='cursor-pointer m-2 relative object-cover overflow-hidden' >
                <button className='w-full h-full absolute top-0' onClick={() => cityName(item)}></button>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
