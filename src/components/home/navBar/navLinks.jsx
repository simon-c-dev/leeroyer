import React from "react";
import { Link } from "react-router-dom";
import ExitIcon from "../../../global/assets/icons/xmark-white.svg";

function NavLinks({ toggle, isShow }) {
  const links = [
    { key: 0, name: "News", url: "/news" },
    { key: 1, name: "Gallery", url: "/gallery" },
    { key: 2, name: "Bio", url: "/bio" },
    { key: 3, name: "Store", url: "/store" },
  ];

  return (
    <div
      className={`fixed flex bg-black left-1/2 justify-center top-full -translate-x-1/2 opacity-100 duration-500 
      w-72 h-56 lg:w-80 lg:h-64 ${isShow ? "-translate-y-full" : null}`}
    >
      <div className="flex absolute justify-center items-center text-white w-12 h-12 right-0 text-6xl pointer-events-auto">
        {
          <img
            onClick={() => toggle()}
            src={ExitIcon}
            alt="exit icon"
            className="w-8 h-8"
          />
        }
      </div>
      <ul
        className="absolute grid h-full m-0 py-4 content-evenly text-left justify-center justify-self-center list-none text-white font-conduitLight
      text-3xl lg:text-4xl"
      >
        {links.map((link) => (
          <li key={link.key}>
            <Link to={link.url} onClick={() => toggle()}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavLinks;
