import React, { useContext, useEffect, useState } from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/rainy.png";
import WeatherTile from "../../common/weather-tile/WeatherTile.jsx";
import { UserContext, WeeklyIndexContext } from "../../App";
import "./WeatherGlance.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { IsCityBookmarked, getWeatherIcon } from "../../constants/utils";
import { addToBookmark, removeFromBookmark } from "../../constants/utils";
import { Tooltip } from "@mui/material";

const WeatherGlance = ({ cityName, coordinates }) => {
  const [isCityBookmarked, setIsCityBookmarked] = useState(false);
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);

  let date = new Date(daily[weeklyDataIndex].dt * 1000);
  let day = new Date(daily[weeklyDataIndex].dt * 1000);
  date = date.toDateString().split(" ").slice(1, 4).join(" ");
  day = day.toDateString().split(" ")[0];

  useEffect(() => {
    setIsCityBookmarked(IsCityBookmarked(cityName));
  });

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
              style={{ height: "200px" }}
              alt="House logo"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "90%" }}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              {isCityBookmarked ? (
                <Tooltip title="Added to favourite locations" arrow>
                  <BookmarkIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => removeFromBookmark(cityName)}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Add to favourite locations" arrow>
                  <BookmarkBorderIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => addToBookmark(cityName, coordinates)}
                  />
                </Tooltip>
              )}
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
                  key={`weatherTile ${index}`}
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
