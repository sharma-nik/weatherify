import React, { useState, useContext } from "react";
import weatherifyLogo from "../../assets/weatherify-logo.png";
import locationLogo from "../../assets/google-maps.png";
import { SearchOutlined } from "@ant-design/icons";
import { APP_COLORS } from "../../constants/colors";
import { Input, Button } from "antd";
import TransparentCard from "../../common/transparent-card/TransparentCard";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Popover, Tooltip } from "@mui/material";

import "./Header.css";
import { FavouriteLocationsContext } from "../../App";

const Header = ({ getWeatherData }) => {
  const [cityName, setCityName] = useState("");
  const [anchorEl, setAnchorEl] = useState(false);
  const { favouriteLocations = [] } = useContext(FavouriteLocationsContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getWeatherOnEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      getWeatherData(cityName);
    }
  };

  const id = anchorEl ? "simple-popover" : undefined;
  const open = Boolean(anchorEl);

  return (
    <TransparentCard type="header">
      <div className="cardWrapperPositioning">
        <img src={weatherifyLogo} className="headerLogo" alt="Vite logo" />
        <div style={{ display: "flex" }}>
          <div className="headerSearchWrapper">
            <Input
              className="headerSearchInput"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Your city name"
              onKeyDown={getWeatherOnEnter}
              prefix={
                <img
                  src={locationLogo}
                  style={{
                    color: APP_COLORS.blueColor,
                    marginRight: "3px",
                    height: "18px",
                  }}
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
          <div
            style={{
              padding: "0px 20px",
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
              marginLeft: "20px",
            }}
          >
            <Tooltip title="Favourite locations" arrow>
              <BookmarkIcon
                style={{ color: "#2c013d", cursor: "pointer" }}
                onClick={handleClick}
              />
            </Tooltip>
            <Popover
              id={id}
              open={open}
              key={`favouriteCities `}
              anchorEl={anchorEl}
              onClose={handleClose}
              sx={{ mt: "53px" }}
            >
              <div className="favouriteLocations">Your favourite locations</div>
              {favouriteLocations.length ? (
                favouriteLocations.map((city, index) => {
                  return (
                    <>
                      <div
                        className="favouriteCity"
                        key={`favouriteCity ${index}`}
                        onClick={() => {
                          getWeatherData(city.cityName);
                          setCityName(city.cityName);
                          handleClose();
                        }}
                      >
                        <div
                          style={{
                            height: "15px",
                            color: "2c013d",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          {city.cityName}
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="favouriteCityEmp">
                  <div
                    style={{
                      height: "15px",
                      color: "2c013d",
                    }}
                  >
                    No locations yet to show
                  </div>
                </div>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </TransparentCard>
  );
};

export default Header;
