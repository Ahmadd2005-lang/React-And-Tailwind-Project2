import React, { useState } from "react";
import { TiCss3 } from "react-icons/ti";
import { LuMenu } from "react-icons/lu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar links
  const links = ["Portfolio", "About", "Contact", "Social"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container  mx-auto p-6">
      <div className="flex items-center justify-between">
        <div>
          <TiCss3 className=" size-10" />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link, index) => (
            <a
              key={index}
              className="text-slate-900 hover:text-orange-500 hover:cursor-pointer"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="text-white bg-orange-500 rounded-full py-2 px-6 hover:bg-slate-900"
          >
            Call Me
          </a>
        </div>

        <button id="mobile-btn" className="md:hidden" onClick={toggleMenu}>
          <LuMenu className="text-3xl" />
        </button>
      </div>

      <div className="md:hidden">
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute flex flex-col items-center space-y-4 bg-gray-50 py-8 left-6 right-6 font-bold drop-shadow-lg border-gray-300"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-slate-900 hover:text-orange-500 hover:cursor-pointer"
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="text-white bg-orange-500 rounded-full py-2 px-6 hover:bg-slate-900"
            >
              Call Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
