import { WEEK_DAYS } from "./data";
import { WEATHER_TYPE, POLLUTION_PROMPT } from "./data";

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

export const getWeatherText = (aqiIndex) => {
  const weatherText = POLLUTION_PROMPT.filter((pollution) => {
    if (pollution.pollutionLevel == aqiIndex) {
      return pollution;
    }
  });
  return weatherText[0].pollutionText;
};

export const getComponentConcentration = (data) => {
  const response = Object.keys(data).map((gas) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return {
      componentName: gas,
      concentration: data[gas],
      fill: `#${randomColor}`,
    };
  });
  return response;
};

export const addToBookmark = (cityName, coordinates) => {
  const bookmarkObj = { cityName, coordinates };
  if (localStorage.getItem("favouriteCities")) {
    const bookmarkObjList = JSON.parse(localStorage.getItem("favouriteCities"));
    for (const city of bookmarkObjList) {
      if (city.cityName === cityName) {
        return;
      }
    }
    bookmarkObjList.push(bookmarkObj);
    localStorage.setItem("favouriteCities", JSON.stringify(bookmarkObjList));
    // window.location.reload();
  } else {
    const bookmarkObjList = [];
    bookmarkObjList.push(bookmarkObj);
    localStorage.setItem("favouriteCities", JSON.stringify(bookmarkObjList));
    // window.location.reload();
  }
};

export const IsCityBookmarked = (cityName) => {
  if (localStorage.getItem("favouriteCities")) {
    const bookmarkObjList = JSON.parse(localStorage.getItem("favouriteCities"));
    for (const city of bookmarkObjList) {
      if (city.cityName === cityName) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
};
