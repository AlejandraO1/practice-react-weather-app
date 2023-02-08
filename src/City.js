import React from "react";

import "./City.css";

export default function Search() {
  return (
    <div className="current-city-weather">
      <h2 id="city">New York</h2>
      <ul>
        <li>
          Last updated: <span id="date-time">12:00</span>
        </li>
        <li>
          <img
            id="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
        </li>
        <li>
          <span className="current-temp" id="temperature"></span>
          <span className="units">
            <sup>
              1
              <a
                href="/#"
                rel="noreferrer"
                id="fahrenheit-link"
                className="active"
              >
                °F
              </a>{" "}
              | 2
              <a href="/#" rel="noreferrer" id="celsius-link">
                °C
              </a>
            </sup>
          </span>
        </li>
        <li>
          <span id="description"></span>
        </li>
      </ul>
    </div>
  );
}
