import React from "react";
import showersLogo from "../../assets/showers.png";
import "./WeatherTile.css";

const WeatherTile = ({ day, weather, temp }) => {
  return (
    <div className="weatherTileWrapper">
      <p className="miniTemp">{day}</p>
      <img style={{ height: "38px" }} src={showersLogo} alt="House logo" />
      <p className="miniTemp">{`${temp}°`}</p>
    </div>
  );
};

export default WeatherTile;
