import React, { useContext } from "react";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import sunCurveLogo from "../../assets/sun-curve.png";
import { Slider } from "antd";
import { UserContext } from "../../App";
import "./WeatherCardsOverlay.css";

const WeatherCardsOverlay = () => {
  const { current } = useContext(UserContext);
  const sunrise = new Date(current.sunrise * 1000);
  const sunset = new Date(current.sunset * 1000);
  return (
    <TransparentCard type="overlay">
      <div className="overlayNotch"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Feels Like</div>
            <div className="weatherCardSubTitle">
              {Math.round(current.feels_like, 2)}°
            </div>
          </div>
          <div className="weatherCardFooter">
            Similar to the actual temperature
          </div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Humidity</div>
            <div className="weatherCardSubTitle">{current.humidity}%</div>
            <Slider value={current.humidity} disabled={true} />
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
            <div className="weatherCardTitle">Visibility</div>
            <div className="weatherCardSubTitle">
              {current.visibility / 1000} km
            </div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Wind</div>
            <div className="weatherCardSubTitle">{current.wind_speed} km/h</div>
          </div>
          <div className="weatherCardFooter">Pleasant day</div>
        </div>

        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Pressure</div>
            <div className="weatherCardSubTitle">{current.pressure}</div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
      </div>
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
