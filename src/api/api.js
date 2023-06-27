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
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
  });
}

export function getCityName(lat, lon) {
  return axios({
    method: "get",
    url: `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`,
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
    // url: `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=${country}&max=20&apikey='${"db595e2a4eeff9abad0d5fcf4d9f699a"}`,
  });
}

export function getPollutionData(lat, lon) {
  return axios({
    method: "get",
    url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  });
}
