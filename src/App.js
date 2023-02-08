import Search from "./Search";
import City from "./City";
import OpenSource from "./OpenSource";
import Playlist from "./Playlist";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Forecast from "./Forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <City />
          <div className="row">
            <Humidity />
            <Wind />
          </div>
          <Playlist />
          <Forecast />
        </div>
      </div>
      <OpenSource />
    </div>
  );
}
