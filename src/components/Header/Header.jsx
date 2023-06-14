import React, { useState } from "react";
import weatherifyLogo from "../../assets/weatherify-logo.png";
import locationLogo from "../../assets/location.png";
import { SearchOutlined } from "@ant-design/icons";
import { APP_COLORS } from "../../constants/colors";
import { Input, Button } from "antd";
import TransparentCard from "../../common/transparent-card/TransparentCard";

import "./Header.css";

const Header = ({ getWeatherData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <TransparentCard type="header">
      <div className="cardWrapperPositioning">
        <img src={weatherifyLogo} className="headerLogo" alt="Vite logo" />
        <div className="headerSearchWrapper">
          <Input
            className="headerSearchInput"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Your city name"
            prefix={
              <img
                src={locationLogo}
                style={{ color: APP_COLORS.blueColor, marginRight: "3px" }}
              />
            }
          />
          <Button
            className="headerSearchButton"
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => getWeatherData(cityName)}
          >
            Search
          </Button>
        </div>
      </div>
    </TransparentCard>
  );
};

export default Header;
