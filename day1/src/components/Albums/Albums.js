import React from "react";
import "./Albums.css";
import Album from "../Album/Album";

function Albums({albums}) {
  return (
    <div className="albums_container">
      {albums.map((album) => {
        const { id, name, image, music, song } = album;
        return (
          <Album
            id={id}
            music={music}
            name={name}
            image={image}
            song={song}
          />
        );
      })}
    </div>
  );
}

export default Albums;
