import homeLogo from "./assets/3d-house.svg";
import weatherifyLogo from "./assets/weatherify-logo.png";
import "./App.css";
import { getCityWeatherData } from "./api/api";
import { useQuery } from "react-query";
const lat = "28.6139";
const lon = "77.2090";

function App() {
  const {isLoading, data} = useQuery('weatherData', () => getCityWeatherData(lat,lon).then((response) => response.data))

  return (
    <>
    <div style={{height: '100vh'}}>
      <img
        src={weatherifyLogo}
        style={{ height: "400px" }}
        className="logo"
        alt="Vite logo"
      />
      <img
        src={homeLogo}
        style={{ height: "400px" }}
        className="logo"
        alt="Vite logo"
      />
      </div>
    </>
  );
}

export default App;
