import React, { useState, useEffect } from "react";
import ImageSkelly from "../imageSkelly/ImageSkelly";
import NavBar from "../navBar/navBar";
import images from "../../global/data/gallery.json";
import { NavLink } from "react-router-dom";

function Gallery() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <NavBar />

        <div className="flex flex-grow justify-center overflow-auto mb-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl lg:max-w-6xl">
            {images.images.map((img) => (
              <div>
                <NavLink to={`/gallery/${img.title}`}>
                  <ImageSkelly
                    className="max-w-full rounded-lg"
                    src={require("../../global/data/galleryImages/" +
                      img.src +
                      ".png")}
                    alt="Art Piece"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
