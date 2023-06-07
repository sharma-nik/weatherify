import React from "react";
import weatherifyLogo from "../../assets/weatherify-logo.png";
import { SearchOutlined } from "@ant-design/icons";
import { APP_COLORS } from "../../constants/colors";
import { Input, Button } from "antd";

import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <img src={weatherifyLogo} className="headerLogo" alt="Vite logo" />
      <div className="headerSearchWrapper">
        <Input
          className="headerSearchInput"
          prefix={
            <SearchOutlined
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
  );
};

export default Header;
