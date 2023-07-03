import React, { useContext, useEffect, useState } from "react";
import houseLogo from "../../assets/3d-house.svg";
import showersLogo from "../../assets/rainy.png";
import WeatherTile from "../../common/weather-tile/WeatherTile.jsx";
import {
  FavouriteLocationsContext,
  UserContext,
  WeeklyIndexContext,
} from "../../App";
import "./WeatherGlance.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { IsCityBookmarked, getWeatherIcon } from "../../constants/utils";
import { addToBookmark, removeFromBookmark } from "../../constants/utils";
import { Tooltip, Grid } from "@mui/material";

const WeatherGlance = ({ cityName, coordinates }) => {
  const [isCityBookmarked, setIsCityBookmarked] = useState(null);
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);
  const { favouriteLocations = [], setFavouriteLocation } = useContext(
    FavouriteLocationsContext
  );

  let date = new Date(daily[weeklyDataIndex].dt * 1000);
  let day = new Date(daily[weeklyDataIndex].dt * 1000);
  date = date.toDateString().split(" ").slice(1, 4).join(" ");
  day = day.toDateString().split(" ")[0];

  useEffect(() => {
    setIsCityBookmarked(IsCityBookmarked(cityName));
  }, []);

  return (
    <div className="weatherInfoWrapper">
      <div className="weatherStatsWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            minWidth: "80%",
          }}
        >
          <div className="weatherIcon">
            <img
              src={
                getWeatherIcon(daily[weeklyDataIndex].weather[0].main)
                  ? getWeatherIcon(daily[weeklyDataIndex].weather[0].main)
                  : showersLogo
              }
              className="weatherInfoLogo"
              alt="House logo"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="cityWrapper">
              <p className="cityName">{cityName}</p>
              <p className="temperatureMain">
                {Math.round(daily[weeklyDataIndex].temp.day, 2)}°c
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
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
                    onClick={() => {
                      setIsCityBookmarked(false);
                      removeFromBookmark(cityName, favouriteLocations);
                      setIsCityBookmarked(false);
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Add to favourite locations" arrow>
                  <BookmarkBorderIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setIsCityBookmarked(true);
                      addToBookmark(
                        cityName,
                        coordinates,
                        favouriteLocations,
                        setFavouriteLocation
                      );
                    }}
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
      <div>
        <img className="houseLogo" src={houseLogo} alt="House logo" />
      </div>
    </div>
  );
};

export default WeatherGlance;
