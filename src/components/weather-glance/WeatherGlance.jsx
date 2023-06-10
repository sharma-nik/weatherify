import React, { useContext } from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/showers.png";
import WeatherTile from "../../common/weather-tile/WeatherTile.jsx";
import { DAY_WISE_WEATHER } from "../../constants/data";
import { UserContext } from "../../App";
import "./WeatherGlance.css";

const WeatherGlance = ({ data }) => {
  const { main, weather, name } = useContext(UserContext);
  return (
    <div className="weatherInfoWrapper">
      <div className="weatherStatsWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            minWidth: "70%",
          }}
        >
          <div className="weatherIcon">
            <img src={showersLogo} alt="House logo" />
          </div>
          <div>
            <p className="cityName">{name}</p>
            <p className="temperatureMain">{Math.round(main.temp, 2) - 273}°</p>
            <p className="weatherOverview">{weather[0].main}</p>
            <p className="temperatureHighLow">
              H: {Math.round(main.temp_max, 2) - 273}° | L:{" "}
              {Math.round(main.temp_min, 2) - 273}°
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255, 255, 255, 0.40)",
            paddingTop: "10px",
          }}
        >
          {DAY_WISE_WEATHER.map((data) => {
            return (
              <WeatherTile
                day={data.day}
                weather={data.weather}
                temp={data.temp}
              />
            );
          })}
        </div>
      </div>

      <img className="houseLogo" src={houseLogo} alt="House logo" />
    </div>
  );
};

export default WeatherGlance;
