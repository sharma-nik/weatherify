import React from "react";
import houseLogo from "../../assets/3d-house.svg";
import "./WeatherLoader.css";
import { Spin } from "antd";

const WeatherLoader = ({ isLoading }) => {
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
        <div style={{ width: "500px" }}>
          <span className="loadingHeader">Your Weather Wizard: </span>
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
