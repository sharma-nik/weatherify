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
  const [humidity, setHumidity] = useState({
    humidityLevel: "",
    humidityDescription: "",
  });
  const [pressure, setPressure] = useState({
    pressureLevel: "",
    pressureDescription: "",
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
        case Math.round(daily[weeklyDataIndex].uvi, 2) >= 0 &&
          Math.round(daily[weeklyDataIndex].uvi, 2) <= 2:
          setUVIndexLevel({
            uvIndexLevel: "Low",
            uvIndexDescription:
              "No special precautions are needed, but it's still advisable to apply sunscreen for extended outdoor activities.",
          });
          break;
        case Math.round(daily[weeklyDataIndex].uvi, 2) >= 3 &&
          Math.round(daily[weeklyDataIndex].uvi, 2) <= 5:
          setUVIndexLevel({
            uvIndexLevel: "Moderate",
            uvIndexDescription:
              "It is recommended to take precautions such as wearing protective clothing, using sunscreen, and seeking shade during peak hours",
          });
          break;
        case Math.round(daily[weeklyDataIndex].uvi, 2) >= 6 &&
          Math.round(daily[weeklyDataIndex].uvi, 2) <= 7:
          setUVIndexLevel({
            uvIndexLevel: "High",
            uvIndexDescription:
              " It is crucial to protect the skin and eyes from the sun by wearing sun-protective clothing, applying sunscreen regularly, wearing sunglasses.",
          });
          break;
        case Math.round(daily[weeklyDataIndex].uvi, 2) >= 8 &&
          Math.round(daily[weeklyDataIndex].uvi, 2) <= 10:
          setUVIndexLevel({
            uvIndexLevel: "Very High",
            uvIndexDescription:
              " Extra precautions should be taken, including using a broad-spectrum sunscreen with a high SPF, wearing protective clothing, and minimizing sun exposure during peak hours.",
          });
          break;
        case Math.round(daily[weeklyDataIndex].uvi, 2) >= 11:
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
        case daily[weeklyDataIndex].pressure < 1000:
          setPressure({
            pressureLevel: "Very Low Pressure",
            pressureDescription:
              "The atmospheric pressure is very low. It indicates a potential for unsettled or stormy weather conditions. It's advisable to monitor weather updates and be prepared for possible atmospheric disturbances.",
          });
          break;
        case daily[weeklyDataIndex].pressure >= 1000 &&
          daily[weeklyDataIndex].pressure <= 1013:
          setPressure({
            pressureLevel: "Normal Pressure",
            pressureDescription:
              " The atmospheric pressure is within the normal range. It suggests stable weather conditions without significant atmospheric disturbances. Typical weather patterns can be expected during this range.",
          });
          break;
        case daily[weeklyDataIndex].pressure >= 1014 &&
          daily[weeklyDataIndex].pressure <= 1020:
          setPressure({
            pressureLevel: "High Pressure",
            pressureDescription:
              "The atmospheric pressure is relatively high. It indicates stable and clear weather conditions with a potential for calm winds. Skies are often clear, and precipitation is less likely during this range.",
          });
          break;
        case daily[weeklyDataIndex].pressure > 1020:
          setPressure({
            pressureLevel: "Very High Pressure",
            pressureDescription:
              "The atmospheric pressure is very high, indicating a strong high-pressure system. It suggests stable and fair weather conditions with clear skies, dry air, and light winds. Typically, this range indicates calm and settled weather",
          });
          break;
      }
    }
  }, [daily, weeklyDataIndex]);

  useEffect(() => {
    if (daily) {
      switch (true) {
        case daily[weeklyDataIndex].humidity >= 0 &&
          daily[weeklyDataIndex].humidity <= 24:
          setHumidity({
            humidityLevel: "Very Low Humidity",
            humidityDescription:
              "The humidity is very low, indicating dry conditions. The air may feel dry, and precautions such as staying hydrated and moisturizing the skin may be necessary.",
          });
          break;
        case daily[weeklyDataIndex].humidity >= 25 &&
          daily[weeklyDataIndex].humidity <= 49:
          setHumidity({
            humidityLevel: "Low to Moderate Humidity",
            humidityDescription:
              "The humidity is relatively low to moderate. The air is not overly dry but still offers some moisture. Comfortable conditions can be expected, but it is advisable to stay hydrated.",
          });
          break;
        case daily[weeklyDataIndex].humidity >= 50 &&
          daily[weeklyDataIndex].humidity <= 74:
          setHumidity({
            humidityLevel: "Moderate to High Humidity",
            humidityDescription:
              "The humidity is moderate to high. The air may feel slightly humid or muggy. It is recommended to stay hydrated and seek shade, particularly during hot weather.",
          });
          break;
        case daily[weeklyDataIndex].humidity >= 75 &&
          daily[weeklyDataIndex].humidity <= 100:
          setHumidity({
            humidityLevel: "High Humidity",
            humidityDescription:
              " The humidity is high, indicating very moist air. It is important to stay hydrated, seek shade, and take necessary precautions to prevent discomfort or heat-related issues.",
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
          <div
            style={{
              color: "#2c013d",
              fontSize: "14px",
              marginBottom: "5px",
            }}
            className="weatherCardFooter"
          >
            {humidity.humidityLevel}
          </div>
          <div className="weatherCardFooter">
            {humidity.humidityDescription}
          </div>
        </div>

        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">UV Index</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "25px",
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
                style={{
                  color: "#2c013d",
                  fontSize: "14px",
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                className="weatherCardFooter"
              >
                {UVIndexLevel.uvIndexLevel}
              </div>
            </div>
          </div>
          <div className="weatherCardFooter">
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
          <div className="weatherCardFooter" style={{ fontSize: "14px" }}>
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
              {`${daily[weeklyDataIndex].pressure} hPa`}
            </div>
          </div>
          <div
            style={{ color: "#2c013d", fontSize: "14px" }}
            className="weatherCardFooter"
          >
            {`${pressure.pressureLevel} `}
          </div>
          <div className="weatherCardFooter">
            {pressure.pressureDescription}
          </div>
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
          <div className="newsWrapper" style={{}}>
            <div className="weatherCardTitle" style={{ padding: "10px 0px" }}>
              Top Headlines{" "}
            </div>
            <div
              style={{
                overflowY: "scroll",
                overflowX: "hidden",
                maxHeight: "500px",
              }}
            >
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
          </div>
        )}
      </div>
      <Footer />
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
