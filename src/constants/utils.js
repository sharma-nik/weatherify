import { WEEK_DAYS } from "./data";
import { WEATHER_TYPE } from "./data";

export const getDayFromWeek = (index) => {
  if (index >= WEEK_DAYS.length) {
    return WEEK_DAYS[index - WEEK_DAYS.length];
  } else return WEEK_DAYS[index];
};

export const getWeatherIcon = (weatherType) => {
  const weather = WEATHER_TYPE.filter((weather) => {
    if (weather.weatherType === weatherType) {
      return weather.weatherIcon;
    }
  });
  if (weather.length) {
    return weather[0].weatherIcon;
  } else return;
};
