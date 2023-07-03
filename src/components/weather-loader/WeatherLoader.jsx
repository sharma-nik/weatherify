import React, { useEffect } from "react";
import houseLogo from "../../assets/3d-house.svg";
import "./WeatherLoader.css";
import { Spin } from "antd";

const WeatherLoader = ({ isLoading }) => {
  return (
    <div className="weatherLoaderWrapper">
      <div className="loading">
        <div style={{ width: "80%", textAlign: "center" }}>
          <div className="loadingHeader">Your Weather Wizard: </div>
          <div className="loadingWrapper">
            Unveiling Nature's Secrets - Rain, Clouds or Shine.
          </div>
          <div style={{ textAlign: "center" }}>
            {isLoading && <Spin className="spinner" size="large" />}
          </div>
        </div>
      </div>
      <img className="houseLogo" src={houseLogo} alt="House logo" />
    </div>
  );
};

export default WeatherLoader;
