import Burger from "../../global/assets/icons/burger-checklist-list-menu-navigation-svgrepo-com.svg";

import Facebook from "../../global/assets/icons/social/facebook.svg";
import Instagram from "../../global/assets/icons/social/instagram.svg";
import Twitter from "../../global/assets/icons/social/twitter.svg";
import Youtube from "../../global/assets/icons/social/youtube.svg";
import right_chevron from "../../global/assets/icons/right_chevron.svg";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Bio", href: "/bio" },
  { name: "Store", href: "/store" },
];

const social = [
  { name: "facebook", icon: Facebook },
  { name: "instagram", icon: Instagram },
  { name: "twitter", icon: Twitter },
  { name: "youtube", icon: Youtube },
];

export default function Example() {
  const [open, setOpen] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const location = useLocation();
  const breadCrumbs = location.pathname.split("/");
  console.log(breadCrumbs);

  return (
    <>
      <nav className="bg-white shadow-lg font-conduitExtralight h-[120px]">
        {/*FULL NAV*/}
        <div className="flex justify-center">
          <div className="flex items-center justify-between h-20 max-w-3xl lg:max-w-4xl px-2 w-screen flex-auto">
            {/*LOGO*/}
            <div className="flex flex-none self-center text-4xl">LEE ROYER</div>
            {/*LOGO END*/}

            {/*TOP NAV*/}
            <div className="hidden sm:ml-6 sm:flex shrink">
              <div className="flex shrink space-x-4 ">
                {navigation.map((item) => (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? "font-conduitBold" : "",
                        "flex-shrink rounded-md px-3 py-2 text-lg group text-black transition duration-300"
                      )
                    }
                  >
                    {item.name}
                    <span class="flex shrink max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                  </NavLink>
                ))}
              </div>
            </div>
            {/*TOP NAV END*/}

            <div className="flex">
              {/*Social Media*/}
              {social.map((icon) => (
                <button type="button" className="relative rounded-full p-1">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View Social</span>
                  <img
                    src={icon.icon}
                    className=" mx-[2px] h-4 w-4 sm:h-5 sm:w-5 rounded-full outline outline-2 outline-offset-2 outline-[#838ebc]"
                  ></img>
                </button>
              ))}
              {/*Social Media END*/}

              {/*BURGER && XMARK*/}
              <div className="inset-y-0 flex items-center sm:hidden">
                <button
                  onClick={() => setOpen(true)}
                  className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
                >
                  <img src={Burger} className="h-8 w-8"></img>
                </button>
              </div>
              {/*BURGER && XMARK END*/}
            </div>
          </div>
        </div>
        {/*FULL NAV END*/}

        <section className="flex justify-center h-10 w-screen bg-black shadow-2xl ">
          <div className="flex h-full w-full items-center max-w-3xl lg:max-w-4xl px-2">
            <div className="flex justify-center place-items-center h-full text-white text-xl">
              {breadCrumbs.length > 2
                ? breadCrumbs.splice(1).map((crumb, i) => {
                    crumb = capitalizeFirstLetter(crumb);
                    if (i + 1 === breadCrumbs.length) {
                      return (
                        <>
                          <NavLink
                            className="flex w-full h-full text-white items-center"
                            to={`/${crumb}`}
                          >
                            {crumb}
                          </NavLink>

                          <div className="flex h-4 w-4 mx-2 sm:h-8 sm:w-8">
                            <svg
                              class="text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="m1 9 4-4-4-4"
                              />
                            </svg>
                          </div>
                        </>
                      );
                    } else {
                      return (
                        <div className="flex h-full w-full items-center text-white">
                          {crumb}
                        </div>
                      );
                    }
                  })
                : breadCrumbs.splice(1).map((crumb) => {
                    crumb = capitalizeFirstLetter(crumb);
                    return (
                      <div class="flex h-full w-full text-white items-center">
                        {crumb}
                      </div>
                    );
                  })}
            </div>
          </div>
        </section>

        {/**
         * BREADCRUMB END
         */}
      </nav>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 sm:hidden" onClose={setOpen}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-1/2"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex items-center align-middle h-1/2 w-1/2 flex-col overflow-y-scroll bg-[#939393] shadow-xl">
                      <div className="flex flex-col justify-center relative flex-1 px-4 sm:px-6 space-y-2">
                        {navigation.map((item) => (
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              classNames(
                                isActive ? "text-black " : "text-white",
                                "block rounded-md px-3 py-2 font-medium text-4xl text-end  font-conduitLight "
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
