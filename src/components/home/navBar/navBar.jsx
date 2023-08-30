import React, { useState } from "react";

import NavLinks from "./navLinks";
import MenuBtn from "./menuBtn";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  // const [isDesktop, setIsDesktop] = useState();

  function toggle_menu() {
    setShowMenu(!showMenu);
    setShowNavBar(!showNavBar);
  }

  return (
    <>
      <NavLinks toggle={toggle_menu} isShow={showNavBar} />
      <MenuBtn toggle={toggle_menu} isShow={showMenu} />
    </>
  );
}

export default NavBar;
