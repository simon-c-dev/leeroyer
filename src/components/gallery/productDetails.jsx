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
        <div className="flex justify-center mb-4 w-full h-full overflow-y-auto">
          <div className="flex flex-wrap items-center w-fit h-fit my-16 max-w-xl">
            {image
              .filter((art) => art.title === title)
              .map((filteredArt) => (
                <>
                  <img
                    src={require("../../global/data/galleryImages/" +
                      filteredArt.src +
                      ".png")}
                    alt="Art Piece"
                    className="flex "
                  ></img>
                  <div className="flex flex-wrap justify-center items-center w-screen mt-6">
                    <div className="flex text-4xl w-full justify-center">
                      {filteredArt.title}
                    </div>
                    <div className="flex text-lg w-full justify-center">
                      {filteredArt.width} X {filteredArt.height} INCHES
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
