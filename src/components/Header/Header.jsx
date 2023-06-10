import React from "react";
import weatherifyLogo from "../../assets/weatherify-logo.png";
import locationLogo from "../../assets/location.png";
import { SearchOutlined } from "@ant-design/icons";
import { APP_COLORS } from "../../constants/colors";
import { Input, Button } from "antd";
import TransparentCard from "../../common/transparent-card/TransparentCard";

import "./Header.css";

const Header = () => {
  return (
    <TransparentCard type="header">
      <div className="cardWrapperPositioning">
        <img src={weatherifyLogo} className="headerLogo" alt="Vite logo" />
        <div className="headerSearchWrapper">
          <Input
            className="headerSearchInput"
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
          >
            Search
          </Button>
        </div>
      </div>
    </TransparentCard>
  );
};

export default Header;
