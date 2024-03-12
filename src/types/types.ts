export type LocalNames = {
    [key: string]: string;
}
export type LocationItem = {
    name: string;
    local_names: LocalNames;
    lat: number;
    lon: number;
    country: string;
    state: string;
}
export type Coord = {
    lon: number;
    lat: number;
}

export type Weather = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export type Wind = {
    speed: number;
    deg: number;
    gust: number;
}

export type Clouds = {
    all: number;
}

export type Sys = {
    country: string;
    sunrise: number;
    sunset: number;
}

export type WeatherData = {
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



export type WeatherResponse = {
    cod: string;
    message: number;
    cnt: number;
    city: City;
    list: weatherItems[] | any;

}

export type weatherItems = {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: WeatherDescription[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string
}

export type WeatherDataAny = {
    list: any;
}
export type WeatherDescription = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type City = {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}