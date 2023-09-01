import React from "react";
import NavBar from "./navBar/navBar";

import background from "../../global/assets/images/2560x5120_leeroyer_HOME.jpg";

function Home() {
  return (
    <div className="">
      <div
        className="h-28 text-7xl text top-1/2 w-full bg-white fixed flex justify-center items-center -translate-y-1/2 font-conduitExtralight
    lg:h-36 lg:text-8xl"
      >
        LEE ROYER
      </div>
      <div className=" pl-4 h-12 bg-transparent fixed flex w-full items-center">
        <div className=" text-2xl lg:text-4xl font-conduitLight">
          leeroyer.com
        </div>
      </div>
      <NavBar />
      <img
        className="min-h-screen overflow-x-hidden"
        src={background}
        alt="JLR"
      />
    </div>
  );
}

export default Home;
