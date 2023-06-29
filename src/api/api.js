import axios from "axios";
const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

export function getCityWeatherData(city) {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
  });
}

export function getGeoCoordinates(city) {
  return axios({
    method: "get",
    url: `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
    headers: { "X-API-KEY": "scuS0xK9W2buLMmGp0WbIA==DdLVDCFbZ15RdtqN" },
  });
}

export function getCityName(lat, lon) {
  return axios({
    method: "get",
    url: `https://api.api-ninjas.com/v1/reversegeocoding?lat=${lat}&lon=${lon}`,
    headers: { "X-API-KEY": "scuS0xK9W2buLMmGp0WbIA==DdLVDCFbZ15RdtqN" },
  });
}

export function getWeeklyWeatherData(lat, lon) {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${API_KEY}`,
  });
}

export function getCountryNews(country) {
  return axios({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${"0fc289c076cf441d91ee4ddff8042fee"}`,
  });
}
