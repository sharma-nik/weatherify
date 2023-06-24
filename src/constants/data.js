import cloudIcon from "../assets/cloudy.png";
import drizzleIcon from "../assets/drizzle.svg";
import rainIcon from "../assets/rain.png";
import sunIcon from "../assets/sun.png";
import snowIcon from "../assets/snow.png";

export const DAY_WISE_WEATHER = [
  { day: "Mon", weather: "Rainy", temp: "15" },
  { day: "Tue", weather: "Cloudy", temp: "13" },
  { day: "Wed", weather: "Sunny", temp: "18" },
  { day: "Thu", weather: "Suny", temp: "18" },
  { day: "Fri", weather: "Windy", temp: "8" },
  { day: "Sat", weather: "Snow", temp: "4" },
  { day: "Sun", weather: "Rainy", temp: "5" },
];

export const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const WEATHER_TYPE = [
  { weatherType: "Clear", weatherIcon: sunIcon },
  { weatherType: "Clouds", weatherIcon: cloudIcon },
  { weatherType: "Rain", weatherIcon: rainIcon },
  { weatherType: "Drizzle", weatherIcon: drizzleIcon },
  { weatherType: "Snow", weatherIcon: snowIcon },
];

export const POLLUTION_PROMPT = [
  { pollutionLevel: "1", pollutionText: "Good" },
  { pollutionLevel: "2", pollutionText: "Fair" },
  { pollutionLevel: "3", pollutionText: "Moderate" },
  { pollutionLevel: "4", pollutionText: "Poor" },
  { pollutionLevel: "5", pollutionText: "Very Poor" },
];
