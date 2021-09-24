import React from "react";
import "./Album.css";

function album({ id, name, image, music, song }) {
  return (
    <div key={id} className="album">
      <img src={image} alt={name} />
      <div className="col">
        <div className="col1">
          <h1> {name} </h1>
          <a href={song}>
            <button>Play</button>
          </a>
        </div>
        <div className="col2">
          <h2> {music} </h2>
          <h3> {album} </h3>
        </div>
      </div>
    </div>
  );
}

export default album;
