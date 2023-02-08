import React from "react";
import Location from "./Location";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <div className="search-location">
        <form id="search-bar">
          <input
            type="text"
            placeholder="Search city"
            autoComplete="off"
            autoFocus="on"
            id="city-input"
          />
          <button id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <Location />
      </div>
    </div>
  );
}
