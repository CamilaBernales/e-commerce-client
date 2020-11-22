import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import { routesClient } from "./constants";

const Header = () => {
  console.log(routesClient);
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const onButtonClick = () => {
    setHiddenMenu(!hiddenMenu);
  };

  return (
    <nav className="bg-pink-500 ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              id="boton"
              onClick={onButtonClick}
              className="flex items-center px-3 py-2 border rounded text-white border-pink-400 hover:text-white hover:border-white"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span className="font-semibold text-xl tracking-tight">
                Shit Happends
              </span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex items-center justify-center space-x-4 m-auto md:m-auto">
                {routesClient.map((element, index) => {
                  return (
                    <Link
                      key={index}
                      to={element.route}
                      className={element.className}
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div className="inline-block flex items-center text-lg mb-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
      {hiddenMenu ? (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {routesClient.map((element, index) => {
              return (
                <Link
                  key={index}
                  to={element.route}
                  className={element.className}
                >
                  {element.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
