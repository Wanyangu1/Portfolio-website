/* eslint-disable react/prop-types */
//import React from "react";
import { useEffect } from "react";

let alertShown = false; // Global flag to track if the alert has been shown

const Cover = ({ coverImg, title, subtitle }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    const isSmallScreen = window.innerWidth <= 768; // Detect small screens
    if (isSmallScreen && !alertShown) {
      alert("Welcome to ACW Portfolio, Kindly activate desktop site for the best experience.");
      alertShown = true; // Set the flag to true to prevent repeated alerts
    }
  }, []); // Run once when the component mounts

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="h-full flex flex-col py-24 items-center page-shadow">
        <h1 className="text-primary text-5xl font-bold font-outline-4">
          {title}
        </h1>
        <p className="text-3xl text-secondary-600 font-bold font-outline-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Cover;
