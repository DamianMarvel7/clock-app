import React, { useEffect, useState } from "react";
import iconMoon from "../assets/desktop/icon-moon.svg";
import iconArrowDown from "../assets/desktop/icon-arrow-down.svg";
import iconArrowUp from "../assets/desktop/icon-arrow-up1.svg";
import { greetingMessage, isDaytime, timeConverter } from "../helper";
import { fetchData } from "../fetch/Worldtime";

const TimeNormal = () => {
  const [time, setTime] = useState();
  const [timezone, setTimezone] = useState();
  const [region, setRegion] = useState();
  const [greeting, setGreeting] = useState();
  const [buttonText, setButtonText] = useState("More");
  const [buttonIcon, setButtonIcon] = useState(iconArrowDown);

  useEffect(() => {
    const fetchDataAndInitialize = async () => {
      const json = await fetchData("https://worldtimeapi.org/api/ip");
      const formattedTime = timeConverter(json.datetime);
      const timezone = json.abbreviation;
      const region = json.timezone;
      setTime(formattedTime);
      setTimezone(timezone);
      setRegion(region.split("/")[1]);
      setGreeting(greetingMessage(formattedTime));

      if (isDaytime(formattedTime)) {
        document.querySelector("body").setAttribute("data-theme", "day");
      } else {
        document.querySelector("body").setAttribute("data-theme", "night");
      }
    };

    fetchDataAndInitialize();

    const intervalId = setInterval(async () => {
      fetchDataAndInitialize();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    const quoteDiv = document.querySelector(".quote");
    const timeExpandDiv = document.querySelector(".time-expand");

    if (quoteDiv.style.display === "none") {
      quoteDiv.style.display = "flex";
      timeExpandDiv.style.display = "none";
      document.querySelector("body").setAttribute("data-button", "normal");
      setButtonText("More");
      setButtonIcon(iconArrowDown);
    } else {
      quoteDiv.style.display = "none";
      timeExpandDiv.style.display = "grid";
      document.querySelector("body").setAttribute("data-button", "expand");
      setButtonText("Less");
      setButtonIcon(iconArrowUp);
    }
  };

  return (
    <div className="container time-normal flow">
      <div className="greeting flex-center">
        <img src={iconMoon} alt="" />
        <span className="h6">
          {greeting}
          <span className="greeting-optional">, it's currently</span>
        </span>
      </div>
      <h2 className="h1">
        {time} <span className="h4">{timezone}</span>
      </h2>

      <div className="more-section flex-space flow">
        <span className="h3">in {region}</span>
        <button className="btn btn-more" onClick={handleClick}>
          <span className="h6">{buttonText}</span>
          <div className="arrow-wrapper">
            <img src={buttonIcon} alt="" className="arrow-img" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TimeNormal;
