import React from "react";
import NavBar from "../navBar/navBar";
import images from "../../global/data/gallery.json";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const image = images.images;
  const { title } = useParams();
  console.log(title);
  return (
    <>
      <div className="flex h-screen flex-col overflow-y-auto">
        <NavBar />
        <div className="flex justify-center items-center mb-4 w-full h-full overflow-y-auto">
          <div className="flex items-center w-fit h-fit my-8 max-w-xl">
            {image
              .filter((art) => art.title === title)
              .map((filteredArt) => (
                <img
                  src={require("../../global/data/galleryImages/" +
                    filteredArt.src +
                    ".png")}
                  alt="Art Piece"
                ></img>
              ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[120px] w-full mb-6 space-y-4">
          {image
            .filter((art) => art.title === title)
            .map((filteredArt) => (
              <>
                <div className="flex text-4xl">{filteredArt.title}</div>
                <div className="flex text-lg">
                  {filteredArt.width} X {filteredArt.height} INCHES
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
