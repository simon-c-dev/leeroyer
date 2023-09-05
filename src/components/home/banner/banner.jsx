import { isMobile, isTablet, isDesktop } from "react-device-detect";

function Banner() {
  return (
    <div className="fixed flex h-screen w-screen justify-center items-center font-conduitExtralight">
      <div
        className="fixed flex h-28 w-screen bg-white justify-center items-center 
    lg:h-36 "
      >
        {isMobile ? (
          <div className="flex text-7xl lg:text-8xl h-1/2">LEE ROYER</div>
        ) : (
          <div className="flex text-7xl lg:text-8xl">LEE ROYER</div>
        )}
      </div>
    </div>
  );
}

export default Banner;
