import React from "react";

function MenuBtn({ toggle, isShow }) {
  return (
    <>
      <div
        onClick={() => toggle()}
        className={` w-32 h-14 lg:w-48 lg:h-20 fixed flex bg-black justify-center items-center left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 duration-500  ${
          isShow ? "opacity-0 -translate-x-1/2 translate-y-full" : null
        }`}
      >
        <div className="text-4xl lg:text-5xl text-white font-conduitLight mb-2">
          <h1>Menu</h1>
        </div>
      </div>
    </>
  );
}

export default MenuBtn;
