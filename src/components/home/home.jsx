import React from "react";

import Banner from "./banner/banner";
import Url from "./url/url";
import NavBar from "./navBar/navBar";

import background from "../../global/assets/images/2560x5120_leeroyer_HOME.jpg";

function Home() {
  return (
    <div className="">
      <Banner />
      <Url />
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
