import optionSlice from "./../redux/optionSlice"
import currentWeatherSlice from "./../redux/currentWeatherSlice"
import forecastWeatherSlice  from "./../redux/weatherForecast"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    options:optionSlice,
    CurrentWeather:currentWeatherSlice,
    WeatherForecast:currentWeatherSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


