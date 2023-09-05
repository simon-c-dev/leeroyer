import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

function HomeSkelly(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = props.src;
    img.className = props.className;
    img.alt = props.alt;
  }, [props]);

  return (
    <>
      <div
        className={`${props.className} ${imageLoaded ? "hidden" : "inline"}`}
      >
        <Blurhash
          hash="@AG+UM?b~q_3~q~q9FM{WB00-;j[-;xuof-;M{RjM{%MIUxu%MRjayWBj["
          width={window.innerWidth}
          height={window.innerHeight}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={props.src}
        className={`${props.className} ${!imageLoaded ? "hidden" : "inline"}`}
        alt={props.alt}
      ></img>
    </>
  );
}

export default HomeSkelly;
