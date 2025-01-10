import React, { useEffect, useState } from "react";
import "./styles/fixedNavbar.css";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ThemeSwitcher from "../components/ThemeSwitcher";
import { useDispatch, useSelector } from "react-redux";

const FixedNavbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation().pathname;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` ${theme? "bg-[#ace4da] text-black": "bg-black text-[#919191]"} z-[999]   text-center text-[13px] font-medium  rounded-md p-4 ${
        scrollY > 740 ? "fixed" : "absolute"
      } transition z-30 top-2 max-lg:right-2`}
    >
      <Link
        to={"/pathsetter"}
        onClick={() => scrollTo(0, 0)}
        className={`headerButton pl-10 hover:text-white transition-all ${location==="/" && "text-white"}`}
      >
        HOME
      </Link>
      <div 
        className="relative inline-block"
        // onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <Link
          // to={"/products"}
          onClick={() => window.scrollTo(0, 0)}
          className={` pr-10 hover:text-white transition-all  pb-3 ${(location === "/DataDynamo" || location === "/MarketGenie") && "text-white"}`}
        >
          Products
        </Link>
        {isDropdownVisible && (
          <ul className="absolute left-0 mt-2 min-w-[120px] bg-black text-[#919191] rounded-md shadow-lg">
            <li>
              <Link
                to={"/pathsetter/DataDynamo"}
                onClick={() => window.scrollTo(0, 0)}
                className={`block px-4 py-2 hover:text-white text-nowrap ${location === "/DataDynamo" && "text-white"}`}
              >
                Data Dynamo
              </Link>
            </li>
            <li>
              <Link
                to={"/pathsetter/MarketGenie"}
                onClick={() => window.scrollTo(0, 0)}
                className={`block px-4 py-2 hover:text-white text-nowrap ${location === "/MarketGenie" && "text-white"}`}
              >
                MarketGenie
              </Link>
            </li>
          </ul>
        )}
      </div>
      <Link
        to={"/pathsetter/contactus"}
        onClick={() => scrollTo(0, 0)}
        className={`headerButton hover:text-white transition-all ${location==="/contactus" && "text-white"}`}
      >
        GET A DEMO
      </Link>
      <Link
        to={"/pathsetter/aboutus"}
        onClick={() => scrollTo(0, 0)}
        className={`headerButton hover:text-white transition-all ${location==="/aboutus" && "text-white"}`}
      >
        About Us
      </Link>
     

      <Link
        to={"/pathsetter/faq"}
        onClick={() => scrollTo(0, 0)}
        className={` hover:text-white transition-all ${location==="/faq" && "text-white"}`}
      >
        FAQs
      </Link>
  
      {/* <Link
        to={"/ProductDesign"}
        onClick={() => scrollTo(0, 0)}
        className={` hover:text-white transition-all ${location==="/ProductDesign" && "text-white"}`}
      >
        Products
      </Link> */}
     
    </nav>
  );
};

export default FixedNavbar;