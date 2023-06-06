import React from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/showers.png";
import "./WeatherGlance.css";

const WeatherGlance = () => {
  return (
    <div className="weatherInfoWrapper">
        <div className="weatherStatsWrapper">
            <div>
            <p className="cityName">New Delhi</p>
            <p className="temperatureMain">19°</p>
            <p className="weatherOverview">Mostly Clear</p>
            <p className="temperatureHighLow">H: 19° | L:18°</p>
            </div>
            <div className="weatherIcon">
            <img  src={showersLogo} alt="House logo" />
            </div>
        </div>
      <img className="houseLogo" src={houseLogo} alt="House logo" />
    </div>
  );
};

export default WeatherGlance;
