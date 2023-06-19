import React, { useContext } from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/rainy.png";
import WeatherTile from "../../common/weather-tile/WeatherTile.jsx";
import { UserContext, WeeklyIndexContext } from "../../App";
import "./WeatherGlance.css";
import { getWeatherIcon } from "../../constants/utils";

const WeatherGlance = ({ cityName }) => {
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);
  let date = new Date(daily[weeklyDataIndex].dt * 1000);
  let day = new Date(daily[weeklyDataIndex].dt * 1000);
  date = date.toDateString().split(" ").slice(1, 4).join(" ");
  day = day.toDateString().split(" ")[0];

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
            <img
              src={
                getWeatherIcon(daily[weeklyDataIndex].weather[0].main)
                  ? getWeatherIcon(daily[weeklyDataIndex].weather[0].main)
                  : showersLogo
              }
              alt="House logo"
            />
          </div>
          <div style={{ width: "100%" }}>
            <p className="cityName">{cityName}</p>
            <p className="temperatureMain">
              {Math.round(daily[weeklyDataIndex].temp.day, 2)}°c
            </p>
            <div style={{ display: "flex" }}>
              <div className="miniTemp dateWrapper">
                <div className="weatherOverview">{day}</div>
                <div className="temperatureHighLow">{date}</div>
              </div>
              <div style={{}} className="weatherWrapper">
                <p className="weatherOverview">
                  {daily[weeklyDataIndex].weather[0].main}
                </p>
                <p className="temperatureHighLow">
                  H: {Math.round(daily[weeklyDataIndex].temp.max, 2)}° | L:{" "}
                  {Math.round(daily[weeklyDataIndex].temp.min, 2)}°
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(255, 255, 255, 0.40)",
            paddingTop: "10px",
          }}
        >
          {daily.map((data, index) => {
            if (index > 0) {
              let day = new Date(data.dt * 1000);
              day = day.toDateString().split(" ")[0];
              return (
                <WeatherTile
                  index={index}
                  day={day}
                  temp={data.temp.day}
                  weather={data.weather[0].main}
                />
              );
            } else return;
          })}
        </div>
      </div>

      <img className="houseLogo" src={houseLogo} alt="House logo" />
    </div>
  );
};

export default WeatherGlance;
