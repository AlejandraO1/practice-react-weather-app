import React from "react";

import "./Playlist.css";

export default function Playlist() {
  return (
    <ul>
      <li>
        <iframe
          title="Playlist"
          src="https://open.spotify.com/embed/track/0FDzzruyVECATHXKHFs9eJ?utm_source=generator&theme=0"
          id="playlist"
          width="60%"
          height="80"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </li>
    </ul>
  );
}
