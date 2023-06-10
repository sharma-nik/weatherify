import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getCityWeatherData } from "./api/api";
import { useQuery } from "react-query";
import Header from "./components/Header/Header";
import WeatherGlance from "./components/weather-glance/WeatherGlance";
import WeatherCardsOverlay from "./components/weather-cards-overlay/WeatherCardsOverlay";
import WeatherLoader from "./components/weather-loader/WeatherLoader";

const lat = "28.6139";
const lon = "77.2090";

export const UserContext = createContext();

function App() {
  const { data, isLoading } = useQuery("weatherData", () =>
    getCityWeatherData(lat, lon).then((response) => response.data)
  );

  return (
    <>
      <UserContext.Provider value={data}>
        <Header />
        {data ? <WeatherGlance /> : <WeatherLoader />}
        {data ? <WeatherCardsOverlay /> : ""}
      </UserContext.Provider>
    </>
  );
}

export default App;
