import React, { useContext, useEffect, useState } from "react";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import sunCurveLogo from "../../assets/sun-curve.png";
import newsLogo from "../../assets/news.jpeg";
import { Slider } from "antd";
import { UserContext, WeeklyIndexContext } from "../../App";
import { Map } from "react-map-gl";
import { getCountryNews } from "../../api/api";
import "./WeatherCardsOverlay.css";

const WeatherCardsOverlay = ({ coordinates, countryName }) => {
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);
  const [center, setCenter] = useState(coordinates);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    setCenter(coordinates);
  }, [coordinates]);
  useEffect(() => {
    getCountryNews(countryName.toLowerCase()).then((response) =>
      setNewsArticles(response?.data?.articles)
    );
  }, []);

  const sunrise = new Date(daily[weeklyDataIndex].sunrise * 1000);
  const sunset = new Date(daily[weeklyDataIndex].sunset * 1000);

  return (
    <TransparentCard type="overlay">
      <div className="overlayNotch"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Feels Like</div>
            <div className="weatherCardSubTitle">
              {Math.round(daily[weeklyDataIndex].feels_like.day, 2)}°
            </div>
          </div>
          <div className="weatherCardFooter">
            Similar to the actual temperature
          </div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Humidity</div>
            <div className="weatherCardSubTitle">
              {daily[weeklyDataIndex].humidity}%
            </div>
            <Slider value={daily[weeklyDataIndex].humidity} disabled={true} />
          </div>
          <div className="weatherCardFooter">Quite humid</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Sunrise</div>
            <div className="weatherCardSubTitle">
              {sunrise.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
          <img src={sunCurveLogo} />
          <div className="weatherCardFooter">
            Sunset:{" "}
            {sunset.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">UV Index</div>
            <div className="weatherCardSubTitle">
              {daily[weeklyDataIndex].uvi}
            </div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Wind</div>
            <div className="weatherCardSubTitle">
              {daily[weeklyDataIndex].wind_speed} km/h
            </div>
          </div>
          <div className="weatherCardFooter">Pleasant day</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Pressure</div>
            <div className="weatherCardSubTitle">
              {daily[weeklyDataIndex].pressure}
            </div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className=" mapsWrapper">
          <div className="weatherCardTitle">Your Location</div>
          <Map
            initialViewState={{
              longitude: center[1],
              latitude: center[0],
              zoom: 14,
            }}
            style={{
              width: 600,
              height: 400,
              borderRadius: "10px",
              margin: "10px",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1Ijoic2hhcm1hLW5pYyIsImEiOiJjbGoyZ3dlZjkxZzVsM2xxaHhrdjljdTZxIn0.S75QLhqpzt5UPHlitbR5TA"
          ></Map>
        </div>
        {newsArticles.length && (
          <div
            className="newsWrapper"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            <div className="weatherCardTitle">Top Headlines </div>
            {newsArticles.map((news) => {
              return (
                <div
                  className="newsWrapper"
                  style={{
                    display: "flex",
                    width: "fit-content",
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  onClick={() => window.open(news.url, "_blank")}
                >
                  <div>
                    <img
                      className="newsImage"
                      src={news.urlToImage ? news.urlToImage : newsLogo}
                    />
                  </div>
                  <div className="newsInfo">
                    <div
                      className="weatherCardTitle"
                      style={{ fontSize: "11px" }}
                    >
                      {news.title}
                    </div>
                    <div className="weatherCardFooter newsDescription">
                      {news.description}
                    </div>
                    <div className="weatherCardTitle newsSource">
                      {news.source.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
