import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getCityWeatherData } from "./api/api";
import { useMutation, useQuery } from "react-query";
import Header from "./components/Header/Header";
import WeatherGlance from "./components/weather-glance/WeatherGlance";
import WeatherCardsOverlay from "./components/weather-cards-overlay/WeatherCardsOverlay";
import WeatherLoader from "./components/weather-loader/WeatherLoader";

const lat = "28.6139";
const lon = "77.2090";

export const UserContext = createContext();

function App() {
  const { mutate, data, isLoading } = useMutation((city) =>
    getCityWeatherData(city).then((response) => response.data)
  );

  return (
    <>
      <UserContext.Provider value={data}>
        <Header getWeatherData={mutate} />
        {data ? <WeatherGlance /> : <WeatherLoader isLoading={isLoading} />}
        {data ? <WeatherCardsOverlay /> : ""}
      </UserContext.Provider>
    </>
  );
}

export default App;
