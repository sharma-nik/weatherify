import "./App.css";
import { getCityWeatherData } from "./api/api";
import { useQuery } from "react-query";
import Header from "./components/Header/Header";
import WeatherGlance from "./components/WeatherGlance/WeatherGlance";

const lat = "28.6139";
const lon = "77.2090";

function App() {
  const { isLoading, data } = useQuery("weatherData", () =>
    getCityWeatherData(lat, lon).then((response) => response.data)
  );

  return (
    <>
      <Header />
      <WeatherGlance/>
    </>
  );
}

export default App;
