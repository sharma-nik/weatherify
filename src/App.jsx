import { createContext, useEffect, useState } from "react";
import "./App.css";
import {
  getGeoCoordinates,
  getWeeklyWeatherData,
  getCityName,
} from "./api/api";
import { useMutation } from "react-query";
import Header from "./components/Header/Header";
import WeatherGlance from "./components/weather-glance/WeatherGlance";
import WeatherCardsOverlay from "./components/weather-cards-overlay/WeatherCardsOverlay";
import WeatherLoader from "./components/weather-loader/WeatherLoader";

export const UserContext = createContext();
export const WeeklyIndexContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [weeklyDataIndex, setWeeklyDataIndex] = useState(0);
  const [isDataFetching, setIsDataFetching] = useState(null);
  const [coordinates, setCoordinates] = useState([0, 0]);

  const { mutate, isLoading } = useMutation(
    async (city) => {
      setWeatherData(null);
      const response = await getGeoCoordinates(city);
      setCityName(response.data[0].name);
      setCountryName(response.data[0].country);
      return response.data[0];
    },
    {
      onSuccess: async (data) => {
        const weatherData = await getWeeklyWeatherData(data.lat, data.lon);
        setCoordinates([data.lat, data.lon]);
        setWeatherData(weatherData.data);
      },
    }
  );

  useEffect(() => {
    setIsDataFetching(isLoading);
  }, [isLoading]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setIsDataFetching(true);
      getCityName(position.coords.latitude, position.coords.longitude).then(
        ({ data }) => {
          setCityName(data[0].name);
          setCountryName(data[0].country);
        }
      );
      getWeeklyWeatherData(position.coords.latitude, position.coords.longitude)
        .then(({ data }) => {
          setCoordinates([position.coords.latitude, position.coords.longitude]);
          setWeatherData(data);
        })
        .catch(() => setIsDataFetching(false));
    });
  }, []);

  return (
    <>
      <WeeklyIndexContext.Provider
        value={{ weeklyDataIndex, setWeeklyDataIndex }}
      >
        <UserContext.Provider value={weatherData}>
          <Header getWeatherData={mutate} />
          {weatherData ? (
            <WeatherGlance cityName={cityName} />
          ) : (
            <WeatherLoader isLoading={isDataFetching} />
          )}
          {weatherData ? (
            <WeatherCardsOverlay
              countryName={countryName}
              coordinates={coordinates}
            />
          ) : (
            ""
          )}
        </UserContext.Provider>
      </WeeklyIndexContext.Provider>
    </>
  );
}

export default App;
