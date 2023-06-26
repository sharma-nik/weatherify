import React, { useContext, useEffect, useState } from "react";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import sunCurveLogo from "../../assets/sun-curve.png";
import newsLogo from "../../assets/news.jpeg";
import { Slider } from "antd";
import { PollutionContext, UserContext, WeeklyIndexContext } from "../../App";
import { Map } from "react-map-gl";
import { getCountryNews } from "../../api/api";
import "./WeatherCardsOverlay.css";
import { getComponentConcentration } from "../../constants/utils";
import Footer from "../footer/Footer";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const WeatherCardsOverlay = ({ coordinates, countryName }) => {
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);
  const data = useContext(PollutionContext);
  const [center, setCenter] = useState(coordinates);
  const [newsArticles, setNewsArticles] = useState([]);
  const [UVIndexLevel, setUVIndexLevel] = useState({
    uvIndexLevel: "",
    uvIndexDescription: "",
  });
  const [windInfo, setWindInfo] = useState({
    windTitle: "",
    windDescription: "",
  });
  const [feelsLike, setFeelsLike] = useState({
    feelsLikeTitle: "",
    feelsLikeDescription: "",
  });

  useEffect(() => {
    setCenter(coordinates);
  }, [coordinates]);

  useEffect(() => {
    getCountryNews(countryName.toLowerCase()).then((response) =>
      setNewsArticles(response?.data?.articles)
    );
  }, []);

  useEffect(() => {
    if (daily) {
      switch (true) {
        case daily[weeklyDataIndex].feels_like.day ===
          daily[weeklyDataIndex].temp.day:
          setFeelsLike({
            feelsLikeTitle: "Same as current temperature",
            feelsLikeDescription:
              "The temperature is currently the same as the current reading. No significant change in temperature is observed.",
          });
          break;
        case daily[weeklyDataIndex].feels_like.day >=
          daily[weeklyDataIndex].temp.day:
          setFeelsLike({
            feelsLikeTitle: "Warmer than current temperature",
            feelsLikeDescription:
              "The temperature is higher than the current reading. It is relatively warmer compared to the current conditions.",
          });
          break;
        case daily[weeklyDataIndex].feels_like.day <=
          daily[weeklyDataIndex].temp.day:
          setFeelsLike({
            feelsLikeTitle: "Same as current temperature",
            feelsLikeDescription:
              "The temperature is lower than the current reading. It is relatively cooler compared to the current conditions.",
          });
          break;
      }
    }
  }, [daily, weeklyDataIndex]);

  useEffect(() => {
    if (daily) {
      switch (true) {
        case daily[weeklyDataIndex].uvi >= 0 && daily[weeklyDataIndex].uvi <= 2:
          setUVIndexLevel({
            uvIndexLevel: "Low",
            uvIndexDescription:
              "No special precautions are needed, but it's still advisable to apply sunscreen for extended outdoor activities.",
          });
          break;
        case daily[weeklyDataIndex].uvi >= 3 && daily[weeklyDataIndex].uvi <= 5:
          setUVIndexLevel({
            uvIndexLevel: "Moderate",
            uvIndexDescription:
              "It is recommended to take precautions such as wearing protective clothing, using sunscreen, and seeking shade during peak hours",
          });
          break;
        case daily[weeklyDataIndex].uvi >= 6 && daily[weeklyDataIndex].uvi <= 7:
          setUVIndexLevel({
            uvIndexLevel: "High",
            uvIndexDescription:
              " It is crucial to protect the skin and eyes from the sun by wearing sun-protective clothing, applying sunscreen regularly, wearing sunglasses.",
          });
          break;
        case daily[weeklyDataIndex].uvi >= 8 &&
          daily[weeklyDataIndex].uvi <= 10:
          setUVIndexLevel({
            uvIndexLevel: "Very High",
            uvIndexDescription:
              " Extra precautions should be taken, including using a broad-spectrum sunscreen with a high SPF, wearing protective clothing, and minimizing sun exposure during peak hours.",
          });
          break;
        case daily[weeklyDataIndex].uvi >= 11:
          setUVIndexLevel({
            uvIndexLevel: "Extreme",
            uvIndexDescription:
              " Direct exposure to the sun can cause significant harm, including sunburn and an increased risk of skin cancer. It is strongly advised to stay indoors or seek shade, wear protective clothing.",
          });
          break;
      }
    }
  }, [daily, weeklyDataIndex]);

  useEffect(() => {
    if (daily) {
      switch (true) {
        case daily[weeklyDataIndex].wind_speed >= 0 &&
          daily[weeklyDataIndex].wind_speed <= 15:
          setWindInfo({
            windTitle: "Gentle Breeze",
            windDescription:
              "Enjoy a pleasant breeze as you go about your day.",
          });
          break;
        case daily[weeklyDataIndex].wind_speed >= 16 &&
          daily[weeklyDataIndex].wind_speed <= 39:
          setWindInfo({
            windTitle: "Blustery Gusts",
            windDescription:
              "Hold onto your hat! It's a windy day with energetic gusts.",
          });
          break;
        case daily[weeklyDataIndex].wind_speed >= 40 &&
          daily[weeklyDataIndex].wind_speed <= 61:
          setWindInfo({
            windTitle: "Whirling Zephyrs",
            windDescription:
              "Brisk winds create a lively atmosphere, perfect for outdoor activities.",
          });
          break;
        case daily[weeklyDataIndex].wind_speed >= 62 &&
          daily[weeklyDataIndex].wind_speed <= 88:
          setWindInfo({
            windTitle: "Mighty Gale",
            windDescription:
              "Brace yourself against powerful gusts that demand attention.",
          });
          break;
        case daily[weeklyDataIndex].wind_speed >= 89:
          setWindInfo({
            windTitle: "Stormy Tempest",
            windDescription:
              "Seek shelter! Intense winds make for a dramatic and challenging ",
          });
          break;
      }
    }
  }, [daily, weeklyDataIndex]);

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
          <div
            style={{ color: "#2c013d", fontSize: "14px", marginBottom: "5px" }}
            className="weatherCardFooter"
          >
            {feelsLike.feelsLikeTitle}
          </div>
          <div className="weatherCardFooter">
            {feelsLike.feelsLikeDescription}
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
            <div className="weatherCardTitle">UV Index</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "50%",
                  borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                }}
                className="weatherCardSubTitle"
              >
                {Math.round(daily[weeklyDataIndex].uvi, 2)}
              </div>
              <div
                style={{ color: "#2c013d", fontSize: "14px" }}
                className="weatherCardFooter"
              >
                {UVIndexLevel.uvIndexLevel}
              </div>
            </div>
          </div>

          <div className="weatherCardFooter" style={{ marginTop: "5px" }}>
            {UVIndexLevel.uvIndexDescription}
          </div>
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
            <div className="weatherCardTitle">Wind</div>
            <div className="weatherCardSubTitle">
              {Math.round(daily[weeklyDataIndex].wind_speed, 2)} km/h
            </div>
          </div>
          <div
            className="weatherCardFooter"
            style={{ color: "#2c013d", fontSize: "14px" }}
          >
            {windInfo.windTitle}
          </div>
          <div className="weatherCardFooter">{windInfo.windDescription}</div>
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <div className="airQualityWrapper">
            <div className="weatherCardTitle">Air quality Index</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <div className="weatherCardFooter">{data.main.aqi}</div>
              <div className="weatherCardFooter">
                {getWeatherText(data.main.aqi)}
              </div>
            </div>
            <ResponsiveContainer width="90%" height="90%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={8}
                style={{ color: "#fff" }}
                data={radarData}
              >
                <RadialBar
                  maxAngle={360}
                  background
                  clockWise
                  dataKey="concentration"
                />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div> */}
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
            />
          </div>
        </div>

        {newsArticles.length && (
          <div
            className="newsWrapper"
            style={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            <div className="weatherCardTitle">Top Headlines </div>
            {newsArticles.map((news, index) => {
              return (
                <div
                  className="newsWrapper"
                  key={`newsArticles ${index}`}
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
                    <div className="weatherCardTitle">{news.title}</div>
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
      <Footer />
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
