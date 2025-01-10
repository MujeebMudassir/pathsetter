import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logonew.png";
import bgTop from "../../assets/images/gradientTop2.png";
import FixedNavbar from "../Home/FixedNavbar";
const Header = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="relative">
      <div
        id="mainContainer"
        className="h-[50vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white"
      >
        {/* <img
          width="100%"
          src={bgTop}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 top-[-25%] md:top-[-60%] w-full"
        /> */}

        <div className="absolute left-3 top-2 flex gap-3 items-center">
          <img src={logo} className="w-[300px] "></img>
        </div>
        <FixedNavbar />
        <h1
          className={`text-[40px] font-bold opacity-0 text-center mt-10 ${
            animated ? "animate-slide-up2" : ""
          } md:text-[80px]`}
        >
          About Us
        </h1>
        <p
          className={`text-[10px] md:text-[20px] text-center p-2  opacity-0  ${
            animated ? "animate-slide-up3" : ""
          } `}
        >
          At Pathsetter.AI, we revolutionize the way businesses and public
          sector entities harness the power of their data. Our suite of
          AI-driven solutions transforms complex data into actionable insights,
          empowering you to make informed decisions and drive growth. Explore
          our products to discover how we can help you navigate your data
          journey.
        </p>
      </div>
    </div>
  );
};

export default Header;
