import React, { useEffect, useState } from "react";
import FixedNavbar from "./FixedNavbar";
import { AiFillThunderbolt } from "react-icons/ai";
import MainSVG from "./MainSVG";
import logo from "../../assets/images/Logonew.png";
import MainSVG2 from "./MainSVG2";
import bgPng from "../../assets/images/gradientPng.png";
import bgTop from "../../assets/images/gradientTop2.png";
import ToggleMenu from "./ToggleMenu";
import MainSVG3 from "./MainSVG3";
import logoBlack from "../../assets/images/logoBlack.png"


const MainSection = ({theme}) => {
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
    <div className="relative ">
      <div className="h-[70vh] absolute left-[0] bottom-0">
        <MainSVG theme={theme}></MainSVG>
      </div>
      <div className="h-[70vh] absolute right-[0] bottom-0">
        <MainSVG3 theme={theme}></MainSVG3>
      </div>
      <div className="h-[70vh] absolute right-[0] bottom-0 ">
        <MainSVG2 theme={theme}></MainSVG2>
      </div>

      <div
        id="mainContainer"
        className={`h-[100vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative ${theme? "text-black" : "text-white"}`}
      >
        <img
          src={bgPng}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:w-4/5 md:top-1/2"
        />
        <div className="absolute left-3 top-2 flex gap-3 items-center">
          <img src={theme?logoBlack:logo} className="w-[250px] md:w-[300px]"></img>
        </div>

        {/* <ToggleMenu></ToggleMenu> */}

        {/* <ScrollTopButton></ScrollTopButton> */}
        <FixedNavbar theme={theme}></FixedNavbar>
        <div
          className={`text-[13px] md:text-[20px] flex gap-2 items-center opacity-0 ${
            animated ? "animate-slide-up1" : ""
          } `}
        >
          <div className={`flex gap-2 z-20`}>
            <div>
              {/* <p className="text-[13px] ">N E W</p> */}
              <p className=" text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-400 to-[#843C8F] text-transparent bg-clip-text">
                N
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-400 to-[#843C8F] text-transparent bg-clip-text">
                E
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-400 to-[#843C8F] text-transparent bg-clip-text">
                W
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold bg-gradient-to-br from-green-400 via-blue-400 to-[#843C8F] text-transparent bg-clip-text">
            Next-Generation Artificial Intelligence
            </p>
          </div>
        </div>
        <h1
          className={`text-[30px] font-bold md:text-[80px] opacity-0 text-center mt-10 ${
            animated ? "animate-slide-up2" : ""
          }  `}
        >
          Future Proofing the 
          <br /> Business with Gen AI {" "}
          <AiFillThunderbolt
            // size={100}
            className="text-[30px] md:text-[80px]"
            color={"#f4ad43"}
            style={{ display: "inline" }}
          />
        </h1>
        <p
          className={`text-[10px] md:text-[20px] mt-5 text-center  opacity-0  ${
            animated ? "animate-slide-up3" : ""
          } `}
        >
          We curate innovative AI solutions to future-proof your business, <br />driving efficient performance and revealing new possibilities.
          
        </p>
      </div>
    </div>
  );
};

export default MainSection;
