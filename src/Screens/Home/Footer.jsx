import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
const Footer = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={`${theme ? `bg-[${Colors.whiteTheme}]`:`bg-[${Colors.darkTheme}]`}`}>
      <section className="max-w-[1350px] m-auto">
        <div
          className={`grid grid-cols-1  md:grid-cols-[2fr,1fr,1fr] gap-3 py-20 ${
            theme ? "text-black font-semibold" : "text-white"
          }`}
        >
          <div className="pl-5 md:p-0">
            <p className="text-3xl">
              We develop & create <br /> digital future..
            </p>
          </div>
          <div className="pl-5 pt-5 md:p-0">
            <p className="text-lg mb-5">Address</p>
            <p className="">India</p>
            <p className="">
              Aurobindo Galaxy 8th Floor, Wing-A, Raidurg Hyderabad, Telangana
              500081
            </p>
          </div>
          <div className="px-5 pt-5 md:p-0 md:text-right">
            <p className="text-lg mb-5">Say Hello</p>
            <p className="underline leading-5	mb-5">hello@pathsetter.ai</p>
          </div>
        </div>

        <div className="separator-animated animated-true mt-5"></div>

        <div
          className={`flex flex-col text-center md:flex-row justify-between py-4 flex-nowrap ${
            theme ? "text-black font-semibold" : "text-white "
          } `}
        >
          <div>
            <Link
              to={"/DataDynamo"}
              onClick={() => scrollTo(0, 0)}
              className={`pr-2 md:pr-10  ${
                theme ? "hover:underline" : "hover:text-white"
              }  transition-all ${
                location === "/ProductDesign" && "text-white"
              }`}
            >
              Data Dynamo
            </Link>
            <Link
              to={"/MarketGenie"}
              onClick={() => scrollTo(0, 0)}
              className={`pr-2 md:pr-10  ${
                theme ? "hover:underline" : "hover:text-white"
              }  transition-all ${
                location === "/ProductDesign2" && "text-white"
              }`}
            >
              MarketGenie
            </Link>
            <Link
              to={"/contactus"}
              onClick={() => scrollTo(0, 0)}
              className={`pr-2 md:pr-10  ${
                theme ? "hover:underline" : "hover:text-white"
              }  transition-all ${
                location === "/contactus" && "text-white"
              }`}
            >
              GET A DEMO
            </Link>
          </div>
          <div>
            <p>&#169;&nbsp;2024&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
