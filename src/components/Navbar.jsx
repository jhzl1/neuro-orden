import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

import { routes } from "../routes/routes";
import { itemsNavbar } from "../config/itemsNavbar";
import navLogo from "./assets/img/neuro.png";

function Navbar() {
  const { home } = routes;

  return (
    <nav className="relative z-20 px-10 py-7 bg-white">
      <div className=" pb-2 ">
        <Popover>
          <div className="px-4 sm:px-6 lg:px-8">
            <nav
              className="flex items-center justify-between sm:h-10 "
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to={home}>
                    <img src={navLogo} alt="logo" width="80" />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-5">
                {itemsNavbar.map(({ path, name }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className="link-navbar transitions"
                    activeClassName="border-indigo-700"
                  >
                    {name}
                  </NavLink>
                ))}

                <a
                  href="https://instagram.com/neuroorden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-navbar transitions"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/neuro.orden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-navbar transitions"
                >
                  <i className="fab fa-facebook-square"></i>
                </a>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto ml-5"
                      src={navLogo}
                      alt="Tu Pago Global"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {itemsNavbar.map(({ path, name }) => (
                    <NavLink
                      key={path}
                      to={path}
                      className="mx-4 block px-3 py-2 rounded-md text-base font-medium   hover:bg-gray-50  text-gray-500 hover:text-yellow-500"
                      activeClassName="text-yellow-500"
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
