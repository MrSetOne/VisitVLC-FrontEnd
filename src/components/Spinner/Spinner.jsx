import React from "react";
import "./Spinner.scss";

const Spinner = ({ width, height }) => {
  return (
    <div
      className="Spinner__Container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width ? width : "100%",
        height: height ? height : "100%",
        backgroundColor: "transparent",
      }}
    >
      <div className="pulse"></div>
    </div>
  );
};

export default Spinner;
