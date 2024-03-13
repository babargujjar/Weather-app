import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getOptions, getOptionsStart } from '../../redux/optionSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationItem } from '../../types/types'
import loader from "./../../assets/icons/Type7.png"
import { useLocation } from 'react-router-dom';

const Search = () => {

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [relatedData, setRelatedData] = useState<any>([]);
  const location = useLocation
  // console.log(location)
  useEffect(() => {
    dispatch(getOptionsStart)
  }, [location])

  const handler = (value: any) => {
    setSearch(value)
    {
      search ? setIsLoading(true) : setIsLoading(false)
    }
  }
  // console.log(search)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const relatedCityName = useAppSelector(state => state.options)

  const clearSearch = useAppSelector(state => state.options.data)

  // console.log(clearSearch)

  const data: LocationItem[] = relatedData.data

  // console.log(data)
  useEffect(() => {
    if (relatedCityName?.data) {
      setRelatedData(relatedCityName.data);
    } else {
      setRelatedData([])
    }
  }, [relatedCityName]);

  const handleNavigate = (item: LocationItem) => {
    // console.log(queryParams)
    let lon = item.lon
    let lat = item.lat
    navigate(`/weather?lon=${lon}&lat=${lat}`)
  }

  const cityName = (item: LocationItem) => {

    setIsLoading(true);
    setSearch(item.name)
    handleNavigate(item)


  }




  useEffect(() => {
    setTimeout(() => {
      dispatch(getOptions(search ? search : ""))
    }, 1000)
  }, [search])

  return (
    <>
      <div className="lg:mt-[56px] mt-[32px]  ">
        <div className="relative w-[311px] md:w-[504px] h-[56px] mx-auto">
          <input
            className=" rounded-lg w-[311px] lg:h-[56px] lg:w-[504px] py-[17px] mx-auto  px-5 bg-[#1E1E29]"
            name="search"
            value={search}
            onChange={(e) => {
              e.preventDefault();
              handler(e.target.value);
            }}
            type="text"
            placeholder="Search Location"
          />
          {isLoading && (
            <div className="absolute top-4 right-2 h-[32px] w-[32px]">
              <img
                src={loader}
                alt="Loader Image"
                className="animate-spin w-[26px] h-[26px]  text-red-400"
                style={{}}
              />
            </div>
          )}
        </div>
      </div>
      {data?.length > 0 && (
        <div className=" bg-gray-500 lg:w-[504px] rounded-lg mt-2 mx-auto object-cover overflow-hidden">
          <ul>
            {data?.map((item, i) => (
              <>
                <li
                  className="cursor-pointer  flex items-center w-[311px] lg:h-[56px] lg:w-[504px] py-[17px]  px-5"
                  key={i}
                >
                  <button
                    className="w-full h-full absolute top-0"
                    onClick={() => cityName(item)}
                  ></button>
                  {item.name}
                </li>
                <hr className="border-black" />
              </>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
