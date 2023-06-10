import React from "react";
import "./TransparentCard.css";

const TransparentCard = (props) => {
  return (
    <div
      style={{
        borderRadius:
          props.type === "header"
            ? "0px 0px 30px 30px"
            : props.type === "overlay"
            ? " 30px 30px 0px 0px"
            : "10px",
        position: props.type === "header" ? "fixed" : "",
        width: props.type === "header" ? "100vw" : "",
      }}
      className="cardWrapper"
    >
      {props.children}
    </div>
  );
};

export default TransparentCard;
