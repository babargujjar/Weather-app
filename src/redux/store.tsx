import optionSlice from "./../redux/optionSlice"
import currentWeatherSlice from "./../redux/currentWeatherSlice"
import forecastWeatherSlice from "./weatherForecastSlice"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    options: optionSlice,
    CurrentWeather: currentWeatherSlice,
    WeatherForecast: forecastWeatherSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


