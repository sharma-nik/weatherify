import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

export function getCityWeatherData(lat,lon){
    return axios({
          method: "get",
          url: `${baseURL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        })
}