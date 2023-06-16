import React, { useContext } from "react";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import sunCurveLogo from "../../assets/sun-curve.png";
import { Slider } from "antd";
import { UserContext, WeeklyIndexContext } from "../../App";
import "./WeatherCardsOverlay.css";

const WeatherCardsOverlay = () => {
  const { daily } = useContext(UserContext);
  const { weeklyDataIndex } = useContext(WeeklyIndexContext);
  const sunrise = new Date(daily[weeklyDataIndex].sunrise * 1000);
  const sunset = new Date(daily[weeklyDataIndex].sunset * 1000);
  return (
    <TransparentCard type="overlay">
      <div className="overlayNotch"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
