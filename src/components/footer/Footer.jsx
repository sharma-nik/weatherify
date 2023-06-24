import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="weatherCardTitle" style={{ textTransform: "capitalize" }}>
        Made with ♥️ by -{" "}
        <span
          className="weatherCardFooter"
          style={{ textTransform: "capitalize" }}
        >
          Nikhil Sharma
        </span>
      </div>
      <div style={{ margin: "5px" }}>
        <LinkedInIcon
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/sharma-nic-0199/",
              "_blank"
            )
          }
          sx={{ color: "#2c013d", cursor: "pointer" }}
        />
        <GitHubIcon
          onClick={() => window.open("https://github.com/sharma-nik", "_blank")}
          sx={{ color: "#2c013d", cursor: "pointer", ml: "5px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
