import React, { useState } from "react";
import "./QuickScanAi.css";
import pathicon from "../../assets/images/Logonew.png";
import QuickScanAi from "./QickScanAi";
import IndiaOutlet from "./IndiaOutlet";
import JobRole from "./JobRoles";
import Investment from "./Invesment";
import ValueChain from "./ValueChain";
import AISolutions from "./AISolutions";
import RiskMatrix from "./RiskMatrix";
import "./styles/AllMenu.css";

const AllMenu = ({ theme }) => {
  const [selectOutlet, setSelectOutlet] = useState(1);

  // Array for dynamic menu items
  const menuItems = [
    {
      label: "Global outlook",
      component: <QuickScanAi theme={theme} />,
      className: "rounded-full",
    },
    {
      label: "India outlook",
      component: <IndiaOutlet theme={theme} />,
      className: "rounded-full",
    },
    {
      label: "Job Roles",
      component: <JobRole theme={theme} />,
      className: "rounded-full",
    },
    {
      label: "Return on Investment",
      component: <Investment theme={theme} />,
      className: "rounded-[36px] w-[155px]",
    },
    {
      label: "Value Chain",
      component: <ValueChain theme={theme} />,
      className: "rounded-full",
    },
    {
      label: "AI Solutions",
      component: <AISolutions theme={theme} />,
      className: "rounded-full",
    },
    {
      label: "Risk Matrix",
      component: <RiskMatrix theme={theme} />,
      className: "rounded-full",
    },
  ];

  const handleClick = (index) => {
    setSelectOutlet(index);
  };

  const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="menuBar relative my-5 w-full">
        <button
          className="w-full p-3 rounded-lg bg-gray-700 text-white flex justify-between items-center"
          onClick={handleToggle}
        >
          <span>{menuItems[selectOutlet - 1].label}</span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </button>
        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-gray-700 text-white rounded-lg shadow-lg z-10 overflow-hidden">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-2 cursor-pointer hover:bg-sky-600 ${
                  selectOutlet === index + 1 ? "bg-sky-600" : ""
                }`}
                onClick={() => {
                  handleClick(index + 1);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="max-w-[1100px] mx-auto w-full my-10 md:my-20 px-2">
        <h1
          className={`font-semibold ${
            theme ? "text-black" : "text-white"
          } text-[30px] text-center`}
        >
          AI Quick Scan
        </h1>
      </div>
      <div
        className={`mainSection grid relative ${
          theme ? `text-black` : `text-white`
        }  mx-auto w-full md:w-10/12 border-2 border-gray-600 px-5 pt-5 pb-10 rounded-lg shadow-lg shadow-cyan-400/100 mb-10 min-h-[650px]`}
      >
        <div className={`menuBarXL border-r-2 ${theme && "border-black"}`}>
          {menuItems.map((item, index) => (
            <p
              key={index}
              className={`text-lg md:text-xl font-semibold py-2 px-5 mt-5 cursor-pointer w-fit text-nowrap ${
                selectOutlet === index + 1 ? `bg-sky-600 ${item.className}` : ""
              }`}
              onClick={() => handleClick(index + 1)}
            >
              {item.label}
            </p>
          ))}
        </div>
        <DropDown />
        <div
          className={`${
            selectOutlet === 7 ? "" : "flex justify-center items-center"
          }`}
        >
          {menuItems[selectOutlet - 1].component}
        </div>
        <div className="absolute -z-10 flex flex-col items-end right-2 bottom-2">
          <p>powered by </p>
          <img src={pathicon} alt="" className="pathicon" />
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
