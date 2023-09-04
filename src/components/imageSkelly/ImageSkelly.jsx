import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

function ImageSkelly(props) {
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
          hash="UAG[[{?b~qM{_3~q~qof9FM{WBIU00-;j[fQ"
          width="200"
          height="200"
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

export default ImageSkelly;
