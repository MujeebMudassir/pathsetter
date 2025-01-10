import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./styles/ToggleMenu.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import ThemeSwitcher from "../components/ThemeSwitcher";
const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const location = useLocation().pathname;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative z-[999] toggle-menu">
      <button
        className={`fixed top-5 right-4 z-50 p-2 ${theme?"bg-[#03091D] border border-white text-white": "bg-white border text-black"}  rounded-md `}
        onClick={toggleMenu}
      >
        {isOpen ? <IoClose size={23}></IoClose> : <IoMenu size={23}></IoMenu>}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#03091d] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="p-4 pt-20">
          <div className="flex flex-col">
            <Link
              to={"/pathsetter"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/" && "bg-white text-black"}`}
            >
              Home
            </Link>
            <Link
              to={"/pathsetter/contactus"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/contactus" && "bg-white text-black"}`}
            >
              GET A DEMO
            </Link>
            <Link
              to={"/pathsetter/DataDynamo"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/DataDynamo" && "bg-white text-black"}`}
            >
              Data Dynamo
            </Link>
            <Link
              to={"/pathsetter/MarketGenie"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/MarketGenie" && "bg-white text-black"}`}
            >
              MarketGenie
            </Link>
            <Link
              to={"/pathsetter/aboutus"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/about" && "bg-white text-black"}`}
            >
              About Us
            </Link>
            <Link
              to={"/pathsetter/faq"}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className={`mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out ${location==="/faq" && "bg-white text-black"}`}
            >
              FAQs
            </Link>
          </div>
          <div className="absolute bottom-5">

        <ThemeSwitcher></ThemeSwitcher>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
