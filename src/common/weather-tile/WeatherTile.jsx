import React, { useContext } from "react";
import { getWeatherIcon } from "../../constants/utils";
import { WeeklyIndexContext } from "../../App";
import "./WeatherTile.css";

const WeatherTile = ({ day, temp, weather, index }) => {
  const { weeklyDataIndex, setWeeklyDataIndex } =
    useContext(WeeklyIndexContext);
  return (
    <div
      className="weatherTileWrapper"
      style={{
        background: weeklyDataIndex === index ? "rgba(110, 49, 157, 0.6)" : "",
        border:
          weeklyDataIndex === index ? "1px solid rgba(255, 255, 255, 0.4)" : "",
        cursor: weeklyDataIndex === index ? "pointer" : "",
      }}
      onClick={() => {
        if (weeklyDataIndex === index) {
          setWeeklyDataIndex(0);
        } else setWeeklyDataIndex(index);
      }}
    >
      <p className="miniTemp">{day}</p>
      <img
        className="tileLogo"
        src={getWeatherIcon(weather)}
        alt="House logo"
      />
      <p className="miniTemp">{`${Math.round(temp, 2)}°`}</p>
    </div>
  );
};

export default WeatherTile;
