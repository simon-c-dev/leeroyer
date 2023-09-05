import React, { useState, useEffect } from "react";
import skelly_img from "../../global/assets/icons/img-placeholder.svg";

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
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div
          className={`items-center justify-center w-full h-full bg-gray-300 rounded dark:bg-gray-300`}
        >
          <img
            src={skelly_img}
            className={`
            ${props.className} 
            ${imageLoaded ? "hidden" : "inline"}`}
            alt={props.alt}
          ></img>
        </div>
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
