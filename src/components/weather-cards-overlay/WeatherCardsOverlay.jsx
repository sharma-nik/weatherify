import React, { useContext } from "react";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import sunCurveLogo from "../../assets/sun-curve.png";
import { Slider } from "antd";
import { UserContext } from "../../App";
import "./WeatherCardsOverlay.css";

const WeatherCardsOverlay = () => {
  const { main, sys: sunTime, visibility, wind } = useContext(UserContext);
  return (
    <TransparentCard type="overlay">
      <div className="overlayNotch"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Feels Like</div>
            <div className="weatherCardSubTitle">
              {Math.round(main.feels_like, 2) - 273}°
            </div>
          </div>
          <div className="weatherCardFooter">
            Similar to the actual temperature
          </div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Humidity</div>
            <div className="weatherCardSubTitle">{main.humidity}%</div>
            <Slider value={main.humidity} disabled={true} />
          </div>
          <div className="weatherCardFooter">Quite humid</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Sunrise</div>
            <div className="weatherCardSubTitle">5:28 AM</div>
          </div>
          <img src={sunCurveLogo} />
          <div className="weatherCardFooter">Sunset: 7:25 PM</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Visibility</div>
            <div className="weatherCardSubTitle">{visibility / 1000} km</div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Wind</div>
            <div className="weatherCardSubTitle">{wind.speed} km/h</div>
          </div>
          <div className="weatherCardFooter">Pleasant day</div>
        </div>

        <div className="weatherCardWrapper">
          <div>
            <div className="weatherCardTitle">Pressure</div>
            <div className="weatherCardSubTitle">{main.pressure}</div>
          </div>
          <div className="weatherCardFooter">Fair distance</div>
        </div>
      </div>
    </TransparentCard>
  );
};

export default WeatherCardsOverlay;
