import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getGeoCoordinates, getWeeklyWeatherData } from "./api/api";
import { useMutation, useQuery } from "react-query";
import Header from "./components/Header/Header";
import WeatherGlance from "./components/weather-glance/WeatherGlance";
import WeatherCardsOverlay from "./components/weather-cards-overlay/WeatherCardsOverlay";
import WeatherLoader from "./components/weather-loader/WeatherLoader";

const lat = "28.6139";
const lon = "77.2090";

export const UserContext = createContext();
export const WeeklyIndexContext = createContext();

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [weeklyDataIndex, setWeeklyDataIndex] = useState(0);
  const { mutate, isLoading } = useMutation(
    async (city) => {
      setWeatherData(null);
      const response = await getGeoCoordinates(city);
      setCityName(response.data[0].name);
      return response.data[0];
    },
    {
      onSuccess: async (data) => {
        const weatherData = await getWeeklyWeatherData(data.lat, data.lon);
        setWeatherData(weatherData.data);
      },
    }
  );

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
            <WeatherLoader isLoading={isLoading} />
          )}
          {weatherData ? <WeatherCardsOverlay /> : ""}
        </UserContext.Provider>
      </WeeklyIndexContext.Provider>
    </>
  );
}

export default App;
