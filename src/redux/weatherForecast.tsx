import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { Citys, WeatherState } from "../../types/types";
import axios from "axios";
import { APPID } from "../config/config";



interface Coord {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

interface Clouds {
    all: number;
}

interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
}

 interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export type WeatherType = WeatherData





export interface WeatherState {
    data: WeatherType | null,
    loading: boolean,
    error: string | null
}


const initialState: WeatherState = {
    data: null,
    loading: true,
    error: "",
};

export const getWeatherForecast = createAsyncThunk(
    "getWeatherForecast",
    async ({ lat, lon }: { lat: number, lon: number }) => {
        // console.log(lon,lat)
        const res =
            await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}`)
        // console.log(res.data)
        return res.data
    }
);



export const forecastWeatherSlice = createSlice({
    name: "WeatherForecast",
    initialState,
    reducers: {},
    extraReducers(builder: any) {
        builder
            // new options end
            .addCase(getWeatherForecast.pending, (state: any) => {
                state.loading = true;
            })
            .addCase(getWeatherForecast.fulfilled, (state: any, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(getWeatherForecast.rejected, (state: any, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
                state.data = {};
            });
    },
});

export default forecastWeatherSlice.reducer;






