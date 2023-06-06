import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

export function getCityWeatherData(lat,lon){
    return axios({
          method: "get",
          url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        })
}