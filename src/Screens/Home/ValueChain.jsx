import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { PiTreeStructureBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { SiFlathub } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import jsonData from "../../assets/images/Pdf.json";

const ValueChain = ({theme}) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const data = jsonData.data_4;

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const renderPopupContent = (item) => {
    switch (item) {
      case data.Data_4_key_1.key_1:
        return (
          <>
            {data.Data_4_key_1.popup_value_1.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_1.key_2:
        return (
          <>
            {data.Data_4_key_1.popup_value_2.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_1.key_3:
        return (
          <>
            {data.Data_4_key_1.popup_value_3.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_1.key_4:
        return (
          <>
            {data.Data_4_key_1.popup_value_4.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_1.key_5:
        return (
          <>
            {data.Data_4_key_1.popup_value_5.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_2.key_1:
        return (
          <>
            {data.Data_4_key_2.popup_value_1.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_2.key_2:
        return (
          <>
            {data.Data_4_key_2.popup_value_2.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_2.key_3:
        return (
          <>
            {data.Data_4_key_2.popup_value_3.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      case data.Data_4_key_2.key_4:
        return (
          <>
            {data.Data_4_key_2.popup_value_4.map((i) => (
              <p className="flex text">
                <GoDotFill className="mt-1 mr-1" size={20} />
                {i}
              </p>
            ))}
          </>
        );
        break;

      default:
        return null;
    }
  };

  const renderTextWithLineBreaks = (text) => {
    return text.split("<br />").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className={`${theme?`text-black`:`text-white`} pb-5 px-5 w-full`}>
      <p className=" text-xl ml-5 mb-12">{jsonData.page_4.split(" ").join(" \u00A0 ")}</p>
      {/* <p className="text-white mb-10 mt-2 ml-5">
        *Hover on icons to view description
      </p> */}
      {/* {hoveredItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ml-10 md:ml-5"></div>
      )} */}
      {/* Primary Activities */}
      <div className="md:hidden text-center pb-8">
        <p className="text-xl font-semibold text-cyan-800 ">
          {renderTextWithLineBreaks(
            data.Data_4_key_1.headLine.replace(" ", "<br />")
          )}
        </p>
      </div>
      <div className=" mb-5 justify-around flex flex-wrap w-full gap-5">
        <div className=" hidden md:block transform -rotate-90 w-[70px] h-[80px] md:mt-7 md:pt-4">
          <p className="text-xl font-semibold text-cyan-800 ">
            {renderTextWithLineBreaks(
              data.Data_4_key_1.headLine.replace(" ", "<br />")
            )}
          </p>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter(data.Data_4_key_1.key_1)}
          onMouseLeave={handleMouseLeave}
          className="relative cursor-pointer w-28"
        >
          <FaTruckArrowRight
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className="mt-4 text-[12px] md:text-[16.3px]">
            {data.Data_4_key_1.key_1}
          </p>
          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_1.key_1 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_1.key_1)}
            </div>
          )}
        </div>

        <div
          className="relative w-28"
          onMouseEnter={() => handleMouseEnter(data.Data_4_key_1.key_2)}
          onMouseLeave={handleMouseLeave}
        >
          <SiFlathub
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className="mt-4 text-[12px] md:text-[16.3px]">
            {data.Data_4_key_1.key_2}
          </p>
          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_1.key_2 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_1.key_2)}
            </div>
          )}
        </div>
        <div
          className="relative w-28"
          onMouseEnter={() => handleMouseEnter(data.Data_4_key_1.key_3)}
          onMouseLeave={handleMouseLeave}
        >
          <HiArrowTrendingUp
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className="mt-4 text-[12px] md:text-[16.3px]">
            {data.Data_4_key_1.key_3}
          </p>
          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_1.key_3 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_1.key_3)}
            </div>
          )}
        </div>
        <div
          className="relative w-28"
          onMouseEnter={() => handleMouseEnter(data.Data_4_key_1.key_4)}
          onMouseLeave={handleMouseLeave}
        >
          <TbTargetArrow
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className="mt-4 text-[12px] md:text-[16.3px]">
            {data.Data_4_key_1.key_4}
          </p>
          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_1.key_4 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_1.key_4)}
            </div>
          )}
        </div>
        <div
          className="relative w-28"
          onMouseEnter={() => handleMouseEnter(data.Data_4_key_1.key_5)}
          onMouseLeave={handleMouseLeave}
        >
          <FaHeadSideVirus
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className="mt-4 text-[12px] md:text-[16.3px]">
            {data.Data_4_key_1.key_5}
          </p>
          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_1.key_5 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_1.key_5)}
            </div>
          )}
        </div>
      </div>

      {/* Support Activities */}
      <div className="block md:hidden text-center">
        <p className="text-xl font-semibold text-cyan-800 ">
          {renderTextWithLineBreaks(
            data.Data_4_key_2.headLine.replace(" ", "<br />")
          )}
        </p>
      </div>
      <div className="text-white mt-10 md:mt-20 mb-10 sm:flex sm:flex-wrap sm:justify-around w-full grid grid-cols-2 gap-5 justify-items-center">
        <div className="transform -rotate-90 hidden md:block w-[80px] h-[80px] md:mt-7 md:pt-1">
          <p className="text-xl font-semibold text-cyan-800 ">
            {renderTextWithLineBreaks(
              data.Data_4_key_2.headLine.replace(" ", "<br />")
            )}
          </p>
        </div>
        <div className="relative w-28" onMouseEnter={() => handleMouseEnter(data.Data_4_key_2.key_1)}
          onMouseLeave={handleMouseLeave}>
          <PiTreeStructureBold
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className={`${theme?`text-black`:`text-white`} mt-4 text-[12px] md:text-[16.3px]`}>
            {data.Data_4_key_2.key_1}
          </p>

          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_2.key_1 && (
            <div className="text-white absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_2.key_1)}
            </div>
          )}
        </div>
        <div className="relative w-28" onMouseEnter={() => handleMouseEnter(data.Data_4_key_2.key_2)}
          onMouseLeave={handleMouseLeave}>
          <CgNotes
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className={`${theme?`text-black`:`text-white`} mt-4 text-[12px] md:text-[16.3px]`}>
            {data.Data_4_key_2.key_2}
          </p>

          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_2.key_2 && (
            <div className="absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_2.key_2)}
            </div>
          )}
        </div>
        <div className="relative w-28"  onMouseEnter={() => handleMouseEnter(data.Data_4_key_2.key_3)}
          onMouseLeave={handleMouseLeave}>
          <GrTechnology
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className={`${theme?`text-black`:`text-white`} mt-4 text-[12px] md:text-[16.3px]`}>
            {data.Data_4_key_2.key_3}
          </p>

          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_2.key_3 && (
            <div className="absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_2.key_3)}
            </div>
          )}
        </div>
        <div className="relative w-28" onMouseEnter={() => handleMouseEnter(data.Data_4_key_2.key_4)}
          onMouseLeave={handleMouseLeave} >
          <MdOutlineShoppingCartCheckout
            fontSize={50}
            className={`${theme?`text-black`:`text-white`} border-2 p-2 rounded-full`}
          />
          <p className={`${theme?`text-black`:`text-white`} mt-4 text-[12px] md:text-[16.3px]`}>
            {data.Data_4_key_2.key_4}
          </p>

          <IoMdArrowDropright
            fontSize={45}
            className="text-sky-700 absolute top-0 right-0"
          />
          {hoveredItem === data.Data_4_key_2.key_4 && (
            <div className="absolute bg-sky-900 p-4 rounded-lg top-10 -left-10 md:top-0 md:left-24 z-50">
              <button
                onClick={handleMouseLeave}
                className="text-white float-right"
              ></button>
              {renderPopupContent(data.Data_4_key_2.key_4)}
            </div>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ValueChain;
