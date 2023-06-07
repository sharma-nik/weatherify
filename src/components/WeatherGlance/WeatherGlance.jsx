import React from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/showers.png";
import WeatherTile from "../../common/weather-tile/WeatherTile.jsx";
import { DAY_WISE_WEATHER } from "../../constants/data";
import "./WeatherGlance.css";

const WeatherGlance = () => {
  return (
    <div className="weatherInfoWrapper">
      <div className="weatherStatsWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            marginBottom: "10px",
          }}
        >
          <div className="weatherIcon">
            <img src={showersLogo} alt="House logo" />
          </div>
          <div>
            <p className="cityName">New Delhi</p>
            <p className="temperatureMain">19°</p>
            <p className="weatherOverview">Mostly Clear</p>
            <p className="temperatureHighLow">H: 19° | L:18°</p>
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
