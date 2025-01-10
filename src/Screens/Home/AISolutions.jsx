import Lottie from "lottie-react";
import React, { useState } from "react";
import { FaChartLine, FaHeadSideVirus, FaTruck } from "react-icons/fa";
import { SiFlathub } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import AnimationAI from "../../assets/images/Ai2.json";
import { GoDotFill } from "react-icons/go";
import "./styles/AISolutions.css";
import jsonData from "../../assets/images/Pdf.json";

const AISolutions = ({theme}) => {
  const [selectOne, SetSelectOne] = useState(1);
  const data = jsonData.data_5;

  const handleClick = (item) => {
    SetSelectOne(item);
  };

  const handleIcon = (i) => {
    switch (i) {
      case 1:
        return <FaTruck fontSize={30} className="mr-4 -mt-1" />;
        break;

      case 2:
        return <SiFlathub fontSize={30} className="mr-4 -mt-1" />;
        break;

      case 3:
        return <FaChartLine fontSize={30} className="mr-4 -mt-1" />;
        break;

      case 4:
        return <TbTargetArrow fontSize={30} className="mr-4 -mt-1" />;
        break;

      case 5:
        return <FaHeadSideVirus fontSize={30} className="mr-4 -mt-1" />;
        break;
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
    <div className={`${theme?'text-black':`text-white`}lg:ml-10 ml-3 mb-9`}>
      <p className=" text-xl">
        {jsonData.page_5.split(" ").join(" \u00A0 ")}
      </p>
      <p className="text-sky-700 font-bold mt-8 mb-8">Primary Activities</p>
      <div className="primerySection">
        <div className="">
          {data.map((section, index) => (
            <p
              className={`flex items-center my-5 w-fit py-3 px-4 rounded-full mr-6  -ml-2 ${
                selectOne === index + 1
                  ? "bg-sky-600 "
                  : ""
              }`}
              onClick={() => {
                handleClick(index + 1);
              }}
            >
              {handleIcon(index + 1)}
              {section.headLine}
            </p>
          ))}
        </div>
        <div className="border-2 rounded-lg shadow-lg shadow-cyan-500/50">
        <div className="md:p-6 p-3">
              <div className="flex">
                <p className="font-bold sm:text-4xl text-sky-700 mt-5">
                  {/* GenAI <br /> Solution <br />
                  Recommender */}
                  {
                    renderTextWithLineBreaks(data[selectOne - 1].sub_head.replace(" ", "<br />"))
                  }
                </p>
                <Lottie animationData={AnimationAI} className="" />
              </div>
              <p className=" md:mb-10">
                {/* Stages which can be impacted by AI are marked by “ &nbsp; &nbsp;
                &nbsp; ” Click on them to see more. */}
                {
                  data[selectOne - 1].description
                }
              </p>
            </div>
        </div>

        {/* {selectOne === 1 && (
          <div className="border-2 rounded-lg shadow-lg shadow-cyan-500/50">
            <div className="md:p-6 p-3">
              <div className="flex">
                <p className="font-bold sm:text-4xl text-sky-700 mt-5">
                  GenAI <br /> Solution <br />
                  Recommender
                </p>
                <Lottie animationData={AnimationAI} className="" />
              </div>
              <p className="text-white md:mb-10">
                Stages which can be impacted by AI are marked by “ &nbsp; &nbsp;
                &nbsp; ” Click on them to see more.
              </p>
            </div>
          </div>
        )}
        {selectOne === 4 && (
          <div className="border-2 rounded-lg shadow-lg shadow-cyan-500/50">
            <div className="p-3 md:p-10">
              <p className="text-sky-700 font-bold text-xl pb-7">
                Personalised AI Marketing Tool
              </p>
              <p className="text-white flex ">
                <GoDotFill fontSize={50} className="-mt-3.5 mr-4" />A
                hyper-personalized marketing messenger that uses AI to create
                and deliver targeted promotions, recommendations, and messages
                to customers based on their preferences, purchase history, and
                behavior.
              </p>
              <p className="text-white pt-6 flex">
                <GoDotFill fontSize={30} className="-mt-1 mr-4" />
                Dynamic pricing algorithms that adjust prices based on real-time
                demand, competitor pricing, and customer profiles.
              </p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};
export default AISolutions;
