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

export const addToBookmark = (
  cityName,
  coordinates,
  favouriteLocations,
  setFavouriteLocation
) => {
  const bookmarkObj = { cityName, coordinates };
  if (favouriteLocations.length) {
    for (const city of favouriteLocations) {
      if (city.cityName === cityName) {
        return;
      }
    }
    favouriteLocations.push(bookmarkObj);
    setFavouriteLocation(favouriteLocations);
  } else {
    favouriteLocations.push(bookmarkObj);
    setFavouriteLocation(favouriteLocations);
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

export const removeFromBookmark = (cityName, favouriteLocations) => {
  if (favouriteLocations.length) {
    let cityIndex;
    for (const city in favouriteLocations) {
      if (favouriteLocations[city].cityName === cityName) {
        cityIndex = city;
        break;
      }
    }
    favouriteLocations.splice(cityIndex, 1);
    return favouriteLocations;
  } else {
    return;
  }
};
