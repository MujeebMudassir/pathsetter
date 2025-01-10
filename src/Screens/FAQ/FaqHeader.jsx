import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logonew.png";
import logoBlack from "../../assets/images/logoBlack.png";
import FixedNavbar from "../Home/FixedNavbar";

const FaqHeader = ({theme}) => {
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
    <div className="relative z-50">
      
      <div
        id="mainContainer"
        className={`h-[50vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative ${theme ?"text-black":"text-white"} `}
      >
        {/* <img
          width="100%"
          src={bgTop}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 top-[-15%] md:top-[-65%] w-full h-[50vh]"
        /> */}

        {/* <img
          src={bgPng}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:w-4/5 md:top-1/2"
        /> */}
         <div className="absolute left-3 top-2 flex gap-3 items-center">
          <img src={theme?logoBlack:logo} className="w-[250px] md:w-[300px]"></img>
        </div>
        {/* <ScrollTopButton></ScrollTopButton> */}
        <FixedNavbar/>
        <h1
          className={`text-[40px] font-bold opacity-0 text-center ${
            animated ? "animate-slide-up2" : ""
          } md:text-[80px]`}
          
        >
         FAQs
        </h1>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
            animated ? "animate-slide-up3" : ""
          } `}
        >
          Welcome to Pathsetter.AI
        </p>
        {/* <h1
          className={`text-[30px] md:text-[40px] font-bold text-white opacity-0 text-center mt-40 ${
            animated ? "animate-slide-up2" : ""
          }`}
        >
         Questions
        </h1> */}
        
      </div>
     
    </div>
  );
};

export default FaqHeader;
