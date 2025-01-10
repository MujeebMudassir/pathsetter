import React, { useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import jsonData from "../../assets/images/Pdf.json";

const RiskMatrix = ({theme}) => {
  const riskMatrixData = jsonData.data_6;
  const [btnRect, setBtnRect] = useState(0);
  const [popRect, setPopRect] = useState(0);

  const handleHover = (e, popUpRef) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const popUpRect = popUpRef.current.getBoundingClientRect();
    setBtnRect(buttonRect);
    setPopRect(popUpRect);

    // Determine available space and adjust positioning
    // if (buttonRect.right + popUpRect.width + 50 > window.innerWidth) {
    //   popUpRef.current.style.left = `0`;
    //   popUpRef.current.style.right = `0`;
    // } else {
    //   popUpRef.current.style.left = "0";
    // }

    // if (buttonRect.bottom + popUpRect.height > window.innerHeight) {
    //   popUpRef.current.style.top = `50px`;
    // } else {
    //   popUpRef.current.style.top = "50px";
    // }
  };

  return (
    <div className="grid h-[400px] md:h-[600px]">
      <div className="grid grid-cols-2 text-[12px] md:text-[16px]">
        <div className="grid grid-row-2">
          <div className="relative">
            {/* Mapping over the first two data points */}
            {riskMatrixData.slice(0, 2).map((item, index) => {
              const popUpRef = useRef(null);
              return (
                <div
                  key={index}
                  className={`absolute ${
                    index === 0
                      ? "right-[10%] top-[20%]"
                      : "left-[25%] bottom-[25%]"
                  } cursor-pointer group`}
                  onMouseEnter={(e) => handleHover(e, popUpRef)}
                >
                  <button className="text-white bg-slate-600 p-3">
                    {item.headLine}
                  </button>
                  {/* Hover pop-up */}
                  <div
                    // ref={popUpRef}
                    className="absolute top-[60px] left-0 hidden group-hover:flex items-start w-72 p-4 bg-sky-900 text-white rounded-lg shadow-lg z-50"
                  >
                    <div className="absolute top-[-15px]  lg:block  w-0 h-0 border-[8px] border-r-transparent  border-l-transparent border-t-transparent border-b-sky-900"></div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2">
                        {item.sub_head}
                      </h3>
                      <p className="flex text-sm leading-5">
                        <GoDotFill className="mt-1 mr-1" />
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`border-t-2 ${theme&&"border-black"}`}></div>
        </div>
        <div className="grid grid-row-2">
          <div className={`border-l-2 relative ${theme&&"border-black"}`}>
            {/* Mapping over the next three data points */}
            {riskMatrixData.slice(2).map((item, index) => {
              const popUpRef = useRef(null);
              return (
                <div
                  key={index + 2}
                  className={`absolute ${
                    index === 0
                      ? "right-[20%] top-[5%]"
                      : index === 1
                      ? "right-[2%] bottom-[40%]"
                      : "left-[10%] bottom-[10%]"
                  } cursor-pointer group`}
                  onMouseEnter={(e) => handleHover(e, popUpRef)}
                >
                  <button className="text-white bg-slate-600 p-3">
                    {item.headLine}
                  </button>
                  {/* Hover pop-up */}
                  <div
                    // ref={popUpRef}
                    className="absolute top-[60px] right-0 hidden group-hover:flex items-start w-72 p-4 bg-sky-900 text-white rounded-lg shadow-lg z-50"
                  >
                    <div className={"absolute top-[-15px] right-[10px] border-[8px] border-r-transparent border-l-transparent border-t-transparent border-b-sky-900" }></div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2">
                        {item.sub_head}
                      </h3>
                      <p className="flex text-sm leading-5">
                        <GoDotFill className="mt-1 mr-1" />
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`relative overflow-hidden text-cyan-700 font-bold border-l-2 border-t-2 ${theme && "border-black"}`}>
            <p className="absolute right-0">Accuracy</p>
            <p className="absolute bottom-[10%] left-[0%] -rotate-90 translate-x-[-40%] translate-y-[-100%]">
              Effectiveness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskMatrix;
