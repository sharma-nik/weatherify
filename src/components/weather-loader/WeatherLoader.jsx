import React from "react";
import houseLogo from "../../assets/3d-house.svg";
import "./WeatherLoader.css";

const WeatherLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="loading">
        <div className="loadingWrapper">
          <span className="loadingHeader">Your Weather Wizard: </span>Unveiling
          Nature's Secrets - Rain, Clouds or Shine.
        </div>
      </div>
      <img className="houseLogo" src={houseLogo} alt="House logo" />
    </div>
  );
};

export default WeatherLoader;
