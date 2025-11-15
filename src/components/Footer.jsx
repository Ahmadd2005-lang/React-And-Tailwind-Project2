import React from "react";
import { TiCss3 } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-10 justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col justify-between items-center space-y-8 md:space-y-2 md:items-start">
          <div className=" text-amber-50 text-center mt-6 md:mt-0">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
          <div>
            <TiCss3 className="text-4xl text-amber-100" />
          </div>

          <div className="flex space-x-3 items-center">
            <a href="#">
              <FaFacebookSquare className="text-3xl text-amber-50" />
            </a>
            <a href="#">
              <BiLogoInstagramAlt className="text-3xl text-amber-50" />
            </a>
            <a href="#">
              <FaYoutube className="text-3xl text-amber-50" />
            </a>
            <a href="#">
              <FaLinkedinIn className="text-3xl text-amber-50" />
            </a>
            <a href="#">
              <FaTwitter className="text-3xl text-amber-50" />
            </a>
          </div>
        </div>

        <div className="flex justify-around space-x-32 text-amber-50">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-slate-300">
              Home
            </a>
            <a href="#" className="hover:text-slate-300">
              About
            </a>
            <a href="#" className="hover:text-slate-300">
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-slate-300">
              Imprint
            </a>
            <a href="#" className="hover:text-slate-300">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-300">
              Credits
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between mb-5">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="flex-1 bg-white px-6 py-2 rounded-full outline-none"
              />

              <button className="bg-orange-500 rounded-full px-4 py-2 ml-2 hover:bg-slate-500 hover:cursor-pointer">
                Go
              </button>
            </div>
          </form>

          <div className="hidden md:block text-amber-50">
            Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
